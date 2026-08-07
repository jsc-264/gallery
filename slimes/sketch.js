let s

function setup() {
    createCanvas(800, 600);
    s = new Slime(100, 100)
}

function draw() {
    background(220);
    s.render()
}
