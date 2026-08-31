function setup() {
    createCanvas(600, 600);
    noStroke()
}

function draw() {
    background(0);

    let scl = 60
    let time = millis() / 5
    for (let i = 0; i < height; i++) {
        circle(width / 2 + sin((i + time) / (scl)) * scl + i/2, i, scl + sin((i + time) / scl) * (scl*sin(time/50)))
    }
}
