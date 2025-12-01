// --- 1. Number — Questions ---

// 1. Create a variable price of type number and assign any value.
let price: number = 250;

// 2. TypeScript code to calculate the sum of two numbers.
let num1: number = 15;
let num2: number = 30;
let sum: number = num1 + num2;

// 3. Create a number variable and check whether it is even or odd.
let numberToCheck: number = 21;
if (numberToCheck % 2 === 0) {
  console.log(`${numberToCheck} is Even`);
} else {
  console.log(`${numberToCheck} is Odd`);
}

// --- 2. String — Questions ---

// 1. Create a string variable username and print it in the console.
let username: string = "Alice";
console.log(username);

// 2. Convert a string to uppercase ("hello" → "HELLO").
let greeting: string = "hello";
let upperGreeting: string = greeting.toUpperCase();
console.log(upperGreeting);

// 3. Using template literals, print a message:
let personName: string = "Bob";
let personAge: number = 28;
console.log(`Hello, my name is ${personName} and I am ${personAge} years old.`);

// --- 3. Boolean — Questions ---

// 1. Create a boolean variable isLoggedIn, toggle its value, and print both values.
let isLoggedIn: boolean = false;
console.log("Before toggle:", isLoggedIn);
isLoggedIn = !isLoggedIn;
console.log("After toggle:", isLoggedIn);

// 2. Given an age variable, check if the user is an adult (age >= 18).
let age: number = 20;
console.log("Is adult?", age >= 18);

// 3. Given a password string, check if it is strong (length > 8).
let password: string = "supersecret";
console.log("Is strong password?", password.length > 8);

// --- 4. Object — Questions ---

// 1. Create a user object with fields: name, age, isActive.
let user: { name: string; age: number; isActive: boolean } = {
  name: "Charlie",
  age: 25,
  isActive: true
};

// 2. Create a product object and print the product’s price.
let product = {
  name: "Laptop",
  price: 45000,
};
console.log("Product price:", product.price);

// 3. Add a new field (e.g., email) to an existing object.
user.email = "charlie@example.com";
console.log(user);

// --- 5. Function — Questions ---

// 1. Create a function that takes two numbers and returns their sum.
function add(a: number, b: number): number {
  return a + b;
}

// 2. Create a function that returns a person’s full name.
function getFullName(first: string, last: string): string {
  return `${first} ${last}`;
}

// 3. Create a function that finds the largest number in an array.
function findLargest(arr: number[]): number {
  return Math.max(...arr);
}

// --- 6. Array — Questions ---

// 1. Create an array of strings: ["Apple", "Banana", "Mango"] and print each item.
let fruits: string[] = ["Apple", "Banana", "Mango"];
fruits.forEach((fruit) => console.log(fruit));

// 2. Add a new fruit to the array and print the updated array.
fruits.push("Orange");
console.log(fruits);

// 3. Create an array of numbers and find the maximum number.
let numbers: number[] = [3, 99, 45, 12];
let maxNum: number = Math.max(...numbers);
console.log("Maximum number:", maxNum);
