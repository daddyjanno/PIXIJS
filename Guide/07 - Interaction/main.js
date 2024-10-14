import {
    Application,
    Sprite,
    Assets,
} from '../../node_modules/pixi.js/dist/pixi.mjs'

console.log('07 - Interaction')

// const app = new Application()
// await app.init({
//     backgroundColor: 'brown',
//     resizeTo: window,
//     antialias: true,
// })
// document.body.appendChild(app.canvas)

// await Assets.load('sample.png')

// let sprite = Sprite.from('sample.png')

//-----------------------
// Enabling Interaction
//-----------------------
// sprite.on('pointerdown', (event) => {
//     sprite.x = Math.random() * app.stage.width
//     sprite.y = Math.random() * app.stage.height
// })
// sprite.eventMode = 'static'

// console.log(sprite.isInteractive())

// app.stage.addChild(sprite)

//-----------------------
// Optimization
//-----------------------

const app = new Application()
await app.init({
    eventMode: 'passive',
    eventFeatures: {
        move: true,
        /** disables the global move events which can be very expensive in large scenes */
        globalMove: false,
        click: true,
        wheel: true,
    },
    backgroundColor: 'brown',
    resizeTo: window,
    antialias: true,
})
document.body.appendChild(app.canvas)

await Assets.load('sample.png')

let sprite = Sprite.from('sample.png')
app.stage.addChild(sprite)

console.log(sprite.isInteractive())
sprite.on('pointerdown', (event) => {
    sprite.x = (Math.random() * app.screen.width) / 2
    sprite.y = (Math.random() * app.screen.height) / 2
})
sprite.eventMode = 'static'
console.log(sprite.isInteractive())
