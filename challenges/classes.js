// 1. Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

class Cuboid {
    constructor(length, width, height){
        length = 4;
        width = 5;
        height = 5;
    }
    volume() {
        return this.length * this.width * this.height;
    }
    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
// class CuboidMaker {
//     constructor (length, width, height){
//     length = this.length;
//     width = this.width;
//     height = this.height;
//   }
// }

class CubeMaker extends CuboidMaker {
    constructor(length, width, height){
        super(length, width, height)
    }
    volume(){
        return this.length * this.length * this.length;
    }
}

class Cube extends CubeMaker {
    constructor(length, width, height){
        super();
        length = 5;
        width = 6;
        height = 7;
    }
}

console.log(cube.volume());