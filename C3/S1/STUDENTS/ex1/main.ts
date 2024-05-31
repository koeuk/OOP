
class Person {
     private name: string;
     private yearOfBirth :number;

     constructor(name: string, yearOfBirth: number) {
          this.name = name;
          this.yearOfBirth = yearOfBirth;
     }

     public getName (): string {
          return this.name;
     }
     public getYearOfBirth ():number {
          return this.yearOfBirth ;
     }
}

class Calendar {
     constructor(private currentYear: number) {
          this.currentYear = currentYear;
     }
     public getAge (Person:Person):number {
          return this.currentYear - Person.getYearOfBirth () ;
     }
}

let person1 = new Person("koeuk", 2001);
let person2 = new Person("Yon", 2003);
let calendar1 = new Calendar(2024);
let calendar2 = new Calendar(2023)
let age1= calendar1.getAge(person1);
let age2 = calendar2.getAge(person2);

console.log("year: ",age1);
console.log("year: " ,age2);
// console.log(calendar)