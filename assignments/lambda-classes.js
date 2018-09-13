// CODE here for your Lambda Classes
class Person {
    constructor(attributes) {
        this.age = attributes.age;
        this.name = attributes.name;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
    }
}

class Student extends Person {
    constructor(studentAttributes) {
        super(studentAttributes);
        this.previousbackground = studentAttributes.previousbackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
        this.grade = studentAttributes.grade;
    }
    listsSubjects() {
        console.log(`${this.favSubjects}`);
    }
    PRAssignments(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}

class Instructor extends Person {
    constructor(instructorAttributes) {
        super(instructorAttributes);
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject) {
        console.log(`${student} receives a perfect score on ${subject}`);
    }
    changeGrade(student) {
      let randomNum = Math.random();
      if (randomNum > 0.5) {
        student.score - (Math.random() * 10);
      }
      else {
        student.score + (Math.random() * 10);
      }
    }
}

class PM extends Instructor {
    constructor(pmAttributes) {
        super(pmAttributes);
        this.gradClassName = pmAttributes.gradClassName;
        this.favInstructor = pmAttributes.favInstructor;
    }
    standUp(slackChannel) {
        console.log(`${this.name} announces to ${slackChannel}, @channel standup time!`)
    }
    debugCode(student, subject) {
        console.log(`${this.name} debugs ${student}'s code on ${subject}`);
    }
}

const davis = new Person({
    'age': 75,
    'name': 'Jefferson Davis',
    'location': 'New Orleans',
    'gender': 'M'
})

const lincoln = new Person({
    'age': 55,
    'name': 'Abraham Lincoln',
    'location': 'Washington DC',
    'gender': 'M'
})

const johnson = new Student({
    'age': 55,
    'name': 'Andrew Johnson',
    'location': 'Raleigh, NC',
    'gender': 'M',
    'previousBackground': 'Union Army, Brigadier General',
    'className': '17th',
    'favSubjects': ['American Civil War', ' Cavalry Management', ' Fiscal Conservativism'],
    'score':'85'
})

const grant = new Student({
    'age': 40,
    'name': 'Ulysses S. Grant',
    'location': 'Point Pleasant, OH',
    'gender': 'M',
    'previousBackground': 'Union Army, General',
    'className': '18th',
    'favSubjects': 'Mexican American War',
    'score':'90'
})

const hayes = new Instructor({
    'age': 43,
    'name': 'Rutherford B. Hayes',
    'location': 'Delaware, OH',
    'gender': 'M',
    'specialty': 'Battle of South Mountain',
    'favLanguage': 'old-Javascript',
    'catchPhrase': 'I love modest civil service reforms!'
})

const garfield = new Instructor({
    'age': 39,
    'name': 'James A. Garfield',
    'location': 'Moreland Hills, OH',
    'gender': 'M',
    'specialty': 'canal boating',
    'favLanguage': 'old-HTML',
    'catchPhrase': 'I prefer an educated electorate!'
})

const arthur = new PM({
    'age': 51,
    'name': 'Chester A. Arthur',
    'location': 'Fairfield, VT',
    'gender': 'M',
    'specialty': 'reforming the federal patronage system',
    'favLanguage': 'old-Java',
    'catchPhrase': 'I\'m racist against the Chinese!',
    'gradClassName':'21st',
    'favInstructor': 'Roscoe Conkling'
})

const cleveland = new PM({
    'age': 47,
    'name': 'Grover Cleveland',
    'location': 'Caldwell, NJ',
    'gender': 'M',
    'specialty': 'classical liberalism',
    'favLanguage': 'old-CSS',
    'catchPhrase': 'I\'m a formidable policy maker!',
    'gradClassName':'22nd',
    'favInstructor': 'Daniel Manning'
})

console.log(cleveland.catchPhrase);
console.log(arthur.catchPhrase);

davis.speak();
lincoln.speak();
johnson.listsSubjects();
grant.PRAssignments('artillary');
johnson.sprintChallenge('budgeting');
cleveland.standUp('#former-presidents');
arthur.debugCode('Davis', 'confederacy');
arthur.demo('Civil War regiments');
hayes.grade('Grant', 'agricultural technology');

garfield.changeGrade(grant);
console.log(grant.score);


