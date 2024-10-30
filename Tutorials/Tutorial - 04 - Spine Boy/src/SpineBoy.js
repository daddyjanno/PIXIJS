import { Container } from 'pixi.js'
import { Spine } from '@esotericsoftware/spine-pixi'

export class SpineBoy {
    constructor() {
        this.view = new Container()

        this.spine = Spine.from('spineSkeleton', 'spineAtlas')

        this.view.addChild(this.spine)
    }
}
