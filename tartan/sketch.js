let palette

function setup() {
    createCanvas(windowWidth, windowHeight);
    palette = {
        bg: color("#F5DEB3"),
        lines: [
            color("#000080"),
            color("#006400"),
            color("#B22222"),
            color("#DAA520"),
        ]
    }
}

function draw() {
    background(palette.bg);
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight)
}
