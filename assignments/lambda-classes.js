// CODE here for your Lambda Classes
class Person {
    constructor(personAttributes){
        this.name = personAttributes.name;
        this.age = personAttributes.age;
        this.location = personAttributes.location;
        this.gender = personAttributes.gender;
    }
    speak(){
        console.log(`Hello my name is ${this.location}, I am from ${this.location}`);
    }
}

