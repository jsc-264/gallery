const DIMENSION = 10
let nums = []

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER, CENTER)

  let num = 1
  for (let j = 0; j < DIMENSION; j++) {
    for (let i = 0; i < DIMENSION; i++) {
      nums.push(num)
      num++
    }
  }
}

function draw() {
  background(220);

  for (let j = 0; j < DIMENSION; j++) {
    for (let i = 0; i < DIMENSION; i++) {
      const index = j * DIMENSION + i
      text(nums[index], width / DIMENSION * i + width / DIMENSION / 2, height / DIMENSION * j + width / DIMENSION / 2)
    }
  }
}
