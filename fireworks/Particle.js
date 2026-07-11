class Particle extends Firework {
    constructor(x, y, vel, size, col) {
        super(x, y, size);
        this.vel = vel;
        this.col = col;
    }

    render() {
        fill(this.col);
        circle(this.pos.x, this.pos.y, this.size);
    }

    update() {
        this.vel.add(gravity);
        this.pos.add(this.vel);
    }
}
