import { Application } from 'pixi.js'

console.log('Example - 04 - Web font')

const app = new Application()
await app.init({
    background: '#1099bb',
    resizeTo: window,
})
document.body.appendChild(app.canvas)
