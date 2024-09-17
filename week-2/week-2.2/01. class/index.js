// M-I:-
const rect1 = {
  width: 2,
  height: 3,
  color: "red",
};
function area(rect) {
  return rect.width * rect.height;
}
const ans = area(rect1);
console.log(ans);

// **************************************************************************************************
// M-II:-
class Rectangle {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  area() {
    const area = this.width * this.height;
    return area;
  }

  paint() {
    console.log(`Painting with color ${this.color}`);
  }
}

const rect = new Rectangle(2, 4); // instance of the rectangle class, object of the rectangle class.
const rect2 = new Rectangle(10, 20, "black");
const area1 = rect.area();
const area2 = rect2.area();
console.log(area1);
console.log(area2);
