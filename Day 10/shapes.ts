// Day 10 - TypeScript Modules and Namespaces

// Define a namespace for shapes
export namespace Shapes {
    export class Circle {
        constructor(public radius: number) {}

        getArea(): number {
            return Math.PI * this.radius * this.radius;
        }

        getCircumference(): number {
            return 2 * Math.PI * this.radius;
        }
    }

    export class Rectangle {
        constructor(public width: number, public height: number) {}

        getArea(): number {
            return this.width * this.height;
        }

        getPerimeter(): number {
            return 2 * (this.width + this.height);
        }
    }
}
