import {
    AnimatedSprite,
    Application,
    Spritesheet,
    Texture,
} from '../../node_modules/pixi.js/dist/pixi.mjs'

console.log('09 - Spritesheets')

const app = new Application()
await app.init({
    background: '#1099bb',
    resizeTo: window,
})
document.body.appendChild(app.canvas)

// Create object to store sprite sheet data

const atlasData = {
    frames: {
        enemy1: {
            frame: { x: 0, y: 0, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0, w: 32, h: 32 },
        },
        enemy2: {
            frame: { x: 32, y: 0, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0, w: 32, h: 32 },
        },
    },
    meta: {
        image: 'images/spritesheet.png',
        format: 'RGBA8888',
        size: { w: 128, h: 32 },
        scale: 1,
    },
    animations: {
        enemy: ['enemy1', 'enemy2'],
    },
}

// Create the SpriteSheet from data and image
const spritesheet = new Spritesheet(
    Texture.from(atlasData.meta.image),
    atlasData
)

await spritesheet.parse()

const anim = new AnimatedSprite(spritesheet.animations.enemy)

anim.animationSpeed = 0.1666

anim.play()

app.stage.addChild(anim)
