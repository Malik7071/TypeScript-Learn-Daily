// Day 07 - Advanced Types in TypeScript

// Union Type
function combine(input1: number | string, input2: number | string): string | number {
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        return input1 + input2; // returns a number
    } else {
        return input1.toString() + input2.toString(); // returns a string
    }
}

// Intersection Type
type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const elevatedEmployee: ElevatedEmployee = {
    name: 'John',
    privileges: ['create-server'],
    startDate: new Date(),
};

// Type Aliases
type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

function combineWithAlias(
    input1: Combinable,
    input2: Combinable,
    resultConversion: ConversionDescriptor
): string | number {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' && resultConversion === 'as-number') {
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

// Type Guards
function printEmployeeInformation(emp: Admin | Employee) {
    console.log('Name: ' + emp.name);
    if ('privileges' in emp) {
        console.log('Privileges: ' + emp.privileges);
    }
    if ('startDate' in emp) {
        console.log('Start Date: ' + emp.startDate);
    }
}

// Using the functions
const combinedString = combine('Hello', 'World'); // Returns "HelloWorld"
const combinedNumber = combine(10, 20); // Returns 30

console.log(combinedString);
console.log(combinedNumber);

printEmployeeInformation(elevatedEmployee); // Displays employee details with privileges and start date
