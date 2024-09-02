// Importing the advanced types and functions
import { combine, combineWithAlias, printEmployeeInformation, elevatedEmployee } from './advancedTypes';

// Using the functions
const result1 = combine('Type', 'Script');
const result2 = combine(100, 200);

console.log(`Combined String: ${result1}`); // Outputs: Combined String: TypeScript
console.log(`Combined Number: ${result2}`); // Outputs: Combined Number: 300

const result3 = combineWithAlias('10', '20', 'as-number');
const result4 = combineWithAlias('Hello', 'World', 'as-text');

console.log(`Combined with Alias as Number: ${result3}`); // Outputs: Combined with Alias as Number: 1020
console.log(`Combined with Alias as Text: ${result4}`); // Outputs: Combined with Alias as Text: HelloWorld

// Print employee information
printEmployeeInformation(elevatedEmployee);
