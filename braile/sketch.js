const DIM = 10
let w
let para = []

function gcd(a, b) {

    // Everything divides 0
    if (a == 0 || b == 0)
        return max(a, b);

    // Find Minimum of a and b
    let result = min(a, b);

    while (result > 0) {
        if (a % result === 0 && b % result === 0) {
            break;
        }
        result--;
    }

    // Return gcd of a and b
    return result;
}

function setup() {
    createCanvas(windowWidth * .9, windowWidth * .9);
    w = width / DIM
}

function draw() {
    background(220);
    for (let j = 0; j < DIM; j++) {
        for(let i = 0; i < DIM; i++) {
            const x = w * i
            const y = w * j
            rect(x, y, w)
        }
    }
    noLoop()
}