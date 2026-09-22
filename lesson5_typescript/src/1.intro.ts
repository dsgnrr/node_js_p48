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

//primitives
let name: string = "Alex";
let age: number = 25;
let isActive: boolean = false;

// arrays
let numbers: number[] = [1, 2, 3, 4, 5, 56, 67, 7];
let strings: Array<string> = ["Hello", "world", "how", "are", "you"];

//tuples
let tuple: [number, string] = [1, 'user'];
let tuples: Array<[number, string]> = [[1, 'user'],];

// масив має такіж самі методи як і в JS
numbers.map((item, index) => {
    console.log(`${index}->${item}`);
})

// можна задати одразу два типи, але значення буде записано тільки число або рядок
let unknown: string | number;

// Створення користувацьких типів
type User = {
    readonly id: number;
    name: string;
    age: number;
    email?: string
}

const user1: User = {
    id: 1,
    name: "Alex",
    age: 25,
    email: 'alex2005@gmail.com'
}

console.log("User: ", user1);

// тип який може мати одне із значень
type Status = "pending" | "approved" | "rejected";

let currentStatus: Status = 'approved';

// тип який може мати значення або рядок або число
type ID = number | string;

let currentId: ID = "2";

// розширення типів
type Person = {
    name: string
}

type Employee = {
    company: string,
    salary: number,
}

type StaffMember = Person & Employee;

const worker: StaffMember = {
    name: "Petro",
    company: "Militech",
    salary: 1500000,
}

console.log(worker);

// інтерфейси
interface Vehicle {
    brand: string;
    year: number;
    startEngine(): boolean
}
// наслідування інтерфейсів
interface Car extends Vehicle {
    doorCount: number;
}
// інтерфейс можна розділити на частини
interface Car extends Vehicle {
    color: string;
}

const myCar: Car = {
    brand: 'Toyota',
    year: 2022,
    doorCount: 4,
    color: 'white',
    startEngine() {
        console.log("Engine started")
        return true;
    }
}

myCar.startEngine()

// Generics

type ApiResponse<T> = {
    status: number; // 200, 300, 400, 500,
    success: boolean; // true/false,
    data: T
}

const userResponse: ApiResponse<StaffMember> = {
    status: 200,
    success: true,
    data: worker
}

console.log("Api response: ", userResponse);

// Utility Types
type Profile = {
    id: number;
    username: string,
    email: string;
    bio: string;
}

// Partial - робить всі поля необов'язковими
type UpdateProfileDto = Partial<Profile>;
// Readonly - робить усі поля тільки для читання
type ReadonlyProfile = Readonly<Profile>;

// Pick - дозволяє дістати частину полів
type PublicProfile = Pick<Profile, "username" | "bio">;

// Omit - дозволяє виключити вказані поля
type ProfileWithoutId = Omit<Profile, "id">;

const StatusCodes = {
    Approved: "approved",
    Pending: 'pending',
    Rejected: 'rejected'
} as const;

console.log(typeof StatusCodes)
type StatusCodes = typeof StatusCodes[keyof typeof StatusCodes]

console.log(StatusCodes.Approved === "approved")

enum StatusEnum {
    Approved,
    Rejected,
    Pending
}

console.log(StatusEnum.Approved);

function sample(param1: number): void | boolean {
    if (param1 % 2 === 0) {
        return;
    } else return true;
}

console.log(sample(1));
console.log(sample(2));

const dosmth = (user: { name: string, surname: string }): { status: number, success: boolean } => {
    console.log(`dosmth: ${user.name}|${user.surname}`);
    return {
        status: 200,
        success: true
    }
}

console.log(dosmth({name:"Sergii", surname:"Petrov"}))

const genericFunc = <T>(param1:T)=>{
    console.log(param1);
}

genericFunc<string>("generic function");

function genericFunction<T>(param1:T){
    
}