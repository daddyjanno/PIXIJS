import { Application, Assets, Text } from 'pixi.js'

console.log('Example - 03 - From font')

const app = new Application()
await app.init({
    background: '#1099bb',
    resizeTo: window,
})
document.body.appendChild(app.canvas)

// Add font files to the bundle
Assets.addBundle('fonts', [
    {
        alias: 'ChaChicle',
        src: 'https://pixijs.com/assets/webfont-loader/ChaChicle.ttf',
    },
    {
        alias: 'Lineal',
        src: 'https://pixijs.com/assets/webfont-loader/Lineal.otf',
    },
    {
        alias: 'Dotrice Regular',
        src: 'https://pixijs.com/assets/webfont-loader/Dotrice-Regular.woff',
    },
    {
        alias: 'Crosterian',
        src: 'https://pixijs.com/assets/webfont-loader/Crosterian.woff2',
    },
])

// Load the font bundle
await Assets.loadBundle('fonts')

const text1 = new Text({
    text: 'ChaChicle.tff',
    style: { fontFamily: 'ChaChicle', fontSize: 50 },
})

const text2 = new Text({
    text: '.Lineal.otf',
    style: { fontFamily: 'Lineal', fontSize: 50 },
})
text2.y = 150

const text3 = new Text({
    text: 'Dotrice Regular.woff',
    style: { fontFamily: 'Dotrice Regular', fontSize: 50 },
})
text3.y = 300

const text4 = new Text({
    text: 'Crosterian.woff2',
    style: {
        fontFamily: 'Crosterian',
        fontSize: 50,
    },
})
text4.y = 450

app.stage.addChild(text1)
app.stage.addChild(text2)
app.stage.addChild(text3)
app.stage.addChild(text4)
