import {
    Application,
    Container,
    Assets,
    Sprite,
} from '../node_modules/pixi.js/dist/pixi.mjs'

console.log('05 - Containers')

//------------------------
// Containers as Groups
//------------------------

const app = new Application()

async function init() {
    await app.init({ background: '#1099bb', resizeTo: window })
    document.body.appendChild(app.canvas)

    // Create and add a container to the stage
    const container = new Container()
    app.stage.addChild(container)

    // Load the bunny texture
    const texture = await Assets.load('https://pixijs.com/assets/bunny.png')

    // Create a 5x5 grid of bunnies in the container
    for (let i = 0; i < 25; i++) {
        const bunny = new Sprite(texture)

        bunny.x = (i % 5) * 50
        bunny.y = Math.floor(i / 5) * 50
        container.addChild(bunny)
    }

    // Move the container to the center
    container.x = app.screen.width / 2
    container.y = app.screen.height / 2

    // Center the bunny sprites in local container coordinates
    container.pivot.x = container.width / 2
    container.pivot.y = container.height / 2

    // Listen for animate update
    app.ticker.add((time) => {
        // Continuously rotate the container!
        // * use delta to create frame-independent transform *
        container.rotation -= 0.01 * time.deltaTime
    })
}

init()

//------------------------
// Masking
//------------------------
