import { Application, Container } from 'pixi.js'
import { addStars } from './addStars'
import { addMoon } from './addMoon'
import { addMountains } from './addMountains'
import { addTrees } from './addTrees'
import { addFloor } from './addFloor'
import { addTrain } from './addTrain'

console.log('Tutorial 03')

const app = new Application()
await app.init({
    resizeTo: window,
    antialias: true,
    background: '#021f4b',
})
document.body.appendChild(app.canvas)

const trainContainer = new Container()

addStars(app)
addMoon(app)
addMountains(app)
addTrees(app)
addFloor(app)
addTrain(app, trainContainer)
