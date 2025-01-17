/*
In the exercise below, write your own code where indicated
to achieve the desired result.

Make sure to run the file with node in your command line.
*/

//-------------------
// Part 1: Syntax and Naming Conventions
//-------------------

// For each prompt:
  // Write a class skeleton
  // Create 2 object instances and store in variables
  // Log each variable to the console.
  // You do not need any proerties at this time!!


// Prompt 1: Dog
// class Dog
// {
// }
// var GoldenRetriever = new Dog();
// console.log(GoldenRetriever);
//
// var HoundDog = new Dog();
// console.log(HoundDog);


// Prompt 2: Snack
// class Snack {
//
// }
// var Chips = new Snack();
// console.log(Chips);
//
// var Sweets = new Snack();
// console.log(sweets);
//
//
// // Prompt 3: Shirt
// class Shirt {
//
// }
// var ShortSleeves = new Shirt();
// console.log(ShortSleeves);
//
// var LongSleeves = new Shirt();
// console.log(LongSleeves);
//
//
// //-------------------
// // Part 2: Properties
// //-------------------
//
// // For each prompt:
//   // Write a class skeleton
//   // Add a constructor method
//   // Assign 3 properties (names and values of your choice) to each class
//   // Create an object instance and store in variable
//   // Log that variable to the console.
//
// // Prompt 1: Dog
// class Dog {
//   constructor() {
//     this.dogName = "Cooper";
//     this.size = "Large";
//     this.dogAge = 4
//   }
// }
// var GoldenRetriever = new Dog();
// console.log(GoldenRetriever);
//
// var HoundDog = new Dog();
// console.log(HoundDog);
//
// // Prompt 2: Snack
// class Snack {
//   constructor() {
//     this.salty = true;
//     this.dateOfExp = "08/14/2025";
//     this.portionSize = "Single";
//   }
// }
// var Chips = new Snack();
// console.log(Chips);
//
// var Sweets = new Snack();
// console.log(Sweets);
//
// // Prompt 3: Shirt
// class Shirt {
//   constructor() {
//     this.shirtColor = "Blue"
//     this.shirtMaterial = "Cotton"
//     this.shirtbuttons = true
//   }
// }
// var ShortSleeves = new Shirt();
// console.log(ShortSleeves);
//
// var LongSleeves = new Shirt();
// console.log(LongSleeves);
//-------------------
// Part 3: Dynamic Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Declare 3 parameters in the consutructor
  // Assign 3 properties (names and values of your choice), using the parameters
  // Create 2 object instances and store in variables (passing in different arguments)
  // Log those variables to the console.

  // Prompt 1: Dog
  class Dog {
    constructor(name, size, age) {
      this.dogName = name;
      this.size = size;
      this.dogAge = age;
    }
  }
  var GoldenRetriever = new Dog("Cooper", "Large", 7);
  console.log(GoldenRetriever);

  var HoundDog = new Dog("Hank", "Large", 12);
  console.log(HoundDog);

  // Prompt 2: Snack
  class Snack {
    constructor(salty, date, portion) {
      this.saltySnack = salty;
      this.dateOfExp = date;
      this.portionSize = portion;
    }
  }
  var Chips = new Snack(true, "5/9/2023", "single");
  console.log(Chips);

  var Sweets = new Snack(false, "6/29/2030", "Family Size");
  console.log(Sweets);

  // Prompt 3: Shirt
  class Shirt {
    constructor(color, material, buttons) {
      this.shirtColor = color;
      this.shirtMaterial = material;
      this.shirtbuttons = buttons;
    }
  }
  var ShortSleeves = new Shirt("blue", "Cotton", false);
  console.log(ShortSleeves);

  var LongSleeves = new Shirt("red", "silk", true);
  console.log(LongSleeves);
