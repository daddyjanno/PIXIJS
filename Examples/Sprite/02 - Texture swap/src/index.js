import { Application, Assets, Sprite } from 'pixi.js'

console.log('Sprite - 02 - Texture swap')

const app = new Application()
await app.init({
    background: '#1099bb',
    resizeTo: window,
    antialias: true,
})
document.body.appendChild(app.canvas)

const alien1texture = await Assets.load(
    'https://pixijs.com/assets/flowerTop.png'
)
const alien2texture = await Assets.load('https://pixijs.com/assets/eggHead.png')

let alien1 = true

const character = Sprite.from(alien1texture)
character.anchor.set(0.5)
character.x = app.screen.width / 2
character.y = app.screen.height / 2
app.stage.addChild(character)

character.eventMode = 'static'
character.cursor = 'pointer'

character.on('pointertap', handleChangeTexture)

function handleChangeTexture() {
    character.texture = alien1 ? alien2texture : alien1texture
    alien1 = !alien1
}

app.ticker.add(() => {
    character.rotation += 0.02
})
