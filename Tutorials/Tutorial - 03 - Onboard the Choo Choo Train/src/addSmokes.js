import { Graphics } from 'pixi.js'

export function addSmokes(app, container) {
    const groupCount = 5
    const particleCount = 7
    const groups = []
    const baseX = container.x + 170
    const baseY = container.y - 120

    for (let i = 0; i < groupCount; i++) {
        const smokeGroup = new Graphics()
        for (let j = 0; j < particleCount; j++) {
            const radius = 20 + Math.random() * 20
            const x = (Math.random() * 2 - 1) * 40
            const y = (Math.random() * 2 - 1) * 40

            smokeGroup.circle(x, y, radius)
        }
        smokeGroup.fill({ color: 0xc9c9c9, alpha: 0.5 })

        smokeGroup.x = baseX
        smokeGroup.y = baseY
        smokeGroup.tick = i * (1 / groupCount)

        app.stage.addChild(smokeGroup)
        groups.push(smokeGroup)
    }
    app.ticker.add((time) => {
        const dt = time.deltaTime * 0.01

        groups.forEach((group) => {
            group.tick = (group.tick + dt) % 1
            group.x = baseX - Math.pow(group.tick, 2) * 400
            group.y = baseY - group.tick * 200
            group.scale.set(Math.pow(group.tick, 0.75))
        })
    })
}
