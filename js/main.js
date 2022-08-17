'use strict';
console.log('main.js');

// 6. https://edabit.com/challenge/HBNwoHQJn5uTWJCgM - ES6: Destructuring Arrays II
//              0      1                    2
//                                  0             1
const arr = ['cars', 'planes', ['trains', ['motorcycles']]];

// let trans1 = arr[0];
// let trans2 = arr[1];
// let trans3 = arr[2][0];
// let trans4 = arr[2][1][0];

const [trans1, trans2, [trans3, [trans4]]] = arr;

console.log(trans1); // outputs "cars"
console.log(trans2); // outputs "planes"
console.log(trans3); // outputs "trains"
console.log(trans4); // outputs "motorcycles"

// 7. https://edabit.com/challenge/kGLhgwGaLJsCMS7wS - Fullname and Email
class Employee {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    // Complete the code!
  }
  fullname() {
    return `${this.firstname} ${this.lastname}`;
  }

  get email() {
    // validacijos
    return `${this.firstname.toLowerCase()}.${this.lastname.toLowerCase()}@company.com`;
  }
}

const emp1 = new Employee('John', 'Smith');
emp1.fullname(); //➞ "John Smith"

const emp2 = new Employee('Mary', 'Sue');
emp2.email; //➞ "mary.sue@company.com"

const emp3 = new Employee('Antony', 'Walker');
emp3.firstname; //➞ "Antony"

// 7. https://edabit.com/challenge/kGLhgwGaLJsCMS7wS - Fullname and Email objectConstructors budu
