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
    firstName: 'Rasmus',
    lastName: 'Cederdorff',
    jobTitle: 'Freelance Web & App Developer',
    age: 27
  }

  console.log(person.firstName);

  person.firstName = "Matias";

  console.log(person.firstName + " " + person.lastName);

  let name = `Rasmus`;
  let job = `Web & App Developer`;

  console.log(`${name} works as a ${job}.`);

  person.firstName = 'Rasmus';
  const markup = `
  <p>My name is <strong>${person.firstName} ${person.lastName}</strong> and I work as a ${person.jobTitle}.</p>
  `;

  $("#mainContainer").append(markup);


  const myAge = (person) => {
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

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // const doubleUpNumbers = numbers.map(function (number) {
  //   return number * 2;
  // });

  const doubleUpNumbers = numbers.map(number => number * 2);

  console.log(numbers);
  console.log(doubleUpNumbers);


  const spreadNumbers = [22, 33, 44, 55, 66, 77, 88, 11, 99];
  // const maxSpreadNumber = Math.max(spreadNumbers);
  // const maxSpreadNumber = Math.max.apply(null,spreadNumbers);
  const maxSpreadNumber = Math.max(...spreadNumbers);

  console.log(maxSpreadNumber);

  const concatArray1 = [22, 33, 44, 55, 66, 77, 88, 11, 99];
  const concatArray2 = [12, 23, 34, 45, 56, 67, 78, 89, 90];
  const resultArray = [...concatArray1, ...concatArray2];

  console.log(resultArray);
  const sortedResultArray = resultArray.sort();
  console.log(sortedResultArray);

  const sumNumbers = (...numbers) => {
    return numbers.reduce((a, b) => a + b);
  }

  console.log(sumNumbers(2, 10, 22));




  class Person {
    constructor(firstN, lastN) {
      this.firstName = firstN;
      this.lastName = lastN;
    }

    getFullName() {
      return this.firstName + " " + this.lastName;
    }
  }

  let myPerson = new Person("Peter", "Madsen");

  console.log(myPerson.getFullName());
  console.log(myPerson.firstName);


  class Employee extends Person {
    constructor(firstN, lastN, job) {
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


  const loadProfiles = (userNames = []) => {
    console.log(userNames);
    console.log(userNames.length);
  }

  loadProfiles(["Rasmus", "Peter"]);
  loadProfiles();
  loadProfiles(["Jens", "Mads", "Mathias"]);

  // Named parameters
  const setPageOptions = (name, {
    type,
    expires,
    popular,
    loadTime
  } = {}) => {
    console.log(name);
    console.log(type);
    console.log(expires);
    console.log(loadTime);
  };

  setPageOptions("My page", {
    type: "Some sort of webpage",
    expires: "20122017",
    popular: "Very",
    loadTime: "Fast!"
  });

  // Rest parameters

  let displayTags = (...tags) => {
    for (let i in tags) {
      console.log(tags[i]);
    }
  }

  displayTags("songs", "music", "breakfast");

  // spread operator
  let tags = ["coffee", "tea", "breakfast", "morning"];
  displayTags(...tags);

  // object destructuring

  let buildUser = (first, last) => {
    let fullName = `${first} ${last}`;

    return {
      first,
      last,
      fullName
    };
  }

  let user = buildUser("Jens", "Jensen")
  console.log(user);
  console.log(user.fullName);

  // let {first, last, fullName} = buildUser("Hans", "Hansen");
  // console.log(first);
  // console.log(last);
  // console.log(fullName);

  let {
    fullName
  } = buildUser("Hans", "Hansen");
  console.log(fullName);

  // object.assign
  const countDownTimer = (target, timeLeft, options = {}) => {
    let defaultValues = {
      container: ".timer-display",
      timeUnit: "seconds",
      clonedDataAttribute: "cloned",
      timeoutClass: ".is-timeout",
      timeoutSoonClass: ".is-timeout-soon",
      timeoutSoonTime: 10
    };

    let settings = Object.assign({}, defaultValues, options);

    console.log(settings);
  }

  countDownTimer("myTarget", 45, {
    container: ".timer-obj-display"
  });

  countDownTimer("myNextTarget", 50, {
    timeoutSoonTime: 50,
    timeUnit: "mins"
  });

  let countDownOptions = {
    container: ".timer-display",
    timeUnit: "seconds",
    clonedDataAttribute: "cloned",
    timeoutClass: ".is-timeout-display",
    timeoutSoonClass: ".is-timeout-very-soon",
    timeoutSoonTime: 10,
    mySpecialOption: "hey you!",
    defaultTime: 23.00
  };

  countDownTimer("myNextTarget", 50, countDownOptions);


  // Array destructuring
  let users = ["Rasmus", "Peter", "Hans"];
  let [user1, user2, user3] = users;
  console.log(user1, user2, user3);

  let [u1, , u2] = users;
  console.log(u1, u2);

  // array destructuring with rest params
  let [first, ...rest] = users;
  console.log(first, rest);
  console.log(`first user: ${first}`);
  console.log(`rest users: ${rest}`);

  const activeUsers = () => {
    let users = ["Sam", "Alex", "Tyler", "Brook"];
    return users.sort();
  }

  console.log(activeUsers());

  let [activeUser1, activeUser2, ...activeRestUser] = activeUsers();

  console.log(`
    first active user: ${activeUser1}
    second active user: ${activeUser2}
    rest active user: ${activeRestUser}`);

  // loop over arrays
  // for of - not for objects
  let myArrayOfUsers = activeUsers();
  for (let user of myArrayOfUsers) {
    console.log(user);
  }

  // findind an element in an Array
  let userArray = [{
      name: "Helle",
      admin: true
    },
    {
      name: "Jette",
      admin: false
    },
    {
      name: "Rita",
      admin: true
    },
    {
      name: "Hjørdis",
      admin: false
    }
  ];

  console.log(userArray);

  // let admin = userArray.find((user) =>{
  //   return user.admin;
  // });

  let admin = userArray.find(user => user.admin);

  console.log(admin);

  let person1 = {
    name: "Rita Madsen",
    jobTitle: "teacher"
  };
  let person2 = {
    name: "Helle Jacobsen",
    jobTitle: "AKT & teacher"
  };
  let person3 = {
    name: "Jeppe Madsen",
    jobTitle: "student"
  };

  // maps - key/val
  let totalPosts = new Map();
  totalPosts.set(person1, 403);
  totalPosts.set(person2, 309);

  console.log(totalPosts);
  console.log(totalPosts.get(person1));
  console.log(totalPosts.get(person2));

  // loop maps

  for (let [key, val] of totalPosts) {
    console.log(`
        Name: ${key.name}
        Job title: ${key.jobTitle}
        Posts: ${val}
        `);
  };
  // weak maps - better for memory - only objects

  let userStatus = new WeakMap();
  userStatus.set(person1, "loggedIn");
  userStatus.set(person2, "loggedOut");
  userStatus.set(person3, "loggedIn");
  console.log(userStatus);

  console.log(userStatus.has(person2));
  console.log(userStatus.get(person1));
  userStatus.delete(person3);
  console.log(userStatus);


  // ES2015 set

  let hashTags = new Set();
  hashTags.add("webdeveloper");
  hashTags.add("webdev");
  hashTags.add("developer");
  hashTags.add("webdeveloper");
  hashTags.add("appdeveloper");
  hashTags.add("webdeveloper");

  console.log(`Total tags: ${hashTags.size}`);
  console.log(hashTags);

  for (let hashTag of hashTags) {
    console.log(hashTag);
  }

  let [hashTag1, hashTag2, hashTag3, hashTag4] = hashTags;
  console.log(hashTag1, hashTag2, hashTag3, hashTag4);


  // weak sets - only objects

  let weakTags = new WeakSet();
  let webDeveloper = {
    name: "webdeveloper"
  };
  weakTags.add(webDeveloper);
  weakTags.add({
    name: "developer"
  });
  weakTags.add({
    name: "programmer"
  });

  console.log(weakTags);
  console.log(weakTags.has(webDeveloper));
  weakTags.delete(webDeveloper);
  console.log(weakTags.has(webDeveloper));

  // classes

  class SponserWidget {
    constructor(name, description, url) {
      this.name = name;
      this.description = description;
      this.url = url;
    }
    render() {
      this.url = this._buildLink(this.url);
    }

    // _ private method
    _buildLink(url) {
      return "http://" + url;
    }
  }


  let myWidget = new SponserWidget("Favorite widget", "My best and favorite widget for web", "mywidgetlink.com");
  myWidget.render();
  console.log(myWidget.name);
  console.log(myWidget.url);



  // modules
  // import {alertMessage, logMessage} from './message-module';
  import * as message from './message-module';
  message.alertMessage("Test ES6 modules");

}); //end
