// CODE here for your Lambda Classes
class Person {
  constructor(props) {
    this.name = props.name
    this.age = props.age
    this.location = props.location
    this.gender= props.gender
  }

  speak() {
    console.log(`Hello my name is ${this.name}, and I am from ${this.location}`)
  }
}

class Instructor extends Person {
  constructor(props) {
    super(props)
    this.specialty = props.specialty
    this.favLanguage = props.favLanguage
    this.catchPhrase = props.catchPhrase
  }

  demo(subject) {
    console.log(`Today we are learning about ${subject}`)
  }

  grade(student, subject) {
    console.log(`${student.name} recieves a perfect score on ${subject}`)
  }
}

class Student extends Person {
  constructor(props){
    super(props)
    this.previousBackground = props.previousBackground
    this.className = props.className
    this.favSubjects = props.favSubjects
  }

  listSubjects() {
    this.favSubjects.map(item => console.log(item))
  }

  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`)
  }

  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`)
  }
}

class ProjectManager extends Instructor {
  constructor(props) {
    super(props)
    this.gradClassName = props.gradClassName
    this.favInstructor = props.favInstructor
  }

  standUp(channel) {
    console.log(`${this.name} announces to ${channel} stand up time!`)
  }

  debugCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}\'s code on ${subject}`)
  }
}


const bob = new Instructor({
  name: 'Bobby',
  location: 'Georgia',
  age: 39,
  gender: 'male',
  favLanguage: 'Java',
  specialty: 'Back-end',
  catchPhrase: `Don't forget the homies`
});


const becky = new Instructor({
  name: 'Becky',
  location: 'North Dakota',
  age: 33,
  gender: 'female',
  favLanguage: 'C++',
  specialty: 'Computer Architecture',
  catchPhrase: `How's it going`
});


const bernard = new Student({
  name: 'Bernard',
  location: 'Virginia',
  age: 25,
  gender: 'male',
  previousBackground: 'College Dropout',
  className: 'FSWPT3',
  favSubjects: ['JavaScript', 'React', 'Python']
});

const carly = new Student({
  name: 'Carly',
  location: 'North Carolina',
  age: 24,
  gender: 'female',
  previousBackground: 'Hair Stylist',
  className: 'FSWPT5',
  favSubjects: ['HTML', 'CSS', 'C']
});

const amelia = new ProjectManager({
  name: 'Amelia',
  location: 'Tennessee',
  age: 28,
  gender: 'female',
  gradClassName: 'FSWPT2',
  favInstructor: 'Cameron'
});

const jaxson = new ProjectManager({
  name: 'Jaxson',
  location: 'Maryland',
  age: 27,
  gender: 'male',
  gradClassName: 'FSWPT2',
  favInstructor: 'Dan'
});

console.log(`I am ${bob.name}, and I teach ${bob.specialty} in ${bob.favLanguage}`)
bob.demo('Classes')
console.log(`${becky.catchPhrase}, I am ${becky.name}`)
bernard.speak();
bernard.listSubjects();
bernard.PRAssignment('JavaScript Classes');
carly.listSubjects();
carly.sprintChallenge('Python');
amelia.standUp('#fswpt5_amelia');
jaxson.debugCode(bernard, 'C#')
