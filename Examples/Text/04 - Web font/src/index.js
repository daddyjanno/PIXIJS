import { Application, Text } from 'pixi.js'

console.log('Example - 04 - Web font')

// Load the google fonts before starting...
window.WebFontConfig = {
    google: {
        families: ['Snippet'],
    },
    active() {
        init()
    },
}

// include the web-font loader script
function insertScript() {
    const wf = document.createElement('script')
    wf.src = `${
        document.location.protocol === 'https:' ? 'https' : 'http'
    }://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js`
    wf.type = 'text/javascript'
    wf.async = 'true'
    const s = document.getElementsByTagName('script')[0]
    s.parentNode.insertBefore(wf, s)
}
insertScript()

async function init() {
    const app = new Application()
    await app.init({
        background: '#1099bb',
        resizeTo: window,
    })
    document.body.appendChild(app.canvas)

    const textSample = new Text({
        text: "PixiJS text using the custom 'Snippet' Webfont",
        style: {
            fontFamily: 'Snippet',
            fontSize: 50,
            fill: 'white',
            align: 'left',
        },
    })
    textSample.position.set(50, 200)
    app.stage.addChild(textSample)
}
