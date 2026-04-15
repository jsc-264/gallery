class Tile {
    constructor(x, y, i, j, w){
        this.pos = createVector(x, y)
        this.index = {
            i: i,
            j: j
        },

        this.w = w
    }
}