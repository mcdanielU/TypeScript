// Basic TypeScript examples

// Type annotations
let name: string = "TypeScript";
let age: number = 25;
let isActive: boolean = true;

// Arrays
let numbers: number[] = [1, 2, 3, 4, 5];
let fruits: string[] = ["apple", "banana", "orange"];

// Objects with interfaces
interface Person {
    name: string;
    age: number;
    email?: string; // Optional property
}

const person: Person = {
    name: "John Doe",
    age: 30,
    email: "john@example.com"
};

// Functions with type annotations
function add(a: number, b: number): number {
    return a + b;
}

// Arrow functions
const multiply = (a: number, b: number): number => a * b;

// Example usage
console.log(`Hello ${name}!`);
console.log(`Person: ${JSON.stringify(person, null, 4)}`);
console.log(`Sum: ${add(8, 3)}`);
console.log(`Product: ${multiply(4, 2)}`); 