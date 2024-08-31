// Day 05 - TypeScript Generics

// Generic Function
function identity<T>(value: T): T {
    return value;
}

// Using the generic function with different types
let numberValue = identity<number>(42);
let stringValue = identity<string>("Hello, TypeScript!");

console.log(numberValue); // Outputs: 42
console.log(stringValue); // Outputs: Hello, TypeScript!

// Generic Class
class Box<T> {
    content: T;

    constructor(content: T) {
        this.content = content;
    }

    getContent(): T {
        return this.content;
    }
}

// Creating instances of the generic class with different types
let numberBox = new Box<number>(123);
let stringBox = new Box<string>("A string inside a box");

console.log(numberBox.getContent()); // Outputs: 123
console.log(stringBox.getContent()); // Outputs: A string inside a box

// Generic Interface
interface Pair<K, V> {
    key: K;
    value: V;
}

// Using the generic interface
let pair: Pair<string, number> = { key: "Age", value: 30 };

console.log(`Key: ${pair.key}, Value: ${pair.value}`); // Outputs: Key: Age, Value: 30
