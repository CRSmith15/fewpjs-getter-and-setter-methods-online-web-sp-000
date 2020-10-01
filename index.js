// Add your Circle class here
class Circle {
  constructor(radius){
    this.radius = radius;
  }
  let pi = Math.PI;
  get diameter(){
    return this.radius * 2;
  }
  get circumference(){
    return (2 * pi * this.radius);
  }

  get area(){
    return (pi * this.radius ** 2);
  }

  set diameter(x){
    return this.radius = x / 2;
  }

  set circumference(x){
    return this.radius = x / pi / 2;
  }

  set area(x){
    return this.radius = Math.sqrt(x / pi)
  }
}
