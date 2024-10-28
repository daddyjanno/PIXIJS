import { DisplacementFilter, Sprite } from 'pixi.js'

export function addDisplacement(app) {
    const sprite = Sprite.from('displacement')
    sprite.texture.source.addressMode = 'repeat'

    const filter = new DisplacementFilter({
        sprite,
        scale: 50,
        width: app.screen.width,
        height: app.screen.height / 2,
    })

    app.stage.filters = [filter]
}
