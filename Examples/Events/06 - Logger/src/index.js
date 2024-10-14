import { Application, blockDataMap, Graphics, Text } from 'pixi.js'

console.log('Example - 06 - Logger')

const app = new Application()
await app.init({
    antialias: true,
    background: '#1099bb',
    resizeTo: window,
})
document.body.appendChild(app.canvas)

const title = app.stage.addChild(
    new Text({
        text: `Move your mouse slowly over the boxes to
        see the order of pointerenter, pointerleave,
        pointerover, pointerout events on each target!`,
        style: {
            fontSize: 16,
        },
    })
)
title.x = 2

const logs = []

const logText = app.stage.addChild(
    new Text({
        text: '',
        style: {
            fontSize: 14,
        },
    })
)

logText.x = 2
logText.y = 80

app.stage.label = 'stage'

// Mount outer black box
const blackBox = app.stage.addChild(
    new Graphics().rect(0, 0, 400, 400).fill({ color: 0 })
)
blackBox.label = 'black box'
blackBox.x = 400

// Mount white box inside the white one
const whiteBox = app.stage.addChild(
    new Graphics().rect(100, 100, 200, 200).fill(0xffffff)
)
whiteBox.label = 'white box'
whiteBox.x = 400

// Enable interactivity everywhere!
app.stage.eventMode = 'static'
app.stage.hitArea = app.screen
whiteBox.eventMode = 'static'
blackBox.eventMode = 'static'

function onEvent(e) {
    const type = e.type
    const targetName = e.target.label
    const currentTargetName = e.currentTarget.label

    // Add event to top of logs
    logs.push(
        `${currentTargetName} received ${type} event (target is ${targetName})`
    )
    if (
        currentTargetName === 'stage' ||
        type === 'pointerenter' ||
        type === 'pointerleave'
    ) {
        logs.push('-----------------------------------------', '')
    }

    // Prevent logs from growing too long
    if (logs.length > 10) {
        while (logs.length > 10) {
            console.log(logs)

            logs.shift()
        }
    }

    // Update logText
    logText.text = logs.join('\n')
}

;[app.stage, whiteBox, blackBox].forEach((el) => {
    el.on('pointerenter', onEvent)
        .on('pointerleave', onEvent)
        .on('pointerover', onEvent)
        .on('pointerout', onEvent)
})
