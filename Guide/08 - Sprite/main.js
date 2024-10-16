import { Application } from '../../node_modules/pixi.js/dist/pixi.mjs'

console.log('08 - Sprite')

const app = new Application()
await app.init({
    background: '#1099bb',
    resizeTo: window,
})
document.body.appendChild(app.canvas)
