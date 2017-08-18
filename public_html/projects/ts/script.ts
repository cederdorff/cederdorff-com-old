interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return `Hello there, ${person.firstName} ${person.lastName}`;
}

var user = { firstName: "Jane", lastName: "User" };

document.body.innerHTML = greeter(user);


class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

var user2 = new Student("Jane", "M.", "User");

document.body.innerHTML += `<br> ${user2.fullName}`;
