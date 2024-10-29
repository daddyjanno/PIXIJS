import { Application } from 'pixi.js'

console.log('Tutorial 03')

const app = new Application()
await app.init({
    resizeTo: window,
    antialias: true,
    background: '#021f4b',
})
document.body.appendChild(app.canvas)
