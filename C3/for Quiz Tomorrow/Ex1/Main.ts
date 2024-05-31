
// import file

import { Person, Caledar } from "./src/main";

// for person 

let person1 = new Person("koeuk", 2001);
let person2 = new Person("KOS", 2003);

let calendar1 = new Caledar (2024);
let calendar2 = new Caledar(2030);

let result1 = calendar1.getCurrentYear(person1)
let result2 = calendar2.getCurrentYear(person2);

let names1 = person1.getName();
let names2 = person2.getName();


console.log(names1,result1);
console.log(names2,result2);