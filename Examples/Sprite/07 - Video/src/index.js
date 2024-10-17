import { Assets } from 'pixi.js'
import { Sprite } from 'pixi.js'
import { Texture } from 'pixi.js'
import { Application, Graphics } from 'pixi.js'

console.log('Sprite - 07 - Video')

const app = new Application()
await app.init({
    resizeTo: window,
})
document.body.appendChild(app.canvas)

// Create play button that can be used to trigger the video
const button = new Graphics()
    .roundRect(0, 0, 100, 100, 10)
    .fill({ color: 0xffffff, alpha: 0.5 })
    .beginPath()
    .moveTo(36, 30)
    .lineTo(36, 70)
    .lineTo(70, 50)
    .closePath()
    .fill(0xffffff)

// Position the button
button.x = (app.screen.width - button.width) / 2
button.y = (app.screen.height - button.height) / 2

// Enable interactivity on the button
button.eventMode = 'static'
button.cursor = 'pointer'

app.stage.addChild(button)

// Load the video texture
const texture = await Assets.load('https://pixijs.com/assets/video.mp4')

// Listen for a click/tap event to start playing the video
// this is useful for some mobile platforms. For example:
// ios9 and under cannot render videos in PIXI without a
// polyfill - https://github.com/bfred-it/iphone-inline-video
// ios10 and above require a click/tap event to render videos
// that contain audio in PIXI. Videos with no audio track do
// not have this requirement

button.on('pointertap', () => {
    // Don't need the button anymore
    button.destroy()

    const videoSprite = Sprite.from(texture)

    // Stretch to fill the whole screen
    videoSprite.width = app.screen.width
    videoSprite.height = app.screen.height

    app.stage.addChild(videoSprite)
})
