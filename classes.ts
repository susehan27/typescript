//class can have a property and methods
//property - key: value pairs
//class has a constructor that runs when you use a class

interface UserInterface{
    name: string,
    email: string,
    age: number,
    register(),
    payInvoice()
}

class User implements UserInterface{
    name: string;
    email: string;
    age: number;

    constructor(name:string, email:string, age:number) {
        this.name = name;
        this.email = email;
        this.age = age;

        console.log("User Created: " + this.name);
    }

    register() {
        console.log(this.name + " is now registered");
    }

    payInvoice() {
        console.log(this.name + " paid invoice.");
    }
}

class Member extends User {
    id: number;

    //constructors for derived classes must contain a "super()" call
    constructor(id: number, name:string, email:string, age:number) {
        super(name, email, age);

        this.id = id;
        //dont have assign name, email, and age because we called "super"
    }

    payInvoice() {
        super.payInvoice()
    }
}

//creating this new variable automatically runs the constructor method
//let john = new User("John", "john@gmail.com", 34);

//console.log(john.age);

//methods/functions created inside classes can be accessed and ran
//john.register();


let Mike: User = new Member(1, "Mike Smith", "mike@gmail.com", 33);
Mike.payInvoice();

