import { Container, Graphics } from 'pixi.js'

export function addTrain(app, container) {
    const head = createTrainHead(app)
    const carriage = createTrainCarriage(app)
    carriage.x = -carriage.width

    container.addChild(head, carriage)

    const scale = 0.75
    container.scale.set(scale)
    container.x = app.screen.width / 2 - head.width / 2

    // Define animation parameters.
    let elapsed = 0
    const shakeDistance = 3
    const baseY = app.screen.height - 35 - 55 * scale
    const speed = 0.5
    container.y = baseY

    app.ticker.add((time) => {
        elapsed += time.deltaTime
        const offset =
            Math.sin(elapsed * 0.5 * speed) * 0.5 + 0.5 + shakeDistance
        container.y = baseY + offset
    })

    app.stage.addChild(container)
}

function createTrainHead(app) {
    const container = new Container()

    // Define the dimensions of the head front.
    const frontHeight = 100
    const frontWidth = 140
    const frontRadius = frontHeight / 2

    // Define the dimensions of the cabin.
    const cabinHeight = 200
    const cabinWidth = 150
    const cabinRadius = 15

    // Define the dimensions of the chimney.
    const chimneyBaseWidth = 30
    const chimneyTopWidth = 50
    const chimneyHeight = 70
    const chimneyDomeHeight = 25
    const chimneyTopOffset = (chimneyTopWidth - chimneyBaseWidth) / 2
    const chimneyStartX =
        cabinWidth + frontWidth - frontRadius - chimneyBaseWidth
    const chimneyStartY = -frontHeight

    // Define the dimensions of the roof.
    const roofHeight = 25
    const roofExcess = 20

    // Define the dimensions of the door.
    const doorWidth = cabinWidth * 0.7
    const doorHeight = cabinHeight * 0.7
    const doorStartX = (cabinWidth - doorWidth) * 0.5
    const doorStartY = -(cabinHeight - doorHeight) * 0.5 - doorHeight

    // Define the dimensions of the window.
    const windowWidth = doorWidth * 0.8
    const windowHeight = doorHeight * 0.4
    const offset = (doorWidth - windowWidth) / 2

    const graphics = new Graphics()
        .moveTo(chimneyStartX, chimneyStartY)
        .lineTo(
            chimneyStartX - chimneyTopOffset,
            chimneyStartY - chimneyHeight + chimneyDomeHeight
        )
        .quadraticCurveTo(
            chimneyStartX + chimneyBaseWidth / 2,
            chimneyStartY - chimneyHeight - chimneyDomeHeight,
            chimneyStartX + chimneyBaseWidth + chimneyTopOffset,
            chimneyStartY - chimneyHeight + chimneyDomeHeight
        )
        .lineTo(chimneyStartX + chimneyBaseWidth, chimneyStartY)
        .fill({ color: 0x121212 })

        // Draw the head front
        .roundRect(
            cabinWidth - frontRadius - cabinRadius,
            -frontHeight,
            frontWidth + frontRadius + cabinRadius,
            frontHeight,
            frontRadius
        )
        .fill({ color: 0x7f3333 })

        // Draw the cabin
        .roundRect(0, -cabinHeight, cabinWidth, cabinHeight, cabinRadius)
        .fill({ color: 0x725f19 })

        // Draw the roof
        .rect(
            -roofExcess / 2,
            cabinRadius - cabinHeight - roofHeight,
            cabinWidth + roofExcess,
            roofHeight
        )
        .fill({ color: 0x52431c })

        // Draw the door
        .roundRect(doorStartX, doorStartY, doorWidth, doorHeight, cabinRadius)
        .stroke({ color: 0x52431c, width: 3 })

        // Draw the window
        .roundRect(
            doorStartX + offset,
            doorStartY + offset,
            windowWidth,
            windowHeight,
            10
        )
        .fill({ color: 0x848484 })

    // Define the dimensions of the wheels.
    const bigWheelRadius = 55
    const smallWheelRadius = 35
    const wheelGap = 5
    const wheelOffsetY = 5

    // Create all the wheels.
    const backWheel = createTrainWheel(bigWheelRadius)
    const midWheel = createTrainWheel(smallWheelRadius)
    const frontWheel = createTrainWheel(smallWheelRadius)

    // Position the wheels.
    backWheel.x = bigWheelRadius
    backWheel.y = wheelOffsetY
    midWheel.x = backWheel.x + bigWheelRadius + smallWheelRadius + wheelGap
    midWheel.y = backWheel.y + bigWheelRadius - smallWheelRadius
    frontWheel.x = midWheel.x + smallWheelRadius * 2 + wheelGap
    frontWheel.y = midWheel.y

    container.addChild(graphics, backWheel, midWheel, frontWheel)

    app.ticker.add((time) => {
        const dr = time.deltaTime * 0.15

        backWheel.rotation += dr * (smallWheelRadius / bigWheelRadius)
        midWheel.rotation += dr
        frontWheel.rotation += dr
    })

    return container
}

function createTrainWheel(radius) {
    // Define the dimensions of the wheel.
    const strokeThickness = radius / 3
    const innerRadius = radius - strokeThickness

    return (
        new Graphics()
            .circle(0, 0, radius)
            .fill({ color: 0x848484 })
            .stroke({ color: 0x121212, width: strokeThickness, alignment: 1 })
            // Draw the spokes
            .rect(
                -strokeThickness / 2,
                -innerRadius,
                strokeThickness,
                innerRadius * 2
            )
            .rect(
                -innerRadius,
                -strokeThickness / 2,
                innerRadius * 2,
                strokeThickness
            )
            .fill({ color: 0x4f4f4f })
    )
}

function createTrainCarriage(app) {
    const container = new Container()

    const containerHeight = 125
    const containerWidth = 200
    const containerRadius = 15
    const edgeHeight = 25
    const edgeExcess = 20
    const connectorWidth = 30
    const connectorHeight = 10
    const connectorGap = 10
    const connectorOffsetY = 20

    const graphics = new Graphics()
        .roundRect(
            edgeExcess / 2,
            -containerHeight,
            containerWidth,
            containerHeight,
            containerRadius
        )
        .fill({ color: 0x725f19 })
        .rect(
            0,
            containerRadius - containerHeight - edgeHeight,
            containerWidth + edgeExcess,
            edgeHeight
        )
        .fill({ color: 0x52431c })

        // Draw the connectors
        .rect(
            containerWidth + edgeExcess / 2,
            -connectorOffsetY - connectorHeight,
            connectorWidth,
            connectorHeight
        )
        .rect(
            containerWidth + edgeExcess / 2,
            -connectorOffsetY - connectorHeight * 2 - connectorGap,
            connectorWidth,
            connectorHeight
        )
        .fill({ color: 0x121212 })

    const wheelRadius = 35
    const wheelGap = 40
    const centerX = (containerWidth + edgeExcess) / 2
    const offsetX = wheelRadius + wheelGap / 2

    const backWheel = createTrainWheel(wheelRadius)
    const frontWheel = createTrainWheel(wheelRadius)

    backWheel.x = centerX - offsetX
    frontWheel.x = centerX + offsetX
    frontWheel.y = backWheel.y = 25

    app.ticker.add((time) => {
        const dr = time.deltaTime * 0.15

        backWheel.rotation += dr
        frontWheel.rotation += dr
    })

    container.addChild(graphics, backWheel, frontWheel)

    return container
}
