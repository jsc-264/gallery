let msg;

const url = "./assets/DarumadropOne-Regular.ttf"
let font

let particles = []
let points = []

async function setup() {
    createCanvas(windowWidth * 0.9, windowHeight * 0.9);
    font = await loadFont(url)
    textFont(font)
    textSize(map(width, 200, 1000, 50, 200))
    textAlign(CENTER, CENTER)

    msg = random([
        "I love You",
        "My Prince",
        "My Darling",
        "Always and Forever"
    ])

    const options = {
        sampleFactor: 0.15,
        simplifyThreshold: 0.1
    }
    const messagePoints = font.textToContours(msg, width / 2, height / 2, options)

    for (let letterPoints of messagePoints) {
        for (let p of letterPoints) {
            points.push({
                x: p.x,
                y: p.y,
                open: true
            })

            particles.push(new Particle(random(width), random(height)))

        }
    }

    noStroke()
    fill(51, 87, 41)
}

function draw() {
    background(140, 176, 130);

    for (let part of particles) {
        part.update()
        part.render()
    }
}
