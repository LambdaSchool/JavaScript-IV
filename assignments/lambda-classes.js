// CODE here for your Lambda Classes

class Person {
    constructor(props) {
        this.name = "Jason";
        this.age = 33;
        this.location = "Chicago";
        this.gender = "Male";
        this.student = "FSW16 Grad!";
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location} `);
    }
}
const personnel = new Person("Jason");
personnel.speak();



class Instructor extends Person {
    constructor(props) {
        super(props);
        this.speciality = "redux";
        this.favLanguage = "Python";
        this.cathPhrase = "coding is life";

    }
    demo() {
        console.log(`Today we are learning about ${this.subject}`);

    }
    grade() {
        console.log(`${this.name} receives a perfect scoe on ${this.subject}`);
    }
}
const staff = new Instructor("Josh");
staff.demo();
staff.grade();


class Student extends Instructor {
    constructor(props) {
        super(props);
        this.previousBackground = props.previousBackground;
        this.className = props.className;
        this.favSubjects = props.favSubjects;

    }
    listSubjects(student) {
        console.log(this.favSubjects);
    }
    PRassignment(subject) {
        console.log(`student.name has submitted a PR for ${subject}`);

    }
    sprintchallenge(subject) {
        console.log(`student.name has begun sprint challenge on ${subject}`);
    }
}

class ProjectManager extends Instructor {
    constructor(props) {
        super(props);
        this.gradClassName = props.gradClassName;
        this.favInstructor = props.favInstructor;

    }
    standUp() {
        console.log(`${name} announces to ${channel}, @channel standy times!`);

    }
    dbugsCode(student) {
        console.log(`${name} debugs ${student.name}'s code on ${subject}`);
    }


}