let meadow = []
let numFlowers = 5

let palette

function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSL)

    while (meadow.length < numFlowers) {
        let x = random(width)
        let y = random(height)
        let r = random(10, 50)

        let isValidFlower = true
        for (let flower of meadow) {
            let d = dist(x, y, flower.x, flower.y)
            if (d < r + flower.r) {
                isValidFlower = false
                break
            }
        }

        if (isValidFlower) {
            meadow.push(new Flower(x, y, r))
        }
    }
}

function draw() {
    background(111, 50, 80);
    for (let flower of meadow) {
        flower.show()

        let valid = true
        for (let other of meadow){
            if (other == flower){
                continue
            }

            let d = dist(flower.x, flower.y, other.x, other.y)
            if (d < flower.r + other.r - 50 || flower.onEdges()){
                valid = false
            }
        }

        if (valid){
            flower.grow()
        } else {
            flower.reset(meadow)
        }
    }
}