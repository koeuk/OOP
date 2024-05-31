


class Persons {
     private name : string;
     private yearOfBirth : number;
     constructor (name:string, yearOfbirth: number ) {
          this.name= name;
          this.yearOfBirth = yearOfbirth;
     }

     public getName() {
          return this.name;
     }
     getYearOfbirths () {
          return this.yearOfBirth;
     }
}

class Calendars {
     constructor(private currentYear: number) {
          this.currentYear = currentYear;
     }
     getCurrentYear(Per:Persons) {
          return this.currentYear - Per.getYearOfbirths();
     }
}

/// 

let persons1 = new Persons("koeuk", 23);
let persons2 = new Persons("KOS", 54);

let calendars1 = new Calendars(2023);
let calendars2 = new Calendars(2026);
let getName1 = persons1.getName()
let getName2 = persons2.getName()

let result1 = calendars1.getCurrentYear(persons1);
let result2 = calendars2.getCurrentYear(persons2);

console.log(getName1,result1,"|", getName2,result2)