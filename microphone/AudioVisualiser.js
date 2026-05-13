class AudioVisualiser{
    constructor(){
        this.mic = new p5.AudioIn()
        this.fft = new p5.FFT()
    }

    startListening(){
        this.mic.start()
        this.fft.setInput(this.mic)
    }

    getLoudestFrequency(){
        let loudest = 0
        for (let f of this.spectrum){
            if (f > loudest){
                loudest = f
            }
        }

        return loudest
    }

    update(){
        this.spectrum = this.fft.analyze()
        this.spectrum = this.spectrum.slice(5, floor(this.spectrum.length/8))
        this.bins = this.spectrum.length
    }

    render() {
        const w = width / this.bins
        for (let i = 0; i < this.bins; i++) {
            const amp = this.spectrum[i]
            const x = w * i

            const h = map(amp, 0, 255, 0, height)

            rect(x, height - h, w, h)
        }
    }
}

// ideas for later
// add something more interactive to it eg a character
// who falls and bounces on rects