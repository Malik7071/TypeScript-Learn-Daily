// Import the Shapes namespace from shapes.ts
/// <reference path="shapes.ts" />

// Create instances of shapes and calculate their areas
const circle = new Shapes.Circle(5);
console.log(`Area of the circle: ${circle.getArea()}`); // Outputs: Area of the circle: 78.53981633974483

const rectangle = new Shapes.Rectangle(10, 20);
console.log(`Area of the rectangle: ${rectangle.getArea()}`); // Outputs: Area of the rectangle: 200
