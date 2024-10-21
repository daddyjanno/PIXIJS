import {
    Application,
    Assets,
    BlurFilter,
    Color,
    Container,
    FillGradient,
    Graphics,
    Sprite,
    Text,
    TextStyle,
    Texture,
} from 'pixi.js'

console.log('Example - Advanced - 01 - Slots')

const app = new Application()
await app.init({
    background: '1099bb',
    resizeTo: window,
})
document.body.appendChild(app.canvas)

// Charger les textures:
await Assets.load([
    'https://pixijs.com/assets/eggHead.png',
    'https://pixijs.com/assets/flowerTop.png',
    'https://pixijs.com/assets/helmlok.png',
    'https://pixijs.com/assets/skully.png',
])

const REEL_WIDTH = 160 // Largeur de chaque colonne de rouleau
const SYMBOL_SIZE = 150 // Taille de chaque symbole affiché

// Créer différents symboles pour chaque rouleau
const slotsTextures = [
    Texture.from('https://pixijs.com/assets/eggHead.png'),
    Texture.from('https://pixijs.com/assets/flowerTop.png'),
    Texture.from('https://pixijs.com/assets/helmlok.png'),
    Texture.from('https://pixijs.com/assets/skully.png'),
]

// Construire les rouleaux
const reels = [] // Tableau pour stocker les rouleaux
const reelsContainer = new Container() // Conteneur pour tous les rouleaux

for (let i = 0; i < 5; i++) {
    const rc = new Container() // Crée un conteneur pour un rouleau spécifique
    rc.x = i * REEL_WIDTH // Positionne le container en fonction de l'index
    reelsContainer.addChild(rc) // Ajoute ce container au container  principal

    const reel = {
        container: rc, // Le conteneur de ce rouleau
        symbols: [], // Les symboles du rouleau
        position: 0, // Position initiale du rouleau
        previousPosition: 0, // Position précédente pour calculer les mouvements
        blur: new BlurFilter(), // Filtre de flou pour simuler la vitesse du rouleau
    }
    reel.blur.blurX = 0
    reel.blur.blurY = 0
    rc.filters = [reel.blur] // Applique le filtre de flou au conteneur du rouleau

    // Crée les symboles dans chaque rouleau
    for (let j = 0; j < 4; j++) {
        const symbol = new Sprite(
            slotsTextures[Math.floor(Math.random() * slotsTextures.length)]
        )

        // Définit la position du symbole et son échelle pour l'ajuster à la taille définie
        symbol.x = Math.round((SYMBOL_SIZE - symbol.width) / 2)
        symbol.y = j * SYMBOL_SIZE
        symbol.scale.x = symbol.scale.y = Math.min(
            SYMBOL_SIZE / symbol.width,
            SYMBOL_SIZE / symbol.height
        )

        reel.symbols.push(symbol) // Ajoute le symbole à ce rouleau
        rc.addChild(symbol) // Ajoute le symbole au conteneur du rouleau
    }
    reels.push(reel) // Ajoute ce rouleau au tableau des rouleaux
}
app.stage.addChild(reelsContainer) // Ajoute le conteneur de tous les rouleaux à la scène de l'application

// Build top & bottom covers and position reelContainer
const margin = (app.screen.height - SYMBOL_SIZE * 3) / 2 // Calcule la marge en haut et en bas des rouleaux
reelsContainer.x = Math.round(app.screen.width - REEL_WIDTH * 5)
reelsContainer.y = margin
const top = new Graphics()
    .rect(0, 0, app.screen.width, margin)
    .fill({ color: 0x0 }) // Rectangle noir en haut
const bottom = new Graphics()
    .rect(0, SYMBOL_SIZE * 3 + margin, app.screen.width, margin)
    .fill({ color: 0x0 }) // Rectangle noir en bas

// Création du texte d'en-tête et de jeu
// Un dégradé est créé pour être utilisé comme remplissage du texte
const fill = new FillGradient(0, 0, 0, 36 * 1.7) // Crée un dégradé de remplissage

const colors = [0xffffff, 0x00ff99].map((color) =>
    Color.shared.setValue(color).toNumber()
)
colors.forEach((number, index) => {
    const ratio = index / colors.length
    fill.addColorStop(ratio, number)
})

// Ajout du texte "Spin the wheels!" et "PIXI MONSTER SLOTS!"
const style = new TextStyle({
    fontFamily: 'Arial',
    fontSize: 36,
    fontStyle: 'italic',
    fontWeight: 'bold',
    fill: { fill },
    stroke: { color: 0x4a1850, width: 5 },
    dropShadow: {
        color: 0x000000,
        angle: Math.PI / 6,
        blur: 4,
        distance: 6,
    },
    wordWrap: true,
    wordWrapWidth: 440,
})

const playText = new Text({ text: 'Tournez les roues', style })
playText.x = Math.round((bottom.width - playText.width) / 2)
playText.y =
    app.screen.height - margin + Math.round((margin - playText.height) / 2)
bottom.addChild(playText)

const headerText = new Text({ text: 'PIXI MONSTER SLOTS!', style })
headerText.x = Math.round((top.width - headerText.width) / 2)
headerText.y = Math.round((margin - headerText.height) / 2)
top.addChild(headerText)

app.stage.addChild(top)
app.stage.addChild(bottom)
