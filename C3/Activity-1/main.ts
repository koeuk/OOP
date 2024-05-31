import { Student, School, Classroom } from "./SCHOOL";

// Create schools
let school1 = new School("PNC");
let school2 = new School("AUPP");

// Create students
let student1 = new Student("John", "Doe");
let student2 = new Student("Alice", "Smith");
let student3 = new Student("Bob", "Johnson");
let student4 = new Student("Emily", "Davis");

// Create classrooms
let classroom1 = school1.addClassroom("Class A");
let classroom2 = school2.addClassroom("Class B");

// Add students to classrooms
classroom1.addStudent(student1);
classroom1.addStudent(student2);
classroom2.addStudent(student3);
classroom1.addStudent(student4);

// Test
// console.log(school1.getSchoolName());
// console.log(classroom1);

// console.log("School 2:", school2);
console.log("Number of students in Class A:", classroom1.getNumberOfStudents(), "of",school1.getSchoolName() , "school");
console.log("Number of students in Class B:", classroom2.getNumberOfStudents(), "of",school2.getSchoolName() , "school");
