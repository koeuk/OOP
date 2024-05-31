export class Student {
     private name: string;
     private age: number;
     private gender: string;
 
     constructor(name: string, age: number, gender: string) {
         this.name = name;
         this.age = age;
         this.gender = gender;
     }
 
     public getName(): string {
         return this.name;
     }
 
     public getAge(): number {
         return this.age;
     }
 
     public getGender(): string {
         return this.gender;
     }
 }
 
 export class ClassA {
     protected students: Student[] = [];
 
     public addStudent(student: Student): void {
         this.students.push(student);
     }
 
     public getStudents(): Student[] {
         return this.students;
     }
 }
 
 export class ClassB {
     protected students: Student[] = [];
 
     constructor(private name: string) {}
 
     public addStudent(student: Student): void {
         this.students.push(student);
     }
 
     public getStudents(): Student[] {
         return this.students;
     }
 }