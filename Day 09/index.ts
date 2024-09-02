// Importing the enums and functions
import { Direction, Role, Status, FileAccess, StatusCode, getEnumName } from './enums';

// Using the enums
const direction = Direction.Up;
console.log(`Direction Up: ${direction}`); // Outputs: 1

const userRole = Role.User;
console.log(`User Role: ${userRole}`); // Outputs: USER

const statusCode = StatusCode.Unauthorized;
console.log(`Unauthorized Status Code: ${statusCode}`); // Outputs: 401

const accessLevel = FileAccess.Read;
console.log(`Access Level Read: ${accessLevel}`); // Outputs: 2

const reverseMapName = getEnumName(StatusCode, 400);
console.log(`Enum Name for Status Code 400: ${reverseMapName}`); // Outputs: BadRequest
