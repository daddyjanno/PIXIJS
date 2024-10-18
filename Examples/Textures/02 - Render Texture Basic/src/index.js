import { Application, Assets, Container, RenderTexture, Sprite } from 'pixi.js'

console.log('Example - 02 - Render Texture Basic')

const app = new Application()
await app.init({
    background: '#1099bb',
    resizeTo: window,
})
globalThis.__PIXI_APP__ = app
document.body.appendChild(app.canvas)

const container = new Container()
container.x = 100
container.y = 60
app.stage.addChild(container)

// Load the bunny texture
const texture = await Assets.load('https://pixijs.com/assets/bunny.png')

for (let i = 0; i < 25; i++) {
    const bunny = new Sprite(texture)

    bunny.x = (i % 5) * 30
    bunny.y = Math.floor(i / 5) * 30
    bunny.rotation = Math.random() * (Math.PI * 2)

    container.addChild(bunny)
}

const rt = RenderTexture.create({
    width: 300,
    height: 300,
    scaleMode: 'linear',
    resolution: 1,
})
const sprite = new Sprite(rt)
sprite.x = 450
sprite.y = 60

app.stage.addChild(sprite)

app.ticker.add(() => {
    app.renderer.render({ target: rt, container })
})
