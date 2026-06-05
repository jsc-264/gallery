function setup() {
    createCanvas(windowWidth, windowHeight);
    rectMode(CENTER)
}

function draw() {
    push()

    for (let i = 0; i < 10; i++){
        push()
        fill(
            random(255),
            random(255),
            random(255)
        )
        noStroke()
        rect(
            random(width),
            random(height),
            random(200, width/2),
            random(200, height/2)
        )
        filter("blur", random(1, 5))
        pop()
    }

    filter("blur", random(5))
    pop()

    noLoop()
}
