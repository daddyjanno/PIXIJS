import { Application } from 'pixi.js'
import { addStars } from './addStars'
import { addMoon } from './addMoon'
import { addMountains } from './addMountains'
import { addTrees } from './addTrees'

console.log('Tutorial 03')

const app = new Application()
await app.init({
    resizeTo: window,
    antialias: true,
    background: '#021f4b',
})
document.body.appendChild(app.canvas)

addStars(app)
addMoon(app)
addMountains(app)
addTrees(app)
