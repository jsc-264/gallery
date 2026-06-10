let tornado = []
let bodies = 200

function cart(r, t) {
    const x = r * cos(t)
    const y = r * sin(t)

    return [x, y]
}

function setup() {
    createCanvas(600, 600);

    for (let i = 0; i < bodies; i++) {
        tornado.push(new Body(random(0, width / 2), random(TWO_PI), random(5, 20)))
    }
}

function draw() {
    background(50);
    translate(width / 2, height / 2)

    tornado.forEach(b => {
        b.render()
        b.update()
    })
}
