let shad;
async function setup() {
    shad = await loadShader("shader.vert", "shader.frag");
    createCanvas(500, 500, WEBGL);
    noStroke();
}
function draw() {
    shader(shad);
    plane(width, height);
}