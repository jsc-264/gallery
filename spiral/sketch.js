let img;

async function setup() {
    createCanvas(500, 500);
    img = await loadImage("./assets/parrot.jpg")
    img.resize(100, 100)
    noSmooth()
}

function draw() {
    background(220);
    image(img, 0, 0, width, height)

}
