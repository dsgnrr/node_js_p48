export class User{
    static readonly company = "Microsoft";
    public id: number;
    protected role: string;
    private secretToken: string;

    constructor(id:number, role:string, token: string){
        this.id = id;
        this.role = role;
        this.secretToken = token;
    }
}

export const userObject:User = new User(1,'Ivan', '21431241241242');
