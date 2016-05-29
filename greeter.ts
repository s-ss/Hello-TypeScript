class Student {
    fullName:string;

    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    fullName:string;
    firstName:string;
    lastName:string;
}

function greeter(person:Person) {
    return "Hello, "
        + person.fullName;
}

var user = new Student("Jane", "M.", "User");

document.body.innerHTML = greeter(user);
