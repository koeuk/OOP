

class Person {
    constructor(private name:string, private yearOfBirth: number) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
    }
    public getName () {
        return this.name;
    }
    public getYearOfBirth () {
        return this.yearOfBirth;
    }
}

class Calendar {
    constructor (private currentyear: number) {
        this.currentyear = currentyear;
    }
    public getAge (Person: Person) : number {
        return this.currentyear - Person.getYearOfBirth();
    }
}

let person1 = new Person("koeuk",2005);
let person2 = new Person("kos",2001);

let calendar1 = new Calendar(2023);
let calendar2 = new Calendar(2024);

let age1 = calendar1.getAge(person1);
let age2 = calendar2.getAge(person2);

console.log("year: " ,age1);
console.log("year: " ,age2);