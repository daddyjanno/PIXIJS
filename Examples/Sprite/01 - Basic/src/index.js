import { Application, Assets, Sprite } from 'pixi.js'

console.log('Sprite - 01 - Basic')

const app = new Application()
await app.init({
    background: '#1099bb',
    resizeTo: window,
    antialias: true,
})
document.body.appendChild(app.canvas)

const texture = await Assets.load('https://pixijs.com/assets/bunny.png')

const bunny = Sprite.from(texture)
bunny.anchor.set(0.5)
bunny.x = app.screen.width / 2
bunny.y = app.screen.height / 2
app.stage.addChild(bunny)

app.ticker.add((time) => {
    bunny.rotation += 0.1 * time.deltaTime
})
