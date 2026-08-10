let slimes = []
let numSlimes = 20

function setup() {
    createCanvas(windowWidth, windowHeight);
    rectMode(CENTER)
    colorMode(HSB)
    for (let i = 0; i < numSlimes; i++) {
        slimes.push(new Slime())
    }
}

function draw() {
    background(0, 0, 25);
    for (let s of slimes) {
        s.update()
        s.render()
    }
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight)
}
