class Animal {
  protected name: string;
  private age: number;
  private gender: string;

  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  getAge() {
    return this.age; // use private
  }
  getGender() {
    return this.gender; // use private
  }
//   getCat () { return this.name;}
}

class Dog extends Animal {
  constructor(name: string, age: number, gender: string) {
    super(name, age, gender);
  }

  getName() {
    return this.name; // TODO: use protected
  }
}

class Cat extends Animal {
  constructor(name: string, age: number, gender: string) {
    super(name, age, gender);
  }
}

let cat = new Cat("Cat", 2, "female");
console.log(  cat.getAge(), cat.getGender());
// console.log(cat.getCat()); // console Cat

let dog1 = new Dog("dog1", 3, "male");
console.log(dog1.getName(), dog1.getAge(), dog1.getGender()); // Output: dog1 3
