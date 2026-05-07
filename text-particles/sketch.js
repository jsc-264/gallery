const msg = "I Love You"

const url = "https://fonts.googleapis.com/css2?family=Darumadrop+One&display=swap"
let font

async function setup() {
    createCanvas(windowWidth*0.9, windowHeight*0.9);
    font = await loadFont(url)
    textFont(font)
    textSize(50)
    textAlign(CENTER, CENTER)
}

function draw() {
    background(220);
    push()
    translate(width/2, height/2)
    text(msg, 0, 0)
    pop()
}
