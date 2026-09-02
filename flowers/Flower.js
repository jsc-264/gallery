class Flower {
    constructor(x, y, r) {
        this.x = x
        this.y = y
        this.r = r

        const hu = random(360)
        this.petalCol = color(hu, 100, 90)
        this.centreCol = color(hu, 30, 50)
    }

    show() {
        let petals = 10
        for (let i = 0; i < petals; i++) {
            const petalX = this.x + cos(TWO_PI / petals * i) * (this.r * 1.1)
            const petalY = this.y + sin(TWO_PI / petals * i) * (this.r * 1.1)
            const petalR = this.r*map(petals, 4, 10, 2, 0.7)
            fill(this.petalCol)
            circle(petalX, petalY, petalR)
        }
        fill(this.centreCol)
        circle(this.x, this.y, this.r * 2)
    }

    onEdges() {
        if (this.x >= width - this.r) return true
        if (this.x <= this.r) return true
        if (this.y >= height - this.r) return true
        if (this.y <= this.r) return true

        return false
    }

    grow() {
        this.r++
    }

    reset(meadow) {
        let x = random(width)
        let y = random(height)

        let isValidFlower = true
        for (let flower of meadow) {
            let d = dist(x, y, flower.x, flower.y)
            if (d < flower.r) {
                isValidFlower = false
                break
            }
        }

        if (isValidFlower) {
            this.x = x
            this.y = y
            this.r = 0
        }
    }
}