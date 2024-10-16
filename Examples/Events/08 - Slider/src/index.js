import { Application } from 'pixi.js'

console.log('Example - 08 - Slider')

const app = new Application()
await app.init({
    background: '#1099bb',
    resizeto: window,
    antialias: true,
})
document.body.appendChild(app.canvas)
