// Day 02 - TypeScript Variables and Functions

// Variable declarations with different types
let name: string = "Alice";
let age: number = 30;
let isStudent: boolean = true;

// Function with type annotations and default value
function greet(name: string, age: number = 25): string {
    return `Hello, my name is ${name} and I am ${age} years old.`;
}

// Calling the function
console.log(greet(name, age));
console.log(greet("Bob")); // Uses default age value
