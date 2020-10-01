// Add your Circle class here
class Circle {
  constructor(radius){
    this.radius = radius;
  }
  let pi = Math.PI;
  get diameter(){
    return radius * 2
  }
  get circumference(){
    return (2 * pi * radius)
  }

  get area(){
    return (pi * r ** 2)
  }
}
