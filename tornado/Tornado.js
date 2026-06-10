class Tornado {
    constructor(radius) {
        this.totalRadius = radius
        this.eyeRadius = 30
        this.numBodies = 100
        
        this.bodies = []
        for (let i = 0; i < this.numBodies; i++){
            this.bodies.push(new Body(
                random(MIN_BODY_DIAMETER, MAX_BODY_DIAMETER),
                random(TWO_PI),
                this
            ))
        }
    }

    render(){
        this.bodies.forEach(body => {
            body.render()
        })
    }

    update(){
        this.bodies.forEach(body => {
            body.update()
        })
    }
}