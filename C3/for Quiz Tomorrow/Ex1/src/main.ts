
export class Person {
     private name : string;
     private yearOfBirth : number;

     constructor(name: string, age: number) {
          this.name = name;
          this.yearOfBirth = age;
     }

     public getName () : string {
          return this.name;
     }
     public getYearOfBirth () : number {
          return this.yearOfBirth;
     }

}

export class Caledar {
     constructor (private currentYear: number) {
          this.currentYear = currentYear;
     }
     public getCurrentYear (Person:Person) : number {
          return this.currentYear - Person.getYearOfBirth();
     }
}

