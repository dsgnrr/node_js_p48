export class User {
    static readonly company = "Microsoft";
    public id: number;
    protected role: string;
    private _secretToken: string;

    constructor(id: number, role: string, token: string) {
        this.id = id;
        this.role = role;
        this._secretToken = token;
    }
    public getProfileInfo(): string {
        return `User ID: ${this.id}, role: ${this.role}`;
    }

    // private setToken(new_value: string) {
    //     this.secretToken = new_value;
    // }

    private set secretToken(value:string){
        this._secretToken = value;
    }

    get profile():string{
        return this.getProfileInfo();
    }
}

console.log(User.company);
export const userObject: User = new User(1, 'Ivan', '21431241241242');


class Product {
    constructor(
        public readonly id: number,
        public title: string,
        public price: number
    ) { }

    /**
     * getPrice
 :number    */
    public getPrice(): number {
        return this.price;
    }
}

// Inheritance

class Animal {
    constructor(public name: string) { }

    public makeSound(): void { }
}

class Dog extends Animal {
    constructor(name: string, public breed: string) {
        super(name);
    }

    public override makeSound(): void {
        console.log("Bark!");
    }
}

// Implimentation

interface Logger {
    log(message: string): void;
}

interface Serializable {
    serialize(): string;
}

class Sample implements Logger, Serializable {
    log(message: string): void {

    }
    serialize(): string {
        return "";
    }
}

// abstract

abstract class BaseRepository<T> {
    abstract findById(id: number): T;

    abstract selectAll(): T[];
}

interface UserData { id: number; name: string; }

class UserRepository extends BaseRepository<UserData>{
    findById(id: number): UserData {
        return {id:1, name:"Petro"};
        
    }
    selectAll(): UserData[] {
        return [{id:1, name:"Petro"}];
    }
}