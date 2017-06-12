interface UserInterface{
    name: string;
    email: string;
    age: number;
    register();
    payinvoice();
}

class User implements UserInterface{
    public name: string;
    public email: string;
    public age: number;

    constructor(name: string, email: string, age: number) {
        this.name = name;
        this.email = email;
        this.age = age;

        console.log('User created'+this.name);
    }

    register() {
        console.log(this.name+' is now registered');
    }

    payInvoice() {
        console.log(this.name+' paid invoice');
    }
}

// let john = new User('John Doe', 'johndoe@gmail.com', 21);

// console.log(john.age);

// john.register();

class Memeber extends User{
    id: number;

    constructor(id: number, name:string, email: string, age: number) {
        super(name, email, age);
    }

    payInvoice() {
        super.payInvoice();
    }
}

let mike: User = new Memeber(1, 'Mike Smith', 'mikesmith@gmail.com', 33);
mike.payInvoice();