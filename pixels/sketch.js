const DIM = 10
let img

async function setup() {
    createCanvas(500, 500);

    img = await loadImage("/assets/northern.jpg")
}

function draw() {
    background(220);
    image(img, 0, 0, width, height)
}
