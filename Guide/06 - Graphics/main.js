import {
    Application,
    Graphics,
    GraphicsContext,
} from '../../node_modules/pixi.js/dist/pixi.mjs'

console.log('06 - Graphics')

const app = new Application()
await app.init({ width: 640, height: 360 })
document.body.appendChild(app.canvas)

// // Create a Graphics object, draw a rectangle and fill it
// let obj = new Graphics().rect(50, 50, 200, 100).fill(0xff0000)

// // There is also support for svg
// let mySvg = new Graphics().svg(`
//     <svg>
//       <path d="M 100 350 q 150 -300 300 0" stroke="blue" />
//     </svg>
//    `)

// app.stage.addChild(obj)
// app.stage.addChild(mySvg)

// ---------------------------
//  The GraphicsContext
// ---------------------------

// Creating individual circles without sharing a context:

// for (let i = 0; i < 5; i++) {
//     let circle = new Graphics().circle(100, 100, 50).fill('red')
// }

// Sharing a GraphicsContext:

// let circleContext = new GraphicsContext().circle(100, 100, 50).fill('red')

// for (let i = 0; i < 5; i++) {
//     let duplicate = new Graphics(circleContext)
// }

// let circleContext = new GraphicsContext().circle(100, 100, 50).fill('red')
// let rectangleContext = new GraphicsContext().rect(0, 0, 50, 50).fill('red')

// let frames = [circleContext, rectangleContext]
// let frameIndex = 0

// const graphics = new Graphics(frames[frameIndex])

// animate from square to circle:

// function update() {
//     // swap the context - this is a very cheap operation!
//     // much cheaper than clearing it each frame.
//     graphics.context = frames[frameIndex++ % frames.length]
//     console.log(frameIndex++ % frames.length)
// }

// let circleGraphics = new Graphics().circle(100, 100, 50).fill('red')

// same as:

// let circleGraphics = new Graphics()

// circleGraphics.context.circle(100, 100, 50).fill('red')

// ---------------------------
//      Graphics For Display
// ---------------------------
