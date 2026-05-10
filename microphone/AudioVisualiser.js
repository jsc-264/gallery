class AudioVisualiser{
    constructor(options = {
        smooth: 0.8,
        len: 6
    }){
        this.mic = new p5.AudioIn()
        this.fft = new p5.FFT(options.smooth, pow(2, options.len))
    }

    startListening(){
        this.mic.start()
        this.fft.setInput(this.mic)
    }

    getAvgVol(){
        let avg = 0
        for (let i = 0; i < this.bins; i++){
            avg += this.spectrum[i]
        }

        avg /= this.bins
        return avg
    }

    update(){
        this.spectrum = this.fft.analyse()
        this.bins = this.spectrum.length
        this.vol = this.getAvgVol()

        this.lows = this.spectrum.slice(0, this.bins/3)
        this.mids = this.spectrum.slice(this.bins/3, 2*this.bins/3)
        this.highs = this.spectrum.slice(2*this.bins/3)
    }
}