/**
 * We provide the implementation for a Rectangle class in the editor. Perform the following tasks:
 * Add an area method to Rectangle's prototype.
 * Create a Square class that satisfies the following:
 * It is a subclass of Rectangle.
 * It contains a constructor and no other methods.
 * It can use the Rectangle class' area method to print the area of a Square object.
 */
class Rectangle {
  constructor(w, h) {
      this.w = w;
      this.h = h;
  }
}

Rectangle.prototype.area = function() {
  return this.w * this.h;
}

class Square extends Rectangle (
  constructor(w, h) {
    
  }
)

let rect = new Rectangle(4,5);
console.log('rect: ', rect);
console.log(rect.area());