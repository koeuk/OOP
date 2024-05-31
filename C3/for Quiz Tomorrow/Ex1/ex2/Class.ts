
import { Student } from "./student";
import { Trainers } from "./trainer";

export class ClassA {
     protected students: Student[] = [];
    protected trainers: Trainers[] = [];
     constructor(private classA: string) {
          this.classA = classA;
     }
}

export class ClassB {
     protected students: Student[] = [];
     protected trainers: Trainers[] = [];
     constructor(private classB: string) { 
         this.classB = classB
     }
}
