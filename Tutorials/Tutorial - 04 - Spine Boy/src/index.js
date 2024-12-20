import 'pixi-spine'
import { Application, Assets } from 'pixi.js'
import { SpineBoy } from './SpineBoy'

console.log('Tutorial 04')

const app = new Application()
await app.init({
    background: '#1099bb',
    resizeTo: window,
    antialias: true,
})
document.body.appendChild(app.canvas)

Assets.add({
    alias: 'spineSkeleton',
    src: './assets/spineboy-pro.skel',
})
Assets.add({
    alias: 'spineAtlas',
    src: './assets/spineboy-pma.atlas',
})

// Create our character
const spineBoy = new SpineBoy()

// Adjust character transformation.
spineBoy.view.x = app.screen.width / 2
spineBoy.view.y = app.screen.height - 80
spineBoy.spine.scale.set(0.5)

// Add character to the stage.
app.stage.addChild(spineBoy.view)

await Assets.load(['spineSkeleton', 'spineAtlas'])
