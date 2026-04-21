const DIMENSION = 10
let nums = []
let mult
let multP
let descP

let rangeMin = 2
let rangeMax = 1000

let multString = ""

function multiply(num, mult){
  let val = (num * mult) % DIMENSION**2
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
  createCanvas(500, 500);
  textAlign(CENTER, CENTER)
  const tileWidth = width/DIMENSION
  mult = floor(random(rangeMin, rangeMax))

  descP = createP("type a number to input it into the formula below, or hit space for a new random number: ")
  multP = createP()

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
  background(50);
  stroke(19, 232, 40)

  for (let j = 0; j < DIMENSION; j++) {
    for (let i = 0; i < DIMENSION; i++) {
      const index = j * DIMENSION + i
      const num = nums[index]
      const result = multiply(num.value, mult)
      const target = findObject(result)

      line(num.x, num.y, target.x, target.y)
    }
  }

  multP.html(`result = current * ${mult}`)
}

function keyPressed() {
  if (key == " "){
    mult = floor(random(rangeMin, rangeMax))
    multString = ""
    return
  }

  if (!isNaN(parseInt(key))) {
    multString += key
  }

  mult = parseInt(multString)
}
