

class Bob {
     private name : string = "Bob";
     getName() {
          return this.name;
     }
}

let myBob = new Bob();
let bobName = myBob.getName();
bobName = "ronan";
console.log(myBob.getName());