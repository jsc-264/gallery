class Tile {
    constructor(x, y, j, w) {
        this.pos = createVector(x, y)
        this.w = w

        this.circlesRange = map(j, 0, DIMENSION, tileWidth / 3, tileWidth / 10)
        this.numCircles = map(j, 0, DIMENSION, 10, 2)
        this.extraCirclesCoords = []
        for (let i = 0; i < this.numCircles; i++) {
            this.extraCirclesCoords.push(
                createVector(
                    random(-this.circlesRange, this.circlesRange),
                    random(-this.circlesRange, this.circlesRange)
                )
            )
        }
    }
}