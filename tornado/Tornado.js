class Tornado {
    constructor(radius) {
        this.totalRadius = radius
        this.eyeRadius = 30
        this.numBodies = 200
        
        this.bodies = []
        for (let i = 0; i < this.numBodies; i++){
            this.bodies.push(new Body(random(0, this.totalRadius), random(TWO_PI), random(5, 20)))
        }
    }

    render(){
        this.bodies.forEach(body => {
            body.render()
        })
    }

    update(){
        this.bodies.forEach(body => {
            body.calcSpeed(this.totalRadius, this.eyeRadius)
            body.update()
        })
    }
}