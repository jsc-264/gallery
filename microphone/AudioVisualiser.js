class AudioVisualiser {
    constructor() {
        this.mic = new p5.AudioIn()
        this.fft = new p5.FFT()
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
        this.spectrum = this.fft.analyze()
        this.bins = this.spectrum.length
    }

    renderCircles(){
        push()
        translate(width / 2, height / 2)
        noFill()
        stroke(5, 220, 100, 90)
        for (let i = 0; i < this.spectrum.length; i += 30) {
            const amp = this.spectrum[i]
            const s = map(amp, 0, 255, 0, 50)
            const r = map(amp, 0, 255, 0, avgDim / 1.5)

            strokeWeight(s)
            circle(0, 0, r * 2)
        }
        pop()
    }

    render() {
        this.renderCircles()
    }
}

// ideas for later
// add something more interactive to it eg a character
// who falls and bounces on rects