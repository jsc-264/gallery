let slimes = []
let numSlimes = 20

function setup() {
    createCanvas(windowWidth, windowHeight);
    rectMode(CENTER)
    for (let i = 0; i < numSlimes; i++) {
        slimes.push(new Slime())
    }
}

function draw() {
    background(100);
    for (let s of slimes) {
        s.update()
        s.render()
    }
}
