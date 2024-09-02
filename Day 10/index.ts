// Importing the Shapes namespace and Calculator module
import { Shapes } from './shapes';
import { Calculator } from './calculator';

// Using the Shapes namespace
const circle = new Shapes.Circle(5);
console.log(`Circle Area: ${circle.getArea()}`);
console.log(`Circle Circumference: ${circle.getCircumference()}`);

const rectangle = new Shapes.Rectangle(10, 5);
console.log(`Rectangle Area: ${rectangle.getArea()}`);
console.log(`Rectangle Perimeter: ${rectangle.getPerimeter()}`);

// Using the Calculator module
const calculator = new Calculator();
console.log(`Addition: ${calculator.add(10, 5)}`);
console.log(`Subtraction: ${calculator.subtract(10, 5)}`);
console.log(`Multiplication: ${calculator.multiply(10, 5)}`);
console.log(`Division: ${calculator.divide(10, 5)}`);
