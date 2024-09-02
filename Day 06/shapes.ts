// Day 06 - TypeScript Modules and Namespaces

// Define a namespace for shapes
namespace Shapes {
    export class Circle {
        radius: number;

        constructor(radius: number) {
            this.radius = radius;
        }

        getArea(): number {
            return Math.PI * this.radius * this.radius;
        }
    }

    export class Rectangle {
        width: number;
        height: number;

        constructor(width: number, height: number) {
            this.width = width;
            this.height = height;
        }

        getArea(): number {
            return this.width * this.height;
        }
    }
}
