const msg = "I Love You"

const url = "./assets/DarumadropOne-Regular.ttf"
let font

async function setup() {
    createCanvas(windowWidth*0.99, windowHeight*0.99);
    font = await loadFont(url)
    textFont(font)
    textSize(70)
    textAlign(CENTER, CENTER)

    noFill()
    stroke(0)
    strokeWeight(2)
}

function draw() {
    background(220);
    push()
    translate(width/2, height/2)
    // text(msg, 0, 0)

    const options = {
        sampleFactor: 1,
        simplifyThreshold: 0
    }
    const messagePoints = font.textToContours(msg, 0, 0, options)

    for (let letterPoints of messagePoints){
        for (let p of letterPoints){
            point(p.x, p.y)
        }
    }
    pop()
}
