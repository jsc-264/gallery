class Firework {
    constructor(x, y, size) {
        this.numParticles = 5
        this.particles = []

        this.exploded = false

        this.pos = createVector(x, y);
        this.size = size;

        this.vel = createVector(0, random(-20, -10));

        let hue = map(this.pos.x, 0, width, 180, 330);
        this.col = color(hue, 100, 100);
    }

    render() {
        if (this.particles.length == 0) {
            fill(this.col);
            circle(this.pos.x, this.pos.y, this.size);
            return;
        }

        for (let part of this.particles) {
            part.render();
        }
    }

    update() {
        this.vel.add(gravity);
        this.pos.add(this.vel);

        for (let i = this.particles.length - 1; i >= 0; i--) {
            let part = this.particles[i];
            part.update();
        }
    }

    startedFalling() {
        return this.vel.y >= 0;
    }

    explode() {
        if (!this.exploded) {
            for (let i = 0; i < numFireworks; i++) {
                const v = p5.Vector.random2D().mult(random(2, 8));
                this.particles.push(new Particle(this.pos.x, this.pos.y, v, 5, this.col));
            }
        }

        this.exploded = true;
    }

    hitGround() {
        return this.pos.y > height + this.size;
    }

    reset() {
        this.pos = createVector(random(width), height);
        this.vel = createVector(0, random(-25, -15));
        let hue = map(this.pos.x, 0, width, 180, 330);
        this.col = color(hue, 100, 100);
        this.particles = [];
        this.exploded = false;
    }
}
