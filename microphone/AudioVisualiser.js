class AudioVisualiser {
    constructor() {
        this.mic = new p5.AudioIn()
        this.fft = new p5.FFT()

        this.colours = {
            circles: color(5, 220, 100, 90),
            left: color(100, 5, 220, 90),
            right: color(220, 100, 5, 90)
        }
    }

    startListening() {
        this.mic.start()
        this.fft.setInput(this.mic)
    }

    getAverageVolume() {
        let avg = 0
        for (let f of this.spectrum) {
            avg += f
        }

        avg /= this.spectrum.length

        return avg
    }

    getLoudestFrequency() {
        let loudest = 0
        for (let f of this.spectrum) {
            if (f > loudest) {
                loudest = f
            }
        }

        return loudest
    }

    update() {
        this.wave = this.fft.waveform()
        this.spectrum = this.fft.analyze()
        this.bins = this.spectrum.length
    }

    renderCircles() {
        push()
        translate(width / 2, height / 2)
        noFill()
        stroke(this.colours.circles)
        for (let i = 0; i < this.bins; i += 30) {
            const freq = this.spectrum[i]
            const s = map(freq, 0, 255, 0, 50)
            const r = map(freq, 0, 255, 0, avgDim / 1.5)

            strokeWeight(s)
            circle(0, 0, r * 2)
        }
        pop()
    }

    renderLeft() {
        push()

        const range = this.bins/2

        beginShape()
        noFill()
        stroke(this.colours.left)
        strokeWeight(3)
        for (let i = 0; i < range; i++) {
            const freq = this.spectrum[i]
            const x = map(freq, 0, 255, 0, 300)
            const y = height / range * i
            vertex(x, y)
        }
        endShape()
        pop()
    }

    renderRight() {
        push()

        const range = this.wave.length / 2

        beginShape()
        noFill()
        stroke(this.colours.right)
        strokeWeight(3)
        for (let i = 0; i < range; i++) {
            const freq = this.wave[i]
            const x = map(freq, -1, 1, width, width-200)
            const y = height / range * i
            vertex(x, y)
        }
        endShape()
        pop()
    }

    render() {
        this.renderCircles()
        this.renderLeft()
        this.renderRight()
    }
}

// ideas for later
// add something more interactive to it eg a character
// who falls and bounces on rects