const MIN_BODY_DIAMETER = 5
const MAX_BODY_DIAMETER = 20

let red, green

let tornado

function cart(r, t) {
    const x = r * cos(t)
    const y = r * sin(t)

    return [x, y]
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    red = color(255, 0, 0)
    green = color(0, 255, 0)

    tornado = new Tornado(min(width, height)/2)
    noStroke()
}

function draw() {
    background(50);
    translate(width / 2, height / 2)

    tornado.update()
    tornado.render()
}
