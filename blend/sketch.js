function setup() {
    createCanvas(800, 600);
    rectMode(CENTER)
}

function draw() {
    background(220);

    for (let i = 0; i < 10; i++){
        rect(
            random(width),
            random(height),
            random(200, width/2),
            random(200, height/2)
        )
    }

    noLoop()
}
