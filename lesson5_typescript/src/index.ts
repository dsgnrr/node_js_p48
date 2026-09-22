const message: string = "Welcome to TypeScript";
console.log(message);

/**
 * number: 25, 1.5
 * string: "hello", 'hello', `hello`, 'h'
 * boolean: true/false
 * 
 * []: [1,2,3]
 * let strings: Array<string> = []
 * [type, type]
 */

let name: string = "Alex";
let age: number = 25;
let isActive: boolean = false;

let numbers: number[] = [1, 2, 3, 4, 5, 56, 67, 7];
let strings: Array<string> = ["Hello", "world", "how", "are", "you"];

let tuple: [number, string] = [1, 'user'];
let tuples: Array<[number, string]> = [[1, 'user'],];

numbers.map((item, index) => {
    console.log(`${index}->${item}`);
})

let unknown: string | number;

type User ={
    readonly id:number;
    name: string;
    age: number;
    email?: string
}

const user1:User = {
    id:1,
    name:"Alex",
    age: 25,
    email: 'alex2005@gmail.com'
}

console.log("User: ", user1);

type Status = "pending" | "approved" | "rejected";

let currentStatus: Status = 'approved';

type ID = number|string;

let currentId:ID = "2";

type Person = {
    name: string
}

type Employee = {
    company: string,
    salary: number
}