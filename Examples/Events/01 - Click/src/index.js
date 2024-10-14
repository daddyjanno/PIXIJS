console.log('01 - Click')

import { Application, Assets, Sprite } from 'pixi.js'

const app = new Application()
await app.init({
    backgroundColor: '#1099bb',
    resizeTo: window,
})
document.body.appendChild(app.canvas)

// Load the bunny texture
const texture = await Assets.load('https://pixijs.com/assets/bunny.png')

// Set the texture's scale mode to nearest to preserve pixelation
texture.source.scaleMode = 'nearest'

// Create the bunny sprite
const bunny = new Sprite(texture)
bunny.anchor.set(0.5)
bunny.x = app.screen.width / 2
bunny.y = app.screen.height / 2

// Opt-in to interactivity
bunny.eventMode = 'static'

// Shows hand cursor
bunny.cursor = 'pointer'

// Pointers normalize touch and mouse (good for mobile and desktop)
bunny.on('pointerdown', onClick)

app.stage.addChild(bunny)

// Alternatively, use the mouse & touch events:
// sprite.on('click', onClick); // mouse-only
// sprite.on('tap', onClick); // touch-only

function onClick() {
    bunny.scale.x *= 1.25
    bunny.scale.y *= 1.25
}
