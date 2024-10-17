import {
    Application,
    Assets,
    Text,
} from '../../node_modules/pixi.js/dist/pixi.min.mjs'

console.log('10 - Text')

const app = new Application()
await app.init({
    background: '#1099bb',
    resizeTo: window,
})
document.body.appendChild(app.canvas)
globalThis.__PIXI_APP__ = app

await Assets.load('ShortStack.woff2')

const text = new Text({
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    style: {
        fontFamily: 'short-stack',
        fontSize: 36,
        fill: 'white',
        dropShadow: {
            alpha: 1,
            anlge: 5,
            blur: 2,
            color: 'black',
            distance: 2,
        },
        wordWrap: true,
        wordWrapWidth: app.screen.width * 0.5,
    },
})
text.x = app.screen.width / 4
text.y = app.screen.height / 4

app.stage.addChild(text)
