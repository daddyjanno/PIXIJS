console.log('04 - Assets')

import * as PIXI from '../../node_modules/pixi.js/dist/pixi.mjs'

const app = new PIXI.Application()
await app.init({ background: '#1099bb', resizeTo: window })
document.body.appendChild(app.canvas)
