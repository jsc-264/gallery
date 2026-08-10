class Slime {
    constructor(){
        this.pos = createVector(random(width), random(height))
        this.grow()

        this.vel = p5.Vector.random2D().mult(random(2, 5))

        const hu = random(360)
        this.fill = color(hu, 50, 100)
        this.border = color(hu, 100, 100)
    }

    render(){
        strokeWeight(5)
        stroke(this.border)
        fill(this.fill)
        rect(this.pos.x, this.pos.y, this.w, this.h, 20)
    }

    grow(){
        let pidX = map(this.pos.x, 0, width, 0, PI)
        let pidY = map(this.pos.y, 0, height, 0, PI)
        let newW = map(sin(pidX), 0, 1, 0, width/ 4)
        let newH = map(sin(pidY), 0, 1, 0, height/4)

        this.w = newW
        this.h = newH
    }

    update(){
        let hit = false
        if (this.pos.x <= 0){
            this.pos.x = 0
            this.vel.x *= -1
            hit = true
        }

        if (this.pos.x >= width) {
            this.pos.x = width
            this.vel.x *= -1
            hit = true
        }

        if (this.pos.y <= 0) {
            this.pos.y = 0
            this.vel.y *= -1
            hit = true
        }

        if (this.pos.y >= height) {
            this.pos.y = height
            this.vel.y *= -1
            hit = true
        }

        if (hit) {
            this.vel.rotate(random(TWO_PI))
        }

        this.pos.add(this.vel)
        this.grow()
    }
}