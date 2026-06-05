function static(intensity=20){
    loadPixels()

    for (let i = 0; i < pixels.length; i++) {
        pixels[i] += random(-intensity, intensity)
    }

    updatePixels()
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    rectMode(CENTER)
    frameRate(1)
}

function draw() {
    background(200)
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
        filter("blur", random(10, 30))
        pop()
    }

    pop()

    static(intensity=20)
}
