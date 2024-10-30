import { Application, Assets, Graphics, Sprite, Text, TextStyle } from 'pixi.js'

console.log('Beginner Guide')

const app = new Application()
await app.init({
    background: '#1099bb',
    resizeTo: window,
    antialias: true,
})
globalThis.__PIXI_APP__ = app
document.body.appendChild(app.canvas)

const rectangle = new Graphics()
    .rect(200, 200, 100, 150)
    .fill({ color: 0xffffff, alpha: 0.8 })
    .stroke({ width: 8, color: 0x00ff00 })

rectangle.eventMode = 'static'
rectangle.cursor = 'pointer'

rectangle.on('pointerdown', moveRectangle)

function moveRectangle() {
    rectangle.position.x += 10
    rectangle.position.y -= 10
}

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

app.stage.addChild(rectangle)
