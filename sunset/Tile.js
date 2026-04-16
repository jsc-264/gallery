class Tile {
    constructor(x, y, j, w) {
        this.pos = createVector(x, y)
        this.w = w
        this.j = j

        const circlesRange = map(j, 0, DIMENSION, tileWidth, tileWidth / 10)
        const numCircles = map(j, 0, DIMENSION, 10, 1)
        this.extraCirclesCoords = []
        for (let i = 0; i < numCircles; i++) {
            this.extraCirclesCoords.push(
                createVector(
                    random(-circlesRange, circlesRange),
                    random(-circlesRange, circlesRange)
                )
            )
        }

        this.strokeWeight = 1
    }

    render() {
        push()
        translate(this.pos.x, this.pos.y)

        strokeWeight(this.strokeWeight)

        const strokeColT = map(this.j, 0, DIMENSION, 0, 1)
        const strokeCol = lerpColor(startColour, endColour, strokeColT)
        stroke(strokeCol)
        noFill()

        circle(0, 0, this.w)
        for (let circlePosition of this.extraCirclesCoords){
            circle(circlePosition.x, circlePosition.y, this.w)
        }
        pop()
    }

    setStrokeWeight(n) {
        this.strokeWeight = map(n, 0, 1, 1, 3)
    }
}