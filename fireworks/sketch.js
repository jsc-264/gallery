let gravity;

const numFireworks = 20;
let fireworks = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB, 360, 100, 100);
    gravity = createVector(0, 0.5);

    for (let i = 0; i < numFireworks; i++) {
        fireworks.push(new Firework(random(width), random(height, height + 50), 10));
    }

    noStroke();
}

function draw() {
    background(0, 0, 0);
    for (let i = fireworks.length - 1; i >= 0; i--) {
        const f = fireworks[i];
        f.render();
        f.update();

        if (f.startedFalling()) {
            f.explode();
        }

        if (f.hitGround()) {
            f.reset();
        }
    }
}
