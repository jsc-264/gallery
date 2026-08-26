let palette

function setup() {
    createCanvas(800, 600);
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
