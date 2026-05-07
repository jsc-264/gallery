const msg = "0"

const url = "./assets/DarumadropOne-Regular.ttf"
let font

let particles = []
let points = []

async function setup() {
    createCanvas(windowWidth * 0.9, windowHeight * 0.9);
    font = await loadFont(url)
    textFont(font)
    textSize(map(width, 200, 1000, 100, 200))
    textAlign(CENTER, CENTER)

    const options = {
        sampleFactor: 0.5,
        simplifyThreshold: 0
    }
    const messagePoints = font.textToContours(msg, width / 2, height / 2, options)

    for (let letterPoints of messagePoints) {
        for (let p of letterPoints) {
            points.push({
                x: p.x,
                y: p.y
            })

            particles.push(new Particle(random(width), random(height), {
                x: p.x,
                y: p.y
            }))

        }
    }

}

function draw() {
    background(220);

    for (let part of particles) {
        part.update()
        part.render()
    }
}
