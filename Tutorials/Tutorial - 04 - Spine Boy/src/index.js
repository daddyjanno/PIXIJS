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

await Assets.load(['spineSkeleton', 'spineAtlas'])
