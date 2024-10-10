import { Application } from "../../../node_modules/pixi.js/dist/pixi.mjs"

console.log("Examples - Basic - Container")

const app = new Application()
await app.init({ background: '#1099bb', resizeTo: window })
document.body.appendChild(app.canvas)