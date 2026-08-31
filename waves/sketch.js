function setup() {
    createCanvas(500, 500);
    noStroke()
}

function draw() {
    background(0);

    let scl = 100
    let time = millis()/5
    for (let i = 0; i < height; i++) {
        circle(width/2 + sin((i+time)/(scl))*scl, i, 50)
    }
}
