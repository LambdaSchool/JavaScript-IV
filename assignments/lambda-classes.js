// CODE here for your Lambda Classes
class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
    this.gender = attributes.gender;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}.`
  }
}

class Instructor extends Person {
  constructor(instructorAttribute) {
    super(instructorAttribute);
    this.specialty = instructorAttribute.specialty;
    this.favLanguage = instructorAttribute.favLanguage;
    this.catchPhrase = instructorAttribute.catchPhrase;
  }
  demo(subject) {
    return  `Today we are learning about ${subject}.`;
  }
  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}.`;
  }
}

class Student extends Person {
  constructor(studentAttributes) {
    super(studentAttributes);
    this.previousBackground = studentAttributes.previousBackground;
    this.className = studentAttributes.className;
    this.favSubjects = studentAttributes.favSubjects;
  }
  listsSubjects() {
    this.favSubjects.forEach(function(item) {
       console.log(item);
    })
  }
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}.`;
  }
  sprintChallenge(subject) {
    return `${this.name} has submitted a sprint challenge for ${subject}.`;
  }
}

class ProjectManager extends Instructor {
  constructor(pmAttributes) {
    super(pmAttributes);
    this.gradClassName = pmAttributes.gradClassName;
    this.favInstructor = pmAttributes.favInstructor;
  }
  standUp(channel) {
    return `${this.name} announces to ${channel}, @channel standy times!`;
  }
  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}.`;
  }
}


const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});

const lela = new Instructor({
  name: 'Lela',
  location: 'England',
  age: 26,
  gender: 'female',
  favLanguage: 'CSS',
  specialty: 'Front-end',
  catchPhrase: `Yo`
});

const josie = new Student({
  name: 'Josie',
  location: 'Cali',
  age: 21,
  gender: 'female',
  previousBackground: 'College',
  className: 'CS4',
  favSubjects: ['Javascript', 'Python', 'HTML']
});

const steve = new Student({
  name: 'Steve',
  location: 'Alabama',
  age: 30,
  gender: 'male',
  previousBackground: 'Teacher',
  className: 'CS11',
  favSubjects: ['Javascript', 'CSS', 'HTML']
});

const jeff = new ProjectManager({
  name: 'Jeff',
  location: 'Canada',
  age: 25,
  gender: 'male',
  favLanguage: 'C++',
  specialty: 'Back-end',
  catchPhrase: 'My name\'s Jeff', 
  gradClassName: 'CS1',
  favInstructor: 'Sean'
});

const blake = new ProjectManager({
  name: 'Blake',
  location: 'Here',
  age: 27,
  gender: 'male',
  favLanguage: 'Pythom',
  specialty: 'Back-end',
  catchPhrase: 'What up?', 
  gradClassName: 'CS4',
  favInstructor: 'Sean'
});

