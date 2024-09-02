// Day 09 - TypeScript Enums and Advanced Enum Usage

// Numeric Enum
enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}

// String Enum
enum Role {
    Admin = 'ADMIN',
    User = 'USER',
    Guest = 'GUEST'
}

// Heterogeneous Enum
enum Status {
    Success = 'SUCCESS',
    Error = 500,
    NotFound = 404
}

// Computed and Constant Members
enum FileAccess {
    None,
    Read = 1 << 1,   // 2
    Write = 1 << 2,  // 4
    ReadWrite = Read | Write, // 6
    // Computed member
    G = '123'.length // 3
}

// Reverse Mapping
enum StatusCode {
    OK = 200,
    BadRequest = 400,
    Unauthorized = 401
}

// Function to demonstrate reverse mapping
function getEnumName(enumObj: any, value: number | string): string {
    return enumObj[value];
}

// Using enums
const dir = Direction.Left; // 3
console.log(`Direction Left: ${dir}`);

const role = Role.Admin;
console.log(`Role Admin: ${role}`);

const status = Status.Success;
console.log(`Status Success: ${status}`);

const access = FileAccess.ReadWrite;
console.log(`File Access ReadWrite: ${access}`);

console.log(`Status Code 200: ${getEnumName(StatusCode, 200)}`); // OK
console.log(`Status Code OK: ${StatusCode.OK}`); // 200
