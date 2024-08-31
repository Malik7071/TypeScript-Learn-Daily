// Day 04 - TypeScript Inheritance and Abstract Classes

// Base class (parent)
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): void {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Child class that extends the base class
class Student extends Person {
    private studentID: string;

    constructor(name: string, age: number, studentID: string) {
        super(name, age); // Call the parent class constructor
        this.studentID = studentID;
    }

    // Override greet method
    greet(): void {
        console.log(`Hello, I am ${this.name}, a student with ID ${this.studentID}.`);
    }

    displayID(): void {
        console.log(`My student ID is ${this.studentID}.`);
    }
}

// Abstract class with an abstract method
abstract class Employee {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    abstract work(): void; // Abstract method

    introduce(): void {
        console.log(`Hi, I am ${this.name}, an employee.`);
    }
}

// Concrete class that extends the abstract class
class Developer extends Employee {
    work(): void {
        console.log(`${this.name} is coding.`);
    }
}

// Create instances and call methods
const student = new Student("Alice", 22, "S12345");
student.greet(); // Calls the overridden method
student.displayID();

const developer = new Developer("Bob");
developer.introduce(); // Calls the method from the abstract class
developer.work(); // Calls the method implemented in the Developer class
