// CODE here for your Lambda Classes

class Person{
    constructor (props) {
        this.name = props.name;
        this.age = props.age;
        this.location = props.location;
        this.gender = props.gender;
        this.age = props.age;
    }
      speak (){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`); ;
    }
}

  
  class Instructor extends Person{
    constructor(props){
        super(props);
        this.specialty = props.specialty;
        this.favLanguage = props.favLanguage;
        this.catchPhrase = props.catchPhrase;
    }

    demo(subject){
    console.log(`Today we are learning about ${subject}.`);
    }

    grade(student, subject){
        console.log(`${student.name} receives a perfect score on ${subject}`); 
    }

}
  
  class Student extends Person{
    constructor (props) {
        this.previousBackground = props.previousBackground;
        this.className = props.age;
        this.favSubjects = props.favSubjects;
    }
    listsSubjects (){
    this.favSubjects.forEach(subject => {console.log(subject)}) ;
    }
    PRAssignment (subject){
    console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}`)
    }
}
// #### Project Mananger

// * Now that we have instructors and students, we'd be nowhere without our PM's
// * ProjectManagers are extensions of Instructors
// * ProjectManagers have the following uniqe props:
//   * `gradClassName`: i.e. CS1
//   * `favInstructor`: i.e. Sean
// * ProjectManangers have the following Methods:
//   * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
//   * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`
  