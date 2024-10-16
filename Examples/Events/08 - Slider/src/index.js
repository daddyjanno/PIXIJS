import {
    Application,
    Graphics,
    Container,
    Sprite,
    Text,
    Assets,
    SCALE_MODES,
    log2,
} from 'pixi.js'

const app = new Application()
await app.init({
    backgroundColor: 0x1099bb,
    resizeTo: window,
})
document.body.appendChild(app.canvas)

const stageHeight = app.screen.height
const stageWidth = app.screen.width

app.stage.hitArea = app.screen

// Créer un container pour le slider
const sliderContainer = new Container()
app.stage.addChild(sliderContainer)

// Taille du slider
const sliderWidth = 320
const sliderHeight = 4

// Créer le slider (une barre horizontale)
const slider = new Graphics()
    .rect(0, 0, sliderWidth, sliderHeight)
    .fill({ color: 'black' })

slider.x = (stageWidth - sliderWidth) / 2
slider.y = stageHeight * 0.75 //

sliderContainer.addChild(slider)

// Créer le handle (un cercle qui se déplace sur la barre du slider)
const handleRadius = 8
const handle = new Graphics()
    .circle(0, 0, handleRadius)
    .fill({ color: 'white' })

handle.x = slider.x + sliderWidth / 2
handle.y = slider.y + sliderHeight / 2
handle.eventMode = 'static'
handle.cursor = 'pointer'

sliderContainer.addChild(handle)

// Charger un sprite (par exemple un "bunny") dont l'échelle sera modifiée par le slider
const texture = await Assets.load('https://pixijs.com/assets/bunny.png')
texture.source.scaleMode = 'nearest'
const bunny = new Sprite(texture)
bunny.anchor.set(0.5)
bunny.x = stageWidth / 2
bunny.y = stageHeight / 2
bunny.scale.set(3)

app.stage.addChild(bunny)

// Ajouter du texte d'instructions
const title = new Text({
    text: 'Drag the handle to resize the bunny!',
    fill: '#ffffff',
    fontFamily: 'Arial',
    fontSize: 24,
})
title.anchor.set(0.5)
title.x = stageWidth / 2
title.y = 50
app.stage.addChild(title)

handle
    .on('pointerdown', onDragStart)
    .on('pointerup', onDragEnd)
    .on('pointerupoutside', onDragEnd)

function onDragStart() {
    app.stage.eventMode = 'static'
    app.stage.addEventListener('pointermove', onDrag)
}
function onDragEnd() {
    app.stage.eventMode = 'auto'
    app.stage.removeEventListener('pointermove', onDrag)
}

// Fonction pour gérer le drag et déplacer le handle
function onDrag(e) {
    const pointerPosition = e.global
    // // Contrainte du mouvement du handle pour rester dans le slider
    const halfHandleWidth = handle.width / 2
    handle.x = Math.max(
        slider.x,
        Math.min(pointerPosition.x - halfHandleWidth, slider.x + sliderWidth)
    )

    // // Normaliser la position du handle entre 0 et 1
    const normalizedPosition = (handle.x - slider.x) / sliderWidth
    console.log('handle.x :', handle.x)
    console.log('sliderWidth :', sliderWidth)
    console.log('handle.x / sliderWidth :', handle.x / (sliderWidth / 2))

    console.log(normalizedPosition)

    // // Changer l'échelle du bunny en fonction de la position du handle
    bunny.scale.set(6 * normalizedPosition)
}
