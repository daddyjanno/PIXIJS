import { Application } from 'pixi.js'

console.log('Tutorial 02')

const app = new Application()
await app.init({
    background: '#1099bb',
    resizeTo: window,
})
document.body.appendChild(app.canvas)
