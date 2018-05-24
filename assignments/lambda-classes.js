


/*

* First we need a Person class. This will be our `base-class`
* Person receives `name` `age` `location` `gender` all as props
* Person receives `speak` as a method.
* This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props
*/

class Person {
	constructor(base){
		this.name = base.name;
		this.age = base.age;
		this.location = base.location;
		this.gender = base.gender;
	}

	speak() {
		return `Hello my name is ${this.name}, I am from ${this.location}.`;
	}
}
/*
#### Instructor

* Now that we have a Person as our base class, we'll build our Instructor class.
* Instructor uses the same attributes that have been set up by Person
* Instructor has the following unique props:
  * `specialty` what the Instructor is good at i.e. 'redux'
  * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
  * `catchPhrase` i.e. `Don't forget the homies`
* Instructor has the following methods:
  * `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
  * `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'*/

class Instructor extends Person{
	constructor(teachProps){
		super(teachProps); 
		this.specialty = teachProps.specialty;
		this.favLanguage = teachProps.favLanguage; 
		this.catchPhrase = teachProps.catchPhrase;
	}
	demo() { 
		return `Today we are learning about ${this.subject}`;

	}

	grade() {
		return `${this.name} recieves a perfect score on ${this.subject}`;

	}

}

class Student extends Person{
	constructor(stuProps){
		super(stuProps); 
		this.previousBackground = stuProps.previousBackground;
		this.className = stuProps.className;
		this.favSubjects = stuProps.favSubjects;
	}

	listSubjects(){
		console.log(this.favSubjects);
	}

	PRAssignment(){
		return `${this.name} has submitted a PR for ${this.subject}`
	}

	sprintChallenge() {
		return  `${this.name} has begun spring challenge on ${this.subject}`
		}
}


class ProjectManager extends Instructor{
	constructor(projmanProps){
		super(projmanProps);

			this.gradClassName = projmanProps.gradClassName;
			this.favInstructor = projmanProps.favInstructor;
		}

		standUp() {
			return `${this.name} announces to ${this.gradClassName}, @channel standy times!​​​​​`;
		}

		debugsCode(){
			return `${this.name} debugs ${Student.name}'s code on ${this.subject}`
		}


		}
	


const damian = new Student({
  name: 'damian',
  location: 'Jamrock',
  age: 31,
  gender: 'male',
  favSubjects: 'Python',
  previousBackground: 'Musician',
  className: `cs-11`
});


const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
  favLanguage: 'Assembly',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});

const bob = new ProjectManager({
  name: 'Mr.Ross',
  location: 'Dayton Beach, Florida',
  age: 37,
  gender: 'male',
  favLanguage: 'None except for Painting',
  specialty: 'Art Instructor',
  catchPhrase: "We don't make mistakes, just happy little accidents."
});



console.log(damian.speak())
console.log(bob.catchPhrase)
console.log(fred.favLanguage)



// CODE here for your Lambda Classes
