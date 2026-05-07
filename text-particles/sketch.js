const msg = "I Love You"

const url = "./assets/DarumadropOne-Regular.ttf"
let font

let myPoints = []

async function setup() {
    createCanvas(windowWidth*0.9, windowHeight*0.9);
    font = await loadFont(url)
    textFont(font)
    textSize(map(width, 200, 1000, 20, 200))
    textAlign(CENTER, CENTER)

    noFill()
    stroke(0)
    strokeWeight(2)

    const options = {
        sampleFactor: 1,
        simplifyThreshold: 0
    }
    const messagePoints = font.textToContours(msg, 0, 0, options)

    for (let letterPoints of messagePoints) {
        for (let p of letterPoints) {
            myPoints.push({
                x: p.x,
                y: p.y
            })
        }
    }

}

function draw() {
    background(220);

    translate(width/2, height/2)
    beginShape()
    for (let p of myPoints){
        vertex(p.x, p.y)
    }
    endShape()
}
