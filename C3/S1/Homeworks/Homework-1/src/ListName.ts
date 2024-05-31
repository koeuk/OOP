

import { Room1 } from "./Room1";
import { Room2 } from "./Room2";
import { Room3 } from "./Room3";

export class Person {
     private name:string;
     private province : string;
     private age :number;
     
     constructor ( name : string,  province: string,  age:number) {
          this.name = name;
          this.province = province;
          this.age = age;
     }
     public getName () {
          return this.name;
     }
     public getProvince () {
          return this.province;
     }
     public getAge () {
          return this.age;
     }
}
