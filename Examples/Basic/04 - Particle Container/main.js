console.log(' Example - Basic - Particle Container')

import {
    Application,
    Assets,
    Container,
} from '../../../node_modules/pixi.js/dist/pixi.mjs'

const app = new Application()
await app.init({ backgound: '#1099bb', resizeTo: window })
document.body.appendChild(app.canvas)

const texture = await Assets.load('https://pixijs.com/assets/maggot_tiny.png')
const sprites = new Container()

app.stage.addChild(sprites)
