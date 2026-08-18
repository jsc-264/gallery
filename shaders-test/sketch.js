let myShader;
async function setup() {
    myShader = await loadShader("shader.vert", "shader.frag");
    createCanvas(500, 500, WEBGL);
    noStroke();
}
function draw() {
    shader(myShader);
    plane(width, height);
}