let scl = 40
let time, off
let quant = 1.5
let rows = 3

function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke()
}

function draw() {
    background(0);

    for (let i = 0; i < rows; i++) {
        off = map(i, 0, rows - 1, 100, width - 100)
        time = millis() / 5
        for (let i = -scl; i < (height + scl) / quant; i++) {
            fill(sin(time / 10) * 10 + abs(sin((i + time) / (scl)) * scl),
                sin(time / 100) * 100 + abs(sin((i + time) / (scl)) * scl),
                20 + sin(time / 50) * 200 + abs(sin((i + time) / (scl)) * scl)
            )
            circle(
                off + sin((i + time) / (scl)) * scl,
                i * quant,
                scl + sin(time/100)*20 + sin((i + time) / scl) * (scl * sin(time / scl)))
        }
    }
}
