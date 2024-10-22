import { Application, Graphics } from 'pixi.js'

const app = new Application()
await app.init({
    width: 500,
    height: 500,
    background: 'black',
    antialias: true,
})

document.body.appendChild(app.canvas)

const particles = []
const maxParticles = 250

app.ticker.add(() => {
    for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.x += p.velocity.x
        p.y += p.velocity.y

        if (
            p.x < 0 ||
            p.x > app.screen.width ||
            p.y < 0 ||
            p.y > app.screen.height
        ) {
            p.x = app.screen.width / 2
            p.y = app.screen.height / 2
            p.velocity = {
                x: Math.random() * 10 - 5,
                y: Math.random() * 10 - 5,
            }
        }
    }
    if (particles.length < maxParticles) {
        const radius = 1 + Math.random() * 4
        const b = createBall(radius)
        b.x = app.screen.width / 2
        b.y = app.screen.height / 2
        b.velocity = {
            x: Math.random() * 10 - 5,
            y: Math.random() * 10 - 5,
        }
        b.alpha = 0.2 + Math.random() * 0.8

        particles.push(b)
        app.stage.addChild(b)
    }
})

function createBall(radius) {
    const ball = new Graphics().circle(0, 0, radius).fill('white')
    return ball
}
