import {
    Application,
    Assets,
    Sprite,
} from '../../node_modules/pixi.js/dist/pixi.min.mjs'

console.log('11 - Textures')

const app = new Application()
await app.init({
    background: '#1099bb',
    resizeTo: window,
})
document.body.appendChild(app.canvas)

const texture = await Assets.load('https://pixijs.com/assets/flowerTop.png')

// pass a texture explicitly
const sprite = new Sprite(texture)

//as options
const sprite2 = new Sprite({ texture })
sprite2.y = 200

// from the cache as the texture is loaded
const sprite3 = Sprite.from('https://pixijs.com/assets/flowerTop.png')
sprite3.y = 400

app.stage.addChild(sprite)
app.stage.addChild(sprite2)
app.stage.addChild(sprite3)
