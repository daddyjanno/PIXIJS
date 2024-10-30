import 'pixi-spine'
import { Application, Assets } from 'pixi.js'
import { SpineBoy } from './SpineBoy'
import { Spine } from '@esotericsoftware/spine-pixi'

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

await Assets.load(['spineSkeleton', 'spineAtlas']).then((ressource) => {
    console.log(ressource)

    const animation = new Spine(ressource.spineData)
    console.log(animation)

    app.stage.addChild(animation)
})

const spineboy = Spine.from('spineSkeleton', 'spineAtlas')
console.log(spineboy)

// Set the default mix time to use when transitioning
// from one animation to the next.
spineboy.state.data.defaultMix = 0.2

// Center the spine object on screen.
spineboy.x = window.innerWidth / 2
spineboy.y = window.innerHeight / 2 + spineboy.getBounds().height / 2

// Set animation "run" on track 0, looped.
spineboy.state.setAnimation(0, 'run', true)

// Add the display object to the stage.
app.stage.addChild(spineboy)
