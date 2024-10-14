import { Application, Assets, Sprite } from 'pixi.js'

console.log('03 - Dragging')

const app = new Application()
await app.init({
    backgroundColor: '#1099bb',
    resizeTo: window,
})
document.body.appendChild(app.canvas)

const texture = await Assets.load('https://pixijs.com/assets/bunny.png')

// Set the texture's scale mode to nearest to preserve pixelation
texture.source.scaleMode = 'nearest'

for (let i = 0; i < 10; i++) {
    createBunny(
        Math.floor(Math.random() * app.screen.width),
        Math.floor(Math.random() * app.screen.height)
    )
}

function createBunny(x, y) {
    // Create our little bunny friend..
    const bunny = new Sprite(texture)
    // Enable the bunny to be interactive... this will allow it to respond to mouse and touch events
    bunny.eventMode = 'static'
    // This button mode will mean the hand cursor appears when you roll over the bunny with your mouse
    bunny.cursor = 'pointer'
    // Center the bunny's anchor point
    bunny.anchor.set(0.5)
    // Make it a bit bigger, so it's easier to grab
    bunny.scale.set(3)
    // Setup events for mouse + touch using the pointer events
    bunny.on('pointerdown', onDragStart, bunny)
    // Move the sprite to its designated position
    bunny.x = x
    bunny.y = y
    // Add it to the stage
    app.stage.addChild(bunny)
}

let dragTarget = null

app.stage.eventMode = 'static'
app.stage.hitArea = app.screen
app.stage.on('pointerup', onDragEnd)
app.stage.on('pointerupoutside', onDragEnd)

function onDragStart(event) {
    // Store a reference to the data
    // * The reason for this is because of multitouch *
    // * We want to track the movement of this particular touch *
    this.alpha = 0.5
    dragTarget = this
    console.log(dragTarget)
    app.stage.on('pointermove', onDragMove)
}

function onDragEnd() {
    if (dragTarget) {
        app.stage.off('pointermove', onDragMove)
        dragTarget.alpha = 1
        dragTarget = null
    }
}

function onDragMove(event) {
    if (dragTarget) {
        dragTarget.parent.toLocal(event.global, null, dragTarget.position)
    }
}
