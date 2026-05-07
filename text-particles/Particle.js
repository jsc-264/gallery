function averageVectors(vectors) {
    let sum = createVector()
    for (let v of vectors) {
        sum.add(p5.Vector.normalize(v))
    }
    return sum
}


class Particle {
    constructor(x, y) {
        this.diam = 15
        this.pos = createVector(x, y)
        this.vel = createVector(0, 1)
        this.vel.rotate(random(TWO_PI))
    }

    render() {
        circle(this.pos.x, this.pos.y, this.diam)

        const closest = this.closestTo(points)
        line(this.pos.x, this.pos.y, closest.x, closest.y)
    }

    update() {
        this.pos.add(this.vel)

        if (this.pos.x < -this.diam) this.pos.x = width + this.diam
        if (this.pos.x > width + this.diam) this.pos.x = -this.diam
        if (this.pos.y < -this.diam) this.pos.y = height + this.diam
        if (this.pos.y > height + this.diam) this.pos.y = -this.diam
    }

    closestTo(points) {
        let closest = points[0];

        for (let p of points) {
            const currentClosestD = dist(this.pos.x, this.pos.y, closest.x, closest.y)
            const pointD = dist(this.pos.x, this.pos.y, p.x, p.y)

            if (pointD <= currentClosestD) {
                closest = p
            }
        }


        return closest
    }
}
