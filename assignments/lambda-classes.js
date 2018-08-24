// CODE here for your Lambda Classes

class Person {
    constructor(obj){
        this.name = obj.name;
        this.age = obj.age;
        this.location = obj.location;
        this.gender = obj.gender;
    }

    speak(){
        return `Hello! My name is ${this.name}. I am from ${this.location}.`;
    }
}

class Instructor extends Person {
    constructor(obj){
        super(obj)
        this.specialty = obj.specialty;
        this.favLanguage = obj.favLanguage;
        this.catchPhrase = obj.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}.`;
    }
    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}.`
    }
    toughGrader(student){
        let randomAmount = Math.floor(Math.random() * (10)) + 1; //ensures it adds/subtracts a whole integer
        let odds = randomAmount; //gives us a randomizer to make add or subtract 50/50 chances
        if (odds %2 === 0) {
          if (student.grade - randomAmount <= 0) {
            student.grade = 0;
          } student.grade = (student.grade - randomAmount);

        } else if (odds%2 !== 0) {
          if ((student.grade*1) + (randomAmount*1) > 100) {
            student.grade = 100;
          } else { 
          student.grade = ((student.grade*1) + (randomAmount*1));
          }
        } return student.grade;
    } 
}

class Student extends Person {
    constructor(obj){
        super(obj)
        this.previousBackground = obj.previousBackground;
        this.className = obj.className;
        this.favSubjects = obj.favSubjects;
        this.grade = obj.grade; //grade must be an array
    }
    listsSubjects(){
        return this.favSubjects;
    }
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}.`
    }
    sprintChallenge(subject){
        return `${this.name} has begun spring challenge on ${subject}.`
    }
    graduate(){

    }
}

const Julie = new Student({
    name: 'Julie',
    age: '25',
    location: 'Houston',
    gender: 'Female',
    previousBackground: 'Event planner',
    className: 'cspt2',
    favSubjects: ['English', 'World Geography', 'CSS',],
    grade: [46],
})

// console.log(Julie.PRAssignment('HTML'));

class ProjectManager extends Instructor {
    constructor(obj){
        super(obj)
        this.gradClassName = obj.gradClassName;
        this.favInstructor = obj.favInstructor;
    }
    standUp(channel){
        return `${this.name} announces to ${channel}, "@channel standup time!"`
    }
    debugsCode(Student, subject){
        return `${this.name} debugs ${Student.name}'s code on ${subject}.`
    }
}

const Raymond = new ProjectManager ({
    name: 'Raymond',
    age: 'Wise',
    location: 'Texas',
    gender: 'Male',
    specialty: 'Helping students',
    favLanguage: 'Javascript',
    catchPhrase: '@here Get in here!',
    gradClassName: 'cs11',
    favInstructor: 'Dan',
})

console.log(Raymond.debugsCode(Julie, 'HTML'))

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

console.log(fred.toughGrader(Julie))
console.log(fred.toughGrader(Julie))
console.log(fred.toughGrader(Julie))

