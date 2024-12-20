import {
    Application,
    buildGeometryFromPath,
    GraphicsPath,
    Mesh,
    Texture,
} from 'pixi.js'

console.log('08 - Mesh from path')

const app = new Application()
await app.init({
    backgroundColor: 'brown',
    resizeTo: window,
    antialias: true,
})
document.body.appendChild(app.canvas)

const path = new GraphicsPath()
    .rect(-50, -50, 100, 100)
    .circle(80, 80, 50)
    .circle(80, -80, 50)
    .circle(-80, 80, 50)
    .circle(-80, -80, 50)

const geometry = buildGeometryFromPath({ path })

const meshes = []

for (let i = 0; i < 200; i++) {
    const x = Math.random() * app.screen.width
    const y = Math.random() * app.screen.height

    const mesh = new Mesh({
        geometry,
        texture: Texture.WHITE,
        x,
        y,
        tint: Math.random() * 0xffffff,
    })
    app.stage.addChild(mesh)

    meshes.push(mesh)
}
app.ticker.add(() => {
    meshes.forEach((mesh) => {
        mesh.rotation += 0.01
    })
})
