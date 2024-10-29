import { Application } from 'pixi.js'

console.log('Tutorial 03')

const app = new Application()
await app.init({
    resizeTo: window,
    antialias: true,
})
document.body.appendChild(app.canvas)
