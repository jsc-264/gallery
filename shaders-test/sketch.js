let shad

async function setup() {
    createCanvas(800, 600, WEBGL);
    shad = await loadShader("shader.vert", "shader.frag")
    shader(shad)
    noStroke()
}

function draw() {
    clear()
    rect(0, 0, width, height)
}
