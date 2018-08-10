// CODE here for your Lambda Classes
/*## `lambda-classes` - We need a roster of Lambda School personnel.Build it!

    * We have a school to build here! This project will get you used to thinking about classes in JavaScript and building them from a brand new data set.
* Lambda personnel can be broken down into three different types of`people`.
  * ** Instructors ** - extensions of Person
    * ** Students ** - extensions of Person
        * ** Project Managers ** - extensions of Instructors
            * ** IMPORTANT ** - You'll need to create 2 - 3 objects for each class and test them according to their unique Attributes. For example:

                ```js
                */
/*
```

#### Person

* First we need a Person class. This will be our `base - class`
* Person receives `name` `age` `location` `gender` all as props
* Person receives `speak` as a method.
* This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props
*/

class Person{
    constructor(base){
        this.name = base.name;
        this.age = base.age;
        this.location= base.location;
        this.gender = base.gender;
    }
//method
speak(){
    return `Hello my name is ${this.name}, I am from ${this.location}`;
};
} // end of class

/*
#### Instructor

* Now that we have a Person as our base class, we'll build our Instructor class.
* Instructor uses the same attributes that have been set up by Person
* Instructor has the following unique props:
  * `specialty` what the Instructor is good at i.e. 'redux'
  * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
  * `catchPhrase` i.e. `Don't forget the homies`
    * Instructor has the following methods:
  * `demo` receives a`subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
  * `grade` receives a`student` object and a`subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'
*/
class Instructor extends Person{
    constructor(attr){
        super(attr);
        this.specialty= attr.specialty;
        this.favLanguage= attr.favLanguage;
        this.catchPhrase= attr.catchPhrase;

    }//method1
    demo(subject){
        return `Today we are learning about ${ subject }.`;
    } //method2
    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}.`;
    }
}
/*#### Student

    * Now we need some students!
        * Student uses the same attributes that have been set up by Person
            * Student has the following unique props:
  * `previousBackground` i.e.what the Student used to do before Lambda School
    * `className` i.e.CS132
        * `favSubjects`.i.e.an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
            * Student has the following methods:
  * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
    * `PRAssignment` a method that receives a subject as an argument and logs out that the`student.name has submitted a PR for {subject}`
        * `sprintChallenge` similar to PRAssignment but logs out`student.name has begun sprint challenge on {subject}`
*/
class Student extends Person {
    constructor(studentAttr){
        super(studentAttr);
        this.previousBackground=studentAttr.previousBackground;
        this.className= studentAttr.className;
        this.favSubjects= studentAttr.favSubjects;

    }
    //method1
    listsSubjects(arr){
        for(let i=0; i<arr.length; i++){
            console.log(arr[i]);
        }
    }
    //method2
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`;
    };
    //method3
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${ subject }.`;
    } ;      
}
/*
#### Project Mananger

    * Now that we have instructors and students, we'd be nowhere without our PM's
        * ProjectManagers are extensions of Instructors
            * ProjectManagers have the following uniqe props:
  * `gradClassName`: i.e.CS1
    * `favInstructor`: i.e.Sean
        * ProjectManagers have the following Methods:
  * `standUp` a method that takes in a slack channel and logs`{name} announces to {channel}, @channel standy times!​​​​​
  * `debugsCode` a method that takes in a student object and a subject and logs out `{ name } debugs { student.name } 's code on {subject}`
*/
class ProjectManager extends Instructor{
    constructor(pm){
        super(pm);
        this.gradClassName = pm.gradClassName;
        this.favInstructor = pm.favInstructor;
        }

        //method1
        standUp(channel){
            return `${this.name} announces to ${channel}, @channel standy times!`;
        }

        //method2
    debugCode(student, subject) {
        return`${this.name } debugs ${ student.name } 's code on ${subject}`;
            
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

console.log(fred.name)
console.log(fred.gender)
console.log(fred.demo("math"))

const bela = new Student ({
    name: 'Bela',
    location: 'Bivalytanya',
    age: 55,
    gender: 'male',
    previousBackground: 'cleaner',
    className: 'CS2011',
    favSubject: ["REACT" , "CSS", "functions"]
});

console.log(bela.name)
console.log(bela.location)
console.log(bela.favSubject)

const Nusi = new ProjectManager({
    name: 'Nusi,
    location: 'Satoraljauhely',
    age:99,
    gender: 'female',
    gradClassName: 'CS13',
    favInstructor: 'Baba'
    })

    console.log(Nusi.standUp("CS13"))

/*
#### Stretch Problem

    * Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1 - 100.
        * Now that our students have a grade build out a method on the Instructor(this will be used by _BOTH_ instructors and PM's) that will randomly add or subtract points to a student's grade._Math.random_ will help.
* Add a graduate method to a student.
  * This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
    * If the student's grade is above a 70% let them graduate! Otherswise go back to grading their assignments to increase their score.## `lambda-classes` - We need a roster of Lambda School personnel. Build it!

* We have a school to build here! This project will get you used to thinking about classes in JavaScript and building them from a brand new data set.
* Lambda personnel can be broken down into three different types of `people`.
  * **Instructors** - extensions of Person
  * **Students** - extensions of Person
  * **Project Managers** - extensions of Instructors
* **IMPORTANT** - You'll need to create 2 - 3 objects for each class and test them according to their unique Attributes. For example:
*/
