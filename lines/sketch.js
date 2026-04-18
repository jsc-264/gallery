const DIMENSION = 30
let nums = []

function formula(num){
  let val = (num + 1) % DIMENSION**2
  return val
}

function findObject(targetValue){
  for (let obj of nums) {
    if (obj.value == targetValue){
      return obj
    }
  }
}

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER, CENTER)
  const tileWidth = width/DIMENSION

  let num = 0
  for (let j = 0; j < DIMENSION; j++) {
    for (let i = 0; i < DIMENSION; i++) {
      nums.push({
        value: num,
        x: tileWidth * i + tileWidth / 2,
        y: tileWidth * j + tileWidth / 2
      })
      num++
    }
  }
}

function draw() {
  background(220);

  for (let j = 0; j < DIMENSION; j++) {
    for (let i = 0; i < DIMENSION; i++) {
      const index = j * DIMENSION + i
      const num = nums[index]
      const result = formula(num.value)
      const target = findObject(result)
      line(num.x, num.y, target.x, target.y)
    }
  }
}
