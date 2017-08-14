"use strict";

$(function() {

  let message = "Hey you are ready to go!";
  const MY_AGE = 27;

  $("#mainContainer").append("<p>" + message + "</p>");
  $("#mainContainer").append("<p>" + "I'm " + MY_AGE + " years old." + "</p>");

  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
  // console.log(i);


  const person = {
    firstName : 'Rasmus',
    lastName : 'Cederdorff',
    jobTitle : 'Freelance Web & App Developer',
    age : 27
  }

  console.log(person.firstName);

  person.firstName = "Matias";

  console.log(person.firstName + " " + person.lastName);

  let name = `Rasmus`;
  let job = `Web & App Developer`;

  console.log(`${name} works as a ${job}.` );

  person.firstName = 'Rasmus';
  const markup = `
  <p>My name is <strong>${person.firstName} ${person.lastName}</strong> and I work as a ${person.jobTitle}.</p>
  `;

  $("#mainContainer").append(markup);


  const myAge = (person) =>{
    return person.age;
  };

  const myAge2 = (person) => person.age;

  const myAge3 = person => person.age;

  const ageMarkup = `
  <p>I'm ${myAge(person)} years old.</p>
  `;
  $("#mainContainer").append(ageMarkup);
  console.log(myAge2(person));
  console.log(myAge3(person));

  const numbers = [1,2,3,4,5,6,7,8,9,10];

  // const doubleUpNumbers = numbers.map(function (number) {
  //   return number * 2;
  // });

  const doubleUpNumbers = numbers.map(number => number * 2);

  console.log(numbers);
  console.log(doubleUpNumbers);


  const spreadNumbers = [22,33,44,55,66,77,88,11,99];
  // const maxSpreadNumber = Math.max(spreadNumbers);
  // const maxSpreadNumber = Math.max.apply(null,spreadNumbers);
  const maxSpreadNumber = Math.max(...spreadNumbers);

  console.log(maxSpreadNumber);

  const concatArray1 = [22,33,44,55,66,77,88,11,99];
  const concatArray2 = [12,23,34,45,56,67,78,89,90];
  const resultArray = [...concatArray1, ...concatArray2];

  console.log(resultArray);
  const sortedResultArray = resultArray.sort();
  console.log(sortedResultArray);

  const sumNumbers = (...numbers) => {
    return numbers.reduce((a,b) => a+b);
  }

  console.log(sumNumbers(2,10,22));




  class Person{
    constructor(firstN, lastN){
      this.firstName = firstN;
      this.lastName = lastN;
    }

    getFullName(){
      return this.firstName + " " + this.lastName;
    }
  }

  let myPerson = new Person("Peter", "Madsen");

  console.log(myPerson.getFullName());
  console.log(myPerson.firstName);


  class Employee extends Person{
    constructor(firstN, lastN, job){
      super(firstN, lastN);
      this.jobTitle = job;
    }
  }

  let employee = new Employee("Hans", "Hansen", "Teacher");

  console.log(employee.getFullName());
  console.log(employee.jobTitle);

  let markupEmployee = `<p>My name is ${employee.firstName} ${employee.lastName} and I'm a ${employee.jobTitle}.</p>`;
  console.log(markupEmployee);

  $("#mainContainer").append(markupEmployee);

// const appendStrings = (...strings) => $("#mainContainer").append(strings);
const appendStrings = (...strings) => {
  console.log(strings);
  for (let i = 0; i < strings.length; i++) {
    console.log(strings[i]);
    $("#mainContainer").append(strings[i] + "<br>");
  }
}

appendStrings('Hej med dig', "Jeg afprøver ES2017", "Og multiple parametre");


const loadProfiles = (userNames = []) =>{
  console.log(userNames);
  console.log(userNames.length);
}

loadProfiles(["Rasmus", "Peter"]);
loadProfiles();
loadProfiles(["Jens", "Mads", "Mathias"]);

// Named parameters
const setPageOptions = (name, {type, expires, popular, loadTime} = {}) =>{
  console.log(name);
  console.log(type);
  console.log(expires);
  console.log(loadTime);
};

setPageOptions("My page",{
  type: "Some sort of webpage",
  expires: "20122017",
  popular: "Very",
  loadTime: "Fast!"
});

// Rest parameters

let displayTags = (...tags) =>{
  for(let i in tags){
    console.log(tags[i]);
  }
}

displayTags("songs", "music", "breakfast");

// spread operator
let tags = ["coffee", "tea", "breakfast", "morning"];
displayTags(...tags);

// object destructuring

let buildUser = (first, last) =>{
  let fullName = `${first} ${last}`;

  return {first, last, fullName};
}

let user = buildUser("Jens", "Jensen")
console.log(user);
console.log(user.fullName);

// let {first, last, fullName} = buildUser("Hans", "Hansen");
// console.log(first);
// console.log(last);
// console.log(fullName);

let {fullName} = buildUser("Hans", "Hansen");
console.log(fullName);







}); //end
