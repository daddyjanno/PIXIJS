import {
    AnimatedSprite,
    Application,
    Assets,
    BlurFilter,
    Container,
    Graphics,
    NoiseFilter,
    Sprite,
    Spritesheet,
    Text,
    TextStyle,
    TilingSprite,
} from 'pixi.js'

import manifest from '../manifest.json'

console.log('Beginner Guide')
// console.log(manifest)

const app = new Application()
await app.init({
    background: '#1099bb',
    resizeTo: window,
    antialias: true,
})
globalThis.__PIXI_APP__ = app
document.body.appendChild(app.canvas)

// const rectangle = new Graphics()
//     .rect(200, 200, 100, 150)
//     .fill({ color: 0xffffff, alpha: 0.8 })
//     .stroke({ width: 8, color: 0x00ff00 })

// rectangle.eventMode = 'static'
// rectangle.cursor = 'pointer'

// rectangle.on('pointerdown', moveRectangle)

// function moveRectangle() {
//     rectangle.position.x += 10
//     rectangle.position.y -= 10
// }

const circle = new Graphics()
// app.ticker.add(() => {
//     circle
//         .circle(
//             Math.random() * app.screen.width,
//             Math.random() * app.screen.height,
//             5
//         )
//         .fill({ color: 0xffffff })
// })

// const line = new Graphics()
//     .moveTo(100, 700)
//     .lineTo(900, 400)
//     .stroke({ color: 0x55faff })

// const triangle = new Graphics()
//     .poly([600, 50, 720, 400, 420, 400])
//     .fill({ color: 0x8f5ff2 })
//     .stroke({
//         color: 0xf5fa2f,
//     })

// const star = new Graphics().star(1000, 250, 6, 80, 2).fill({ color: 0xffffff })

// const style = new TextStyle({
//     fill: '#ffffff',
//     fontFamily: 'Montserrat Medium',
//     fontSize: 72,
//     fontStyle: 'italic',
//     fontWeight: 'bold',
//     stroke: { color: '#4a1850', width: 5 },
//     dropShadow: {
//         color: '#4a1850',
//         blur: 4,
//         angle: Math.PI / 6,
//         distance: 12,
//     },
//     wordWrap: true,
//     wordWrapWidth: 440,
// })

// const text = new Text({
//     text: 'Hello Pixi',
//     style,
// })
// text.x = 800
// text.y = 100

// Or
// text.position.x = 800
// text.position.y = 100

// Or
// text.position.set(800, 100)

// const texture = await Assets.load('https://pixijs.com/images/logo.svg')

// const sprite = Sprite.from(texture)
// sprite.scale.set(0.5)

// sprite.skew.x = Math.PI / 4
// Same as
// sprite.skew.set(Math.PI / 4, 0)
// sprite.rotation = Math.PI / 4

// sprite.pivot.x = 100
// sprite.pivot.y = 200

// //Or
// sprite.pivot.set(100, 200)

// sprite.anchor.x = 0.5
// sprite.anchor.y = 0.5

//Or
// sprite.anchor.set(0.5)

// const container = new Container()
// const rectangle = new Graphics().rect(0, 0, 200, 100).fill({ color: 0xffffff })

// container.addChild(rectangle)
// container.position.set(200, 200)

// console.log(`x: ${rectangle.x}, y: ${rectangle.y}`)

// const x = rectangle.getGlobalPosition().x
// const y = rectangle.getGlobalPosition().y

// console.log(`x: ${x}, y: ${y}`)

// await Assets.init({
//     manifest,
// })

// const monsterAssets = await Assets.loadBundle('monsters')

// const sprite = Sprite.from(monsterAssets.monster2)

// const atlasData = {
//     frames: {
//         talk1: {
//             frame: { x: 0, y: 0, w: 350, h: 350 },
//             sourceSize: { w: 350, h: 350 },
//             spriteSourceSize: { x: 0, y: 0, w: 350, h: 350 },
//         },
//         talk2: {
//             frame: { x: 350, y: 0, w: 350, h: 350 },
//             sourceSize: { w: 350, h: 350 },
//             spriteSourceSize: { x: 0, y: 0, w: 350, h: 350 },
//         },
//         talk3: {
//             frame: { x: 700, y: 0, w: 350, h: 350 },
//             sourceSize: { w: 350, h: 350 },
//             spriteSourceSize: { x: 0, y: 0, w: 350, h: 350 },
//         },
//         talk4: {
//             frame: { x: 1050, y: 0, w: 350, h: 350 },
//             sourceSize: { w: 350, h: 350 },
//             spriteSourceSize: { x: 0, y: 0, w: 350, h: 350 },
//         },
//         talk5: {
//             frame: { x: 1400, y: 0, w: 350, h: 350 },
//             sourceSize: { w: 350, h: 350 },
//             spriteSourceSize: { x: 0, y: 0, w: 350, h: 350 },
//         },
//         walk1: {
//             frame: { x: 0, y: 350, w: 350, h: 350 },
//             sourceSize: { w: 350, h: 350 },
//             spriteSourceSize: { x: 0, y: 0, w: 350, h: 350 },
//         },
//         walk2: {
//             frame: { x: 350, y: 350, w: 350, h: 350 },
//             sourceSize: { w: 350, h: 350 },
//             spriteSourceSize: { x: 0, y: 0, w: 350, h: 350 },
//         },
//         walk3: {
//             frame: { x: 700, y: 350, w: 350, h: 350 },
//             sourceSize: { w: 350, h: 350 },
//             spriteSourceSize: { x: 0, y: 0, w: 350, h: 350 },
//         },
//         walk4: {
//             frame: { x: 1050, y: 350, w: 350, h: 350 },
//             sourceSize: { w: 350, h: 350 },
//             spriteSourceSize: { x: 0, y: 0, w: 350, h: 350 },
//         },
//     },
//     meta: {
//         image: 'https://i.imgur.com/rjR8BeV.png',
//         size: { w: 1750, h: 700 },
//     },
//     animations: {
//         talk: ['talk1', 'talk2', 'talk3', 'talk4', 'talk5'],
//         walk: ['walk1', 'walk2', 'walk3', 'walk4'],
//     },
// }

// const texture = await Assets.load(atlasData.meta.image)

// const spritesheet = new Spritesheet(texture, atlasData)

// await spritesheet.parse()

// const talkingSprite = new AnimatedSprite(spritesheet.animations.talk)

// talkingSprite.animationSpeed = 0.13
// talkingSprite.x = app.screen.width * 0.25
// talkingSprite.y = app.screen.height / 2 - talkingSprite.height / 2
// talkingSprite.play()

// const walkingSprite = new AnimatedSprite(spritesheet.animations.walk)
// walkingSprite.x = app.screen.width * 0.5
// walkingSprite.y = app.screen.height / 2 - walkingSprite.height / 2
// walkingSprite.animationSpeed = 0.13
// walkingSprite.play()

const texture = await Assets.load('https://i.imgur.com/LBTK8dw.png')

const tilingSprite = new TilingSprite({
    texture,
    width: app.screen.width,
    height: app.screen.height,
})
tilingSprite.filters = [
    new BlurFilter({ strength: 5 }),
    new NoiseFilter({ noise: 0.5 }),
]

app.ticker.add(() => {
    tilingSprite.tilePosition.x -= 0.5
})

app.stage.addChild(tilingSprite)
