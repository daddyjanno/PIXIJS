console.log('04 - Assets')

import {
    Application,
    Assets,
    Sprite,
} from '../../node_modules/pixi.js/dist/pixi.mjs'

// // Create a new application
// const app = new Application()
// // Initialize the application
// await app.init({ background: '#1099bb', resizeTo: window })
// // Append the application canvas to the document body
// document.body.appendChild(app.canvas)

// // Start loading right away and create a promise
// const texturePromise = Assets.load('https://pixijs.com/assets/bunny.png')

// // if unrecgnizable URL:
// // const promise = Assets.load({
// //     src: 'https://example.com/ambiguous-file-name',
// //     loader: 'loadTextures',
// // })

// // When the promise resolves, we have the texture!
// texturePromise.then((resolvedTexture) => {
//     // create a new Sprite from the resolved loaded Texture
//     const bunny = Sprite.from(resolvedTexture)
//     // center the sprite's anchor point
//     bunny.anchor.set(0.5)
//     // move the sprite to the center of the screen
//     bunny.x = app.screen.width / 2
//     bunny.y = app.screen.height / 2

//     app.stage.addChild(bunny)
// })

//Using Async/Await

const app2 = new Application()
await app2.init({ background: '#1099bb', resizeTo: window })
document.body.appendChild(app2.canvas)

const texture = await Assets.load('https://pixijs.com/assets/bunny.png')
// Create a new Sprite from the awaited loaded Texture
const bunny = Sprite.from(texture)

bunny.anchor.set(0.5)
bunny.x = app2.screen.width / 2
bunny.y = app2.screen.height / 2

app2.stage.addChild(bunny)
