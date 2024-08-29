// Day 03 - TypeScript Classes and Interfaces

// Define an interface for a person
interface Person {
    name: string;
    age: number;
    greet(): void;
}

// Implement the interface in a class
class Student implements Person {
    name: string;
    age: number;
    private studentID: string;

    constructor(name: string, age: number, studentID: string) {
        this.name = name;
        this.age = age;
        this.studentID = studentID;
    }

    greet(): void {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }

    // Method to display student ID
    displayID(): void {
        console.log(`My student ID is ${this.studentID}.`);
    }
}

// Create an instance of the Student class
const student = new Student("Alice", 22, "S12345");

// Call methods
student.greet();
student.displayID();
