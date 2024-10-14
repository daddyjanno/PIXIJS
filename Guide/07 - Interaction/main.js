import {
    Application,
    Sprite,
    Assets,
} from '../../node_modules/pixi.js/dist/pixi.mjs'

console.log('07 - Interaction')

const app = new Application()
await app.init({
    backgroundColor: 'brown',
    resizeTo: window,
    antialias: true,
})
document.body.appendChild(app.canvas)

await Assets.load('sample.png')

let sprite = Sprite.from('sample.png')
sprite.on('pointerdown', (event) => {
    sprite.x = Math.random() * app.stage.width
    sprite.y = Math.random() * app.stage.height
})
sprite.eventMode = 'static'

console.log(sprite.isInteractive())

app.stage.addChild(sprite)
