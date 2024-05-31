
import { ClassA, ClassB } from "./Class";
import { Student } from "./student";
import { Trainers } from "./trainer";

let classA = new ClassA("A");

let student1 = new Student("koeuk", 2001, "male");
let student2 = new Student("kos", 2004, "male");

let trainer1 = new Trainers("Rady");
let trainer2 = new Trainers("Yon");

classA.addStudent(student1);
classA.addStudent(student2);

classA.addTrainer(trainer1);
classA.addTrainer(trainer2);



console.log(classA); // ClassA A

// let class_A = new ClassA();
