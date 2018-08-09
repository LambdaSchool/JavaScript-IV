// CODE here for your Lambda Classes

// ## `lambda-classes` - We need a roster of Lambda School personnel. Build it!

// * We have a school to build here! This project will get you used to thinking about classes in JavaScript and building them from a brand new data set.
// * [ ] Lambda personnel can be broken down into three different types of `people`.
//   * [ ] **Instructors** - extensions of Person
//   * [ ] **Students** - extensions of Person
//   * [ ] **Project Managers** - extensions of Instructors
// * [ ] **IMPORTANT** - You'll need to create 2 - 3 objects for each class and test them according to their unique Attributes. For example:

// ```js
// const fred = new Instructor({
//   name: 'Fred',
//   location: 'Bedrock',
//   age: 37,
//   gender: 'male',
//   favLanguage: 'JavaScript',
//   specialty: 'Front-end',
//   catchPhrase: `Don't forget the homies`
// });
// ```

// #### Person

// * [x] First we need a Person class. This will be our `base-class`
// * [x] Person receives `name` `age` `location` `gender` all as props
// * [x] Person receives `speak` as a method.
// * [x] This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props

class Person {
    constructor(personAttr) {
        this.name = personAttr.name;
        this.age = personAttr.age;
        this.location = personAttr.location;
        this.gender = personAttr.gender;
    }
    speak() {
        return `Hello, my name is ${this.name}. I am from ${this.location}.`;
    }
}

// #### Instructor

// * [x] Now that we have a Person as our base class, we'll build our Instructor class.
// * [x] Instructor uses the same attributes that have been set up by Person
// * Instructor has the following unique props:
//   * [x] `specialty` what the Instructor is good at i.e. 'redux'
//   * [x] `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
//   * [x] `catchPhrase` i.e. `Don't forget the homies`
// * Instructor has the following methods:
//   * [x] `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
//   * [x] `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'

class Instructor extends Person {
    constructor(instructorAttr) {
        super(instructorAttr);
        this.specialty = instructorAttr.specialty;
        this.favLanguage = instructorAttr.favLanguage;
        this.catchPhrase = instructorAttr.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(studentObj, subject) {
        return `${studentObj.name} receives a perfect score on ${subject}`;
    }
}

// #### Student

// * [x] Now we need some students!
// * [x] Student uses the same attributes that have been set up by Person
// * Student has the following unique props:
//   * [x] `previousBackground` i.e. what the Student used to do before Lambda School
//   * [x] `className` i.e. CS132
//   * [x] `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
// * Student has the following methods:
//   * [x] `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
//   * [x] `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
//   * [x] `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`

class Student extends Person {
    constructor(constructorAttr) {
        super(constructorAttr);
        this.previousBackground = constructorAttr.previousBackground;
        this.className = constructorAttr.className;
        this.favSubjects = constructorAttr.favSubjects;
    }
    listsSubjects() {
        this.favSubjects.forEach((subject) => console.log(subject));
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}

// #### Project Mananger

// * [x] Now that we have instructors and students, we'd be nowhere without our PM's
// * [x] ProjectManagers are extensions of Instructors
// * ProjectManagers have the following uniqe props:
//   * [x] `gradClassName`: i.e. CS1
//   * [x] `favInstructor`: i.e. Sean
// * ProjectManangers have the following Methods:
//   * [x] `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
//   * [x] `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`

class ProjectManagers extends Instructor {
    constructor(pmAttr) {
        super(pmAttr);
        this.gradClassName = pmAttr.gradClassName;
        this.favInstructor = pmAttr.favInstructor;
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(studentObj, subject) {
        console.log(`${this.name} debugs ${studentObj.name}'s code on ${subject}`);
    }
}


// #### Objects


// #### Stretch Problem

// * [ ] Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
// * [ ] Now that our students have a grade build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's) that will randomly add or subtract points to a student's grade. _Math.random_ will help.
// * [ ] Add a graduate method to a student.
//   * [ ] This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
//   * [ ] If the student's grade is above a 70% let them graduate! Otherswise go back to grading their assignments to increase their score.
