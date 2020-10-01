// Add your Circle class here
class Circle {
  constructor(radius){
    this.radius = radius;
  }
  let pi = Math.PI;
  get diameter(){
    return this.radius * 2
  }
  get circumference(){
    return (2 * pi * this.radius)
  }

  get area(){
    return (pi * this.radius ** 2)
  }
}
