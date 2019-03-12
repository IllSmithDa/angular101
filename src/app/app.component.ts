import { Component } from '@angular/core';


// interface defines and enforces type checking on object's properties 
// both prop1 and prop2 must be there with one value being a string and other number
interface object1 {
  prop1: string,
  prop2: number
}

interface object2 {
  prop3: boolean,
  prop4: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  // type check and initializing variable and you can also add value 
  name : string = 'okay';
  sam: string = 'PepeFrog';
  title = 'Angular 101';
  numGuests = 4023;
  // type checking functions parameter and function return value;
  // the colon + number after parameter force return value to be a number
  exampleFunc = (title : string = 'goodbye') :number => {
    // return numGuests which is a number. Also must use 'this' keyword for referencing
    // variables in this class
    return this.numGuests;
  }

  newObjectInstance : object1 = {
    prop1: 'asdfasd',
    prop2: 32,
  }
  
  // this function accepts type object1 with exact same prop and prop type
  exampleFunc2 = (obj: object1) : object1 => {
    return obj;
  }

  // there is a union prop type where something can either be this or that 
  // this variable accepts object1 or/and object2 as acceptable values. This is 
  // intersection type
  exampleVar : object1 | object2 = {
    prop1: 'qqwerqw',
    prop2: 2352,
  }

  // using ampersand changes type checking where now it has to match both object1 and 
  // object2 type . This is union type
  exampleVar2: object1 & object2 = {
    prop1: 'asdf',
    prop2: 4334,
    prop3: false,
    prop4: 'asdfd'
  }
}
