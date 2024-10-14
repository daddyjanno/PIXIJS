import { Application, Graphics } from 'pixi.js'

console.log('Example - 07 - Pointer Tracker')

const app = new Application()
await app.init({
    background: '#1099bb',
    resizeTo: window,
    antialias: true,
})
document.body.appendChild(app.canvas)

const circle = new Graphics()
    .circle(0, 0, 8)
    .fill({ color: 0xffffff })
    .stroke({ color: 0x111111, alpha: 0.87, width: 1 })

circle.position.set(app.screen.width / 2, app.screen.height / 2)

app.stage.addChild(circle)

// Enable interactivity!
app.stage.eventMode = 'static'

// Make sure the whole canvas area is interactive, not just the circle.
app.stage.hitArea = app.screen

// Follow the pointer

app.stage.addEventListener('pointermove', (e) => {
    circle.position.copyFrom(e.global)
})
