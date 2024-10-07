import * as PIXI from '../node_modules/pixi.js/dist/pixi.mjs'

// Create a PixiJS application.
const app = new PIXI.Application()

// Intialize the application.
await app.init({ background: '#1099bb', resizeTo: window })

// Then adding the application's canvas to the DOM body.
document.body.appendChild(app.canvas)

const texture = await PIXI.Assets.load('https://pixijs.com/assets/bunny.png')

const bunny = new PIXI.Sprite(texture)
app.stage.addChild(bunny)

bunny.anchor.set(0.5)
bunny.x = app.screen.width / 2
bunny.y = app.screen.height / 2

app.ticker.add((time) => {
    bunny.rotation += 0.1 * time.deltaTime
})
