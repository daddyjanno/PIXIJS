import {
    Application,
    Assets,
    Graphics,
    Point,
    RenderTexture,
    Sprite,
} from 'pixi.js'

console.log('Example - Advanced - 02 - Scratch card')

const app = new Application()
await app.init({ resizeTo: window })
document.body.appendChild(app.canvas)

// prepare circle texture, that will be our brush
const brush = new Graphics().circle(0, 0, 50).fill({ color: 0xffffff })

// Create a line that will interpolate the drawn points
const line = new Graphics()

// Load the textures
await Assets.load([
    'https://pixijs.com/assets/bg_grass.jpg',
    'https://pixijs.com/assets/bg_rotate.jpg',
])

const { width, height } = app.screen
const stageSize = { width, height }

const background = Object.assign(
    Sprite.from('https://pixijs.com/assets/bg_grass.jpg'),
    stageSize
)
const imageToReveal = Object.assign(
    Sprite.from('https://pixijs.com/assets/bg_rotate.jpg'),
    stageSize
)
const renderTexture = RenderTexture.create(stageSize)
const renderTextureSprite = new Sprite(renderTexture)

imageToReveal.mask = renderTextureSprite

app.stage.addChild(background, imageToReveal, renderTextureSprite)

app.stage.eventMode = 'static'
app.stage.hitArea = app.screen
app.stage
    .on('pointerdown', pointerDown)
    .on('pointerup', pointerUp)
    .on('pointerupoutside', pointerUp)
    .on('pointermove', pointerMove)

let dragging = false
let lastDrawPoint = null

function pointerDown(event) {
    dragging = true
    pointerMove(event)
}
function pointerUp(event) {
    dragging = false
    lastDrawPoint = null
}
function pointerMove({ global: { x, y } }) {
    if (dragging) {
        brush.position.set(x, y)
        app.renderer.render({
            container: brush,
            target: renderTexture,
            clear: false,
            skipUpdateTransform: false,
        })
    }
    // Smooth out the drawing a little bit to make it look nicer
    // this connects the previous drawn point to the current one
    // using a line
    if (lastDrawPoint) {
        line.clear()
            .moveTo(lastDrawPoint.x, lastDrawPoint.y)
            .lineTo(x, y)
            .stroke({ width: 100, color: 0xffffff })
        app.renderer.render({
            container: line,
            target: renderTexture,
            clear: false,
            skipUpdateTransform: false,
        })
        lastDrawPoint = lastDrawPoint | new Point()
        lastDrawPoint.set(x, y)
    }
}
