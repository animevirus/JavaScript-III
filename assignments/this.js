/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. When in the global scope, the value of “this” will be the window/console Object;
* 2. Whenever a function is called by a preceding dot, the object before that dot is this.
* 3. Whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function.
* 4. Whenever JavaScript’s call or apply method is used, this is explicitly defined.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function sayCar(car) {
    console.log(this);
    return car;
  }
  sayCar("Lambo");

// Principle 2


// code example for Implicit Binding

const myObj = {
    greeting: 'Hello did you know',
    sayHello: function(name) {
      console.log(`${this.greeting} my name is ${name}`);
      console.log(this);
    }
  };
  myObj.sayHello('Sebas');

// Principle 3

// code example for New Binding

function CordialPerson(greeter) {
    this.greeting = 'Hello there ';
    this.greeter = greeter;
    this.speak = function() {
      console.log(this.greeting + this.greeter);
      console.log(this);
    };
  }
  
  const Karen = new CordialPerson('Tefy');
  const Tefy = new CordialPerson('Karen');
  
  Karen.speak();
  Tefy.speak();

// Principle 4

// code example for Explicit Binding

// function CordialPerson(greeter) {
//     this.greeting = 'Hello there ';
//     this.greeter = greeter;
//     this.speak = function() {
//       console.log(this.greeting + this.greeter);
//       console.log(this);
//     };
//   }
  
//   const Karen = new CordialPerson('Tefy');
//   const Tefy = new CordialPerson('Karen');
  
//   Karen.speak();
//   Tefy.speak();

  Tefy.speak.call(Karen);
   Karen.speak.apply(Tefy);