


import { Room1 } from "./src/Room1";
import { Room2 } from "./src/Room2";
import { Room3 } from "./src/Room3";
import { Person } from "./src/ListName";

let result = []

let room1 =  new Room1("room1");
let room2 =  new Room1("room2");
let room3 =  new Room1("room3");

let name1 = new Person("koeuk", "RTK", 23);

let live = room1.getNameRoom1();


console.log(name1, room1.getNameRoom1())