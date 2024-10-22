import { Application, Graphics } from 'pixi.js'

console.log('My app')

const app = new Application()
await app.init({
    width: 350,
    height: 350,
    background: 'white',
    antialias: true,
})

document.body.appendChild(app.canvas)

const radius = 50
const ball = new Graphics().circle(0, 0, radius).fill('red')
ball.x = app.screen.width / 2
ball.y = app.screen.height / 2

app.stage.addChild(ball)

app.ticker.add(() => {
    ball.y += 5
    if (ball.y > app.screen.height + radius) {
        ball.y = -radius
    }
})
