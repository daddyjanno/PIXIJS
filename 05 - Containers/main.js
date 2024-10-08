console.log('05 - Containers')

//------------------------
// Containers as Groups
//------------------------

// import {
//     Application,
//     Container,
//     Assets,
//     Sprite,
// } from '../node_modules/pixi.js/dist/pixi.mjs'

// const app = new Application()

// async function init() {
//     await app.init({ background: '#1099bb', resizeTo: window })
//     document.body.appendChild(app.canvas)

//     // Create and add a container to the stage
//     const container = new Container()
//     app.stage.addChild(container)

//     // Load the bunny texture
//     const texture = await Assets.load('https://pixijs.com/assets/bunny.png')

//     // Create a 5x5 grid of bunnies in the container
//     for (let i = 0; i < 25; i++) {
//         const bunny = new Sprite(texture)

//         bunny.x = (i % 5) * 50
//         bunny.y = Math.floor(i / 5) * 50
//         container.addChild(bunny)
//     }

//     // Move the container to the center
//     container.x = app.screen.width / 2
//     container.y = app.screen.height / 2

//     // Center the bunny sprites in local container coordinates
//     container.pivot.x = container.width / 2
//     container.pivot.y = container.height / 2

//     // Listen for animate update
//     app.ticker.add((time) => {
//         // Continuously rotate the container!
//         // * use delta to create frame-independent transform *
//         container.rotation -= 0.01 * time.deltaTime
//     })
// }

// init()

//------------------------
// Masking
//------------------------

import {
    Application,
    Container,
    Graphics,
    Text,
} from '../node_modules/pixi.js/dist/pixi.mjs'

let app = new Application()
globalThis.__PIXI_APP__ = app
await app.init({ width: 640, height: 360 })
document.body.appendChild(app.canvas)

// Create window frame
let frame = new Container()
frame.x = 320 - 104
frame.y = 180 - 104

let frameGraphic = new Graphics({})
    .rect(0, 0, 208, 208)
    .fill(0x999999)
    .stroke({ color: 0xffffff, width: 4, alignment: 0 })

frame.addChild(frameGraphic)
app.stage.addChild(frame)

// Create a graphics object to define our mask
let mask = new Graphics()
    // Add the rectangular area to show
    .rect(0, 0, 200, 200)
    .fill(0xffffff)

// Add container that will hold our masked content
let maskContainer = new Container()

// Set the mask to use our graphics object from above

maskContainer.mask = mask

// Add the mask as a child, so that the mask is positioned relative to its parent
maskContainer.addChild(mask)

// Offset by the window's frame width
maskContainer.position.set(4, 4)

// And add the container to the window!
frame.addChild(maskContainer)

// Create contents for the masked container

let text = new Text({
    text:
        'This text will scroll up and be masked, so you can see how masking works.  Lorem ipsum and all that.\n\n' +
        'You can put anything in the container and it will be masked!',
    style: {
        fontSize: 24,
        fill: 0x1010ff,
        wordWrap: true,
        wordWrapWidth: 180,
    },
    x: 10,
})

maskContainer.addChild(text)

// Add a ticker callback to scroll the text up and down

let elapsed = 0.0
app.ticker.add((ticker) => {
    // Update the text's y coordinate to scroll it
    elapsed += ticker.deltaTime
    text.y = 10 + -100.0 + Math.cos(elapsed / 50.0) * 100.0
})
