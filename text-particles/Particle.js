function averageVectors(vectors) {
    let sum = createVector()
    for (let v of vectors) {
        sum.add(p5.Vector.normalize(v))
    }
    return sum
}


class Particle {
    constructor(x, y) {
        this.diam = 5
        this.pos = createVector(x, y)
        this.vel = createVector(0, 10)
        this.vel.rotate(random(TWO_PI))
    }

    render() {
        circle(this.pos.x, this.pos.y, this.diam)
    }

    update() {
        this.pos.add(this.vel)

        if (this.pos.x < -this.diam) this.pos.x = width + this.diam
        if (this.pos.x > width + this.diam) this.pos.x = -this.diam
        if (this.pos.y < -this.diam) this.pos.y = height + this.diam
        if (this.pos.y > height + this.diam) this.pos.y = -this.diam

        const closest = this.closestTo(points)
        const d = dist(this.pos.x, this.pos.y, closest.x, closest.y)

        if (d < 10){
            this.vel = 0
            this.pos.x = closest.x
            this.pos.y = closest.y
        }
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
