// CODE here for your Lambda Classes

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//
//   speak() {
//     console.log(this.name + ' makes a noise.');
//   }
// }


class Person {
  constructor(attrs) {
    this.name = attrs.name;
    this.age = attrs.age;
    this.location = attrs.location;
  }

  speak() {
    console.log(`Hello, my name is ${this.name}, I am from ${this.location}`);
  }
}

class Instructor extends Person {
  constructor(instAttrs) {
    super(instAttrs);
    this.specialty = instAttrs.specialty;
    this.favLanguage = instAttrs.favLanguage;
    this.catchPhrase = instAttrs.catchPhrase;
  }

  demo(subject) {
    console.log(`Today we are learning about ${this.subject}`);
  }

  grade(student, subject) {
    console.log(`${this.name} receives a perfect score on ${this.subject}`)
  }
}

class Student extends Person {
  constructor(stuAttrs) {
    super(stuAttrs);
    this.previousBackground = stuAttrs.previousBackground;
    this.className = stuAttrs.className;
    this.favSubject = stuAttrs.favSubjects;
  }

  listsSujects() {
    console.log(`${this.favoriteSubjects}`);
  }

  PRAssignment() {
    console.log(`${this.name} has submitted a PR for ${this.subject}`);
  }

  sprintChallenge() {
    console.log(`${this.name} has begun sprint challenge for ${this.subject}`);
  }
}
