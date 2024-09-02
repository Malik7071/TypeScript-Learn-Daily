// Day 08 - Decorators in TypeScript

// Class Decorator
function Logger(constructor: Function) {
    console.log('Logging...');
    console.log(constructor);
}

// Applying the decorator to a class
@Logger
class Person {
    name = 'John';

    constructor() {
        console.log('Creating person object...');
    }
}

// Method Decorator
function LogMethod(target: any, propertyName: string, descriptor: PropertyDescriptor) {
    console.log('Method decorator applied!');
    console.log(target);
    console.log(propertyName);
    console.log(descriptor);
}

class Product {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    @LogMethod
    getPrice() {
        console.log('Calculating price...');
        return 100;
    }
}

// Property Decorator
function LogProperty(target: any, propertyName: string) {
    console.log('Property decorator applied!');
    console.log(target);
    console.log(propertyName);
}

class Car {
    @LogProperty
    brand: string;

    constructor(brand: string) {
        this.brand = brand;
    }
}

// Parameter Decorator
function LogParameter(target: any, methodName: string, parameterIndex: number) {
    console.log('Parameter decorator applied!');
    console.log(target);
    console.log(methodName);
    console.log(parameterIndex);
}

class House {
    build(@LogParameter rooms: number) {
        console.log(`Building house with ${rooms} rooms.`);
    }
}

// Using the classes and decorators
const person = new Person();
const product = new Product('Laptop');
product.getPrice();

const car = new Car('Toyota');
const house = new House();
house.build(5);
