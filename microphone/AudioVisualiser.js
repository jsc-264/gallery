class AudioVisualiser{
    constructor(options = {
        smooth: 0.85,
        len: 10
    }){
        this.mic = new p5.AudioIn()
        this.fft = new p5.FFT(options.smooth, pow(2, options.len))
    }

    startListening(){
        this.mic.start()
        this.fft.setInput(this.mic)
    }

    update(){
        this.spectrum = this.fft.analyze(this.mic)
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