console.log('05 - Blending modes')

import { Application } from '../../../node_modules/pixi.js/dist/pixi.mjs'

const app = new Application()
await app.init()
document.body.appendChild(app.canvas)
