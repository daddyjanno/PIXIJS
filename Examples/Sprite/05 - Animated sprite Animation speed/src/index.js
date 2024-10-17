import { Texture } from 'pixi.js'
import { AnimatedSprite } from 'pixi.js'
import { Assets } from 'pixi.js'
import { Application } from 'pixi.js'

console.log('Sprite - 05 - Animated sprite Animation speed')

const app = new Application()
await app.init({
    autoStart: true,
    resizeTo: window,
})
document.body.appendChild(app.canvas)

// Load the animation sprite sheed
const spritesheet = await Assets.load(
    'https://pixijs.com/assets/spritesheet/0123456789.json'
)

const textures = []

for (let i = 0; i < 10; i++) {
    const framekey = `0123456789 ${i}.ase`
    const texture = Texture.from(framekey)
    const time = spritesheet.data.frames[framekey].duration
    textures.push({ texture, time })
}

const scaling = 4

// Create a slow AnimatedSprite
const slow = new AnimatedSprite(textures)
slow.anchor.set(0.5)
slow.scale.set(scaling)
slow.x = (app.screen.width - slow.width) / 2
slow.y = app.screen.height / 2
slow.animationSpeed = 0.5
slow.play()

// Create a fast AnimatedSprite
const fast = new AnimatedSprite(textures)
fast.anchor.set(0.5)
fast.scale.set(scaling)
fast.x = (app.screen.width + fast.width) / 2
fast.y = app.screen.height / 2

fast.play()

app.stage.addChild(slow)
app.stage.addChild(fast)

app.start()
