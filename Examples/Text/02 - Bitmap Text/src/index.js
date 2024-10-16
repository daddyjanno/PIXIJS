import { Application, Assets, BitmapText } from 'pixi.js'

console.log('Example - 02 - Bitmap Text')

const app = new Application()
await app.init({
    background: '#1099bb',
    resizeTo: window,
})
document.body.appendChild(app.canvas)

// load bitmap font
await Assets.load('https://pixijs.com/assets/bitmap-font/desyrel.xml')

const bitmapFontText = new BitmapText({
    text: 'bitmap fonts are supported!\nWoo yay!',
    style: {
        fontFamily: 'Desyrel',
        fontSize: 55,
        align: 'left',
    },
})

bitmapFontText.x = 50
bitmapFontText.y = 200

app.stage.addChild(bitmapFontText)
