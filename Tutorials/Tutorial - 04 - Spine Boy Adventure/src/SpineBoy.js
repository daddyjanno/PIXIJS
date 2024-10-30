import { Container } from 'pixi.js'
import { Spine } from 'pixi-spine'

export class SpineBoy {
    constructor() {
        this.view = new Container()

        this.spine = Spine.from({
            skeleton: 'spineSkeleton',
            atlas: 'spineAtlas',
        })

        this.view.addChild(this.spine)
    }
}
