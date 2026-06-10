const MIN_BODY_DIAMETER = 5
const MAX_BODY_DIAMETER = 20

let tornado

let center

function cart(r, t) {
    const x = r * cos(t)
    const y = r * sin(t)

    return [x, y]
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB)

    center = {
        x: width / 2,
        y: height / 2
    }

    tornado = new Tornado(min(width, height) / 2)
}

function draw() {
    background(0, 0, 10);
    translate(center.x, center.y)

    tornado.update()
    tornado.render()
}

function mouseDragged(){
    center = {
        x: mouseX,
        y: mouseY
    }
}

function touchStarted() {
    for (let touch of touches) {
        center = {
            x: touch.x,
            y: touch.y
        }
    }
}
