let shad;
async function setup() {
    createCanvas(500, 500, WEBGL);

    shad = await loadShader("shader.vert", "shader.frag");
    shader(shad);
}

function draw() {
    background(0)
    noStroke()
    shad.setUniform("millis", millis());
    plane(width, height);
}