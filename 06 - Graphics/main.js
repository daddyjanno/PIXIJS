import { Application, Graphics } from '../node_modules/pixi.js/dist/pixi.mjs'

console.log('06 - Graphics')

const app = new Application()
await app.init({ width: 640, height: 360 })
document.body.appendChild(app.canvas)

// Create a Graphics object, draw a rectangle and fill it

let obj = new Graphics().rect(0, 0, 200, 100).fill(0xff0000)
app.stage.addChild(obj)
