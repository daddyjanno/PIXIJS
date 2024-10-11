import { Application, Assets, GraphicsContext, Graphics } from 'pixi.js'

const app = new Application()
await app.init({
    background: 'white',
    resizeTo: window,
    antialias: true,
})

document.body.appendChild(app.canvas)

const pandaTexture = await Assets.load(`https://pixijs.com/assets/panda.png`)
const pandaContext = new GraphicsContext()
    .circle(0, 0, 120)
    .fill('green')
    .texture(
        pandaTexture,
        'white',
        -pandaTexture.width / 2,
        -pandaTexture.height / 2
    )
    // add a baby yellow panda
    .translate(100, 100)
    .scale(0.4)
    .texture(pandaTexture, 'yellow')

const graphics = new Graphics(pandaContext)
const graphics2 = new Graphics(pandaContext)

graphics.x = app.screen.width / 2
graphics.y = app.screen.height / 2
graphics2.x = app.screen.width / 2 - 200
graphics2.y = app.screen.height / 2 - 200
graphics2.rotation = 0.5

app.stage.addChild(graphics, graphics2)
