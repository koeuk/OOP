

class Persons {
     constructor (private name: string, private yearOfBirth: number) {
          this.name = name ;
          this.yearOfBirth = yearOfBirth;
     }

     public getName ():string {
          return this.name;
     }
     public getYearOfBirth (): number {
          return this.yearOfBirth;
     }
}
class Calendars {
     constructor (private currentYear: number) {
          this.currentYear = currentYear;
     }
     public getAge(Persons: Persons):number {
          return this.currentYear - Persons.getYearOfBirth();
     }
}

let persons1 = new Persons("koeuk",2002);
let calendars1 = new Calendars(2024);

let ages1 = calendars1.getAge(persons1);

console.log("koeuk" , ages1)