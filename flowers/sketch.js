let meadow = []
let numFlowers = 10

function setup() {
    createCanvas(500, 500);
    while (meadow.length < numFlowers){
        let x = random(width)
        let y = random(height)
        let r = random(10, 50)

        let isValidFlower = true
        for (let flower of meadow){
            let d = dist(x, y, flower.x, flower.y)
            if (d < r + flower.r){
                isValidFlower = false
                break
            }
        }

        if (isValidFlower){
            meadow.push(new Flower(x, y, r))
        }
    }
}

function draw() {
    background(220);
    for (let flower of meadow){
        flower.show()

        let touchingOther = false
        for (let other of meadow){
            if (flower == other) break

            touchingOther = flower.touching(other)
        }

        if (!touchingOther && !flower.onEdges()){
            flower.grow()
        }
    }
}
