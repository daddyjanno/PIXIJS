import 'pixi-spine'
import '@pixi-spine/loader-base'

import { Application, Assets } from 'pixi.js'
import { SpineBoy } from './SpineBoy'

console.log('Tutorial 04')

const app = new Application()
await app.init({
    background: '#021f4b',
    resizeTo: window,
    antialias: true,
})
document.body.appendChild(app.canvas)

await Assets.load([
    {
        alias: 'spineSkeleton',
        src: 'https://raw.githubusercontent.com/pixijs/spine-v8/main/examples/assets/spineboy-pro.skel',
    },
    {
        alias: 'spineAtlas',
        src: 'https://raw.githubusercontent.com/pixijs/spine-v8/main/examples/assets/spineboy-pma.atlas',
    },
    {
        alias: 'sky',
        src: 'https://pixijs.com/assets/tutorials/spineboy-adventure/sky.png',
    },
    {
        alias: 'background',
        src: 'https://pixijs.com/assets/tutorials/spineboy-adventure/background.png',
    },
    {
        alias: 'midground',
        src: 'https://pixijs.com/assets/tutorials/spineboy-adventure/midground.png',
    },
    {
        alias: 'platform',
        src: 'https://pixijs.com/assets/tutorials/spineboy-adventure/platform.png',
    },
])

const spineBoy = new SpineBoy()

spineBoy.view.x = app.screen.width / 2
spineBoy.view.y = app.screen.height - 80
