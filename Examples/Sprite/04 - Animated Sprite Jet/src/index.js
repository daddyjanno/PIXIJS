import { Texture } from 'pixi.js'
import { AnimatedSprite } from 'pixi.js'
import { Assets } from 'pixi.js'
import { Application } from 'pixi.js'

console.log('Sprite - 04 - Animated sprite jet')

const app = new Application()
await app.init({
    background: '#1099bb',
    resizeTo: window,
})
document.body.appendChild(app.canvas)

// Load the animation sprite sheet
await Assets.load('https://pixijs.com/assets/spritesheet/fighter.json')

// Create an array of textures from the sprite sheet
const frames = []

for (let i = 0; i < 30; i++) {
    const val = i < 10 ? `0${i}` : i

    frames.push(Texture.from(`rollSequence00${val}.png`))
}

// Create an AnimatedSprite (brings back memories from the days of Flash, right ?)
const anim = new AnimatedSprite(frames)

/*
 * An AnimatedSprite inherits all the properties of a PIXI sprite
 * so you can change its position, its anchor, mask it, etc
 */
anim.x = app.screen.width / 2
anim.y = app.screen.height / 2
anim.anchor.set(0.5)
anim.animationSpeed = 0.4
anim.play()

app.stage.addChild(anim)

app.ticker.add(() => {
    anim.rotation += 0.01
})
