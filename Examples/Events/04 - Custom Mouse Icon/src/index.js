import { Application, Assets, Sprite, Texture } from 'pixi.js'

console.log('04 - Custom Mouse Icon')

const app = new Application()
await app.init({
    background: '#1099bb',
    resizeTo: window,
})
document.body.appendChild(app.canvas)

// CSS style for icons
const defaultIcon = "url('https://pixijs.com/assets/bunny.png'),auto"
const hoverIcon = "url('https://pixijs.com/assets/bunny_saturated.png'),auto"

// Load textures
await Assets.load([
    'https://pixijs.com/assets/bg_button.jpg',
    'https://pixijs.com/assets/button.png',
    'https://pixijs.com/assets/button_down.png',
    'https://pixijs.com/assets/button_over.png',
])

// Add custom cursor styles
app.renderer.events.cursorStyles.default = defaultIcon
app.renderer.events.cursorStyles.hover = hoverIcon

// Create a background
const background = Sprite.from('https://pixijs.com/assets/bg_button.jpg')
background.width = app.screen.width
background.height = app.screen.height

// Add it to the stage
app.stage.addChild(background)

// Create some textures from an image path
const textureButton = Texture.from('https://pixijs.com/assets/button.png')
const textureButtonDown = Texture.from(
    'https://pixijs.com/assets/button_down.png'
)
const textureButtonOver = Texture.from(
    'https://pixijs.com/assets/button_over.png'
)

const buttons = []
const buttonPositions = [175, 75, 655, 75, 410, 325, 150, 465, 685, 445]

for (let i = 0; i < 5; i++) {
    const button = new Sprite(textureButton)
    button.cursor = 'hover'
    button.anchor.set(0.5)
    button.x = buttonPositions[i * 2]
    button.y = buttonPositions[i * 2 + 1]

    // Make the button interactive...
    button.eventMode = 'static'

    button
        .on('pointerdown', onButtonDown)
        .on('pointerout', onButtonOut)
        .on('pointerover', onButtonOver)
        .on('pointerup', onButtonUp)
        .on('pointerupoutise', onButtonUp)

    app.stage.addChild(button)
    buttons.push(button)
}

function onButtonDown() {
    this.isDown = true
    this.texture = textureButtonDown
    this.alpha = 1
}
function onButtonUp(isOver) {
    if (isOver) {
        this.texture = textureButtonOver
    } else {
        this.texture = textureButton
    }
}
function onButtonOver() {
    this.isOver = true
    this.texture = textureButtonOver
}
function onButtonOut() {
    this.isOver = false
    this.texture = textureButton
}
