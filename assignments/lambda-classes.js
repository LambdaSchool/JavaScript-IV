// CODE here for your Lambda Classes

class Person {
  constructor(attr) {
    this.name = attr.name;
    this.age = attr.age;
    this.location = attr.location;
    this.gender = attr.gender;
  }
  // Methods go here:
  speak() {
    console.log(`Hello my name is ${this.name} I am from ${this.location}`);
  }
}// end of Person class


class Instructor extends Person {
  constructor(instAttr) {
    super(instAttr)
    this.specialty = instAttr.specialty
    this.favLanguage = instAttr.favLanguage;
    this.catchPhrase = instAttr.catchPhrase;
  }
  // Methods go here:
  demo(subject) {
    console.log(`Today we are learning about ${subject}.`);
  } // end of demo
  grade(subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`);
  } // end of grade
}// end of Instructor class


class Student extends Person {
  constructor(studAttr) {
    super(studAttr);
    this.previousBackground = studAttr.previousBackground;
    this.className = studAttr.className;
    this.favSubjects = studAttr.favSubjects;
  }
  // Methods go here:
  listSubjects() {
    console.log(`${this.name}'s favorite subjects are ${this.favSubjects}.`);
  } // end of listSubjects
  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  } // end of PRAssignment
} // end of student class


class ProjectManager extends Instructor {
  constructor(projAttr) {
    super(projAttr);
    this.gradClassName = projAttr.gradClassName;
    this.favInstructor = projAttr.favInstructor;
  }
  // Methods go here:
  standUp(channel) {
    console.log(`${this.name} announces to ${channel}, @channel standy times!`);
  }
  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student}'s code on ${subject}.`)
  }
}

// Instructors
const Josh = new Instructor({
  name: 'Josh Knell',
  age: 37,
  location: 'Utah',
  gender: 'male',
  //==== end of Person details
  specialty: 'Front-End',
  favLanguage: 'JavaScript',
  catchPhrase: "INVOKE IT LIKE A WIZARD!!"
});

const christopher = new ProjectManager({
  name: 'Christopher Walken',
  age: 75,
  location: 'New York',
  gender: 'male',
  //==== end of Person details
  specialty: 'Computer Science',
  favLanguage: 'Python',
  catchPhrase: "I just gotta have more cowbells!"
});

// Students

const carlos = new Student({
  name: 'Carlos Lantigua',
  age: 34,
  location: 'North Carolina',
  gender: 'male',
  //==== end of Person details
  previousBackground: 'Quality Inspector',
  className: 'FSW14',
  favSubjects: ['JavaScript', 'ReactJS', 'Node']
});

const theRock = new Student({
  name: 'Dwayne Johnson',
  age: 42,
  location: 'Florida',
  gender: 'male',
  //==== end of Person details
  previousBackground: 'Movie Actor',
  className: 'FSW14',
  favSubjects: ['HTML', 'CSS', 'LESS']
});

carlos.listSubjects(); // no param
carlos.PRAssignment('JavaScriptIV'); // takes one Subject param

// PMs
const batman = new ProjectManager({
  name: 'Bruce Wayne',
  age: 33,
  location: 'Gothom City',
  gender: 'male',
  //====== end of Person details
  gradClass: 'CS2',
  favInstructor: 'Ras Al Gul'
});

batman.standUp('#FSW14'); // takes one channel param
batman.debugsCode('Carlos', 'JavaScriptIV'); // takes 2 params (studen, subject)

const wonderWoman = new ProjectManager({
  name: 'Diana',
  age: 25,
  location: 'Paradise',
  gender: 'female',
  // =========== end of Person details
})


