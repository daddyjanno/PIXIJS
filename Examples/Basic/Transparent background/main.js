console.log("Examples - Basic - Transparent background");

import { Application, Assets, Sprite } from "../../../node_modules/pixi.js/dist/pixi.mjs";

const app = new Application()

await app.init({backgroundAlpha: 0, resizeTo: window})

document.body.appendChild(app.canvas)

const texture = await Assets.load('https://pixijs.com/assets/bunny.png')
const bunny = new Sprite(texture)
bunny.anchor.set(0.5)
bunny.x = app.screen.width / 2
bunny.y = app.screen.height / 2

app.stage.addChild(bunny)

app.ticker.add(() => {
    bunny.rotation += 0.05
})
