class Slime {
    constructor(){
        this.x = random(width)
        this.y = random(height)
        this.grow()

        this.vx = random(2, 5) * random([-1, 1])
        this.vy = random(2, 5) * random([-1, 1])
    }

    render(){
        rect(this.x, this.y, this.w, this.h)
    }

    grow(){
        let pidX = map(this.x, 0, width, 0, PI)
        let pidY = map(this.y, 0, height, 0, PI)
        let newW = map(sin(pidX), 0, 1, 0, 100)
        let newH = map(sin(pidY), 0, 1, 0, 100)

        this.w = newW
        this.h = newH
    }

    update(){
        if (this.x <= 0){
            this.x = 0
            this.vx *= -1
        }

        if (this.x >= width) {
            this.x = width
            this.vx *= -1
        }

        if (this.y <= 0) {
            this.y = 0
            this.vy *= -1
        }

        if (this.y >= height) {
            this.y = height
            this.vy *= -1
        }

        this.x += this.vx
        this.y += this.vy
        this.grow()
    }
}