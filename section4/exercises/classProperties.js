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
// class dog {
// }
// var goldenRetriever = new dog();
// console.log(goldenRetriever);
//
// var houndDog = new dog();
// console.log(houndDog);


// Prompt 2: Snack
// class snack {
//
// }
// var chips = new snack();
// console.log(chips);
//
// var sweets = new snack();
// console.log(sweets);
//
//
// // Prompt 3: Shirt
// class shirt {
//
// }
// var shortSleeves = new shirt();
// console.log(shortSleeves);
//
// var longSleeves = new shirt();
// console.log(longSleeves);
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
// class dog {
//   constructor() {
//     this.dogName = "Cooper";
//     this.size = "Large";
//     this.dogAge = 4
//   }
// }
// var goldenRetriever = new dog();
// console.log(goldenRetriever);
//
// var houndDog = new dog();
// console.log(houndDog);
//
// // Prompt 2: Snack
// class snack {
//   constructor() {
//     this.salty = true;
//     this.dateOfExp = "08/14/2025";
//     this.portionSize = "Single";
//   }
// }
// var chips = new snack();
// console.log(chips);
//
// var sweets = new snack();
// console.log(sweets);
//
// // Prompt 3: Shirt
// class shirt {
//   constructor() {
//     this.shirtColor = "Blue"
//     this.shirtMaterial = "Cotton"
//     this.shirtbuttons = true
//   }
// }
// var shortSleeves = new shirt();
// console.log(shortSleeves);
//
// var longSleeves = new shirt();
// console.log(longSleeves);
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
  class dog {
    constructor(name, size, age) {
      this.dogName = name;
      this.size = size;
      this.dogAge = age;
    }
  }
  var goldenRetriever = new dog("Cooper", "Large", 7);
  console.log(goldenRetriever);

  var houndDog = new dog("Hank", "Large", 12);
  console.log(houndDog);

  // Prompt 2: Snack
  class snack {
    constructor(salty, date, portion) {
      this.saltySnack = salty;
      this.dateOfExp = date;
      this.portionSize = portion;
    }
  }
  var chips = new snack(true, "5/9/2023", "single");
  console.log(chips);

  var sweets = new snack(false, "6/29/2030", "Family Size");
  console.log(sweets);

  // Prompt 3: Shirt
  class shirt {
    constructor(color, material, buttons) {
      this.shirtColor = color;
      this.shirtMaterial = material;
      this.shirtbuttons = buttons;
    }
  }
  var shortSleeves = new shirt("blue", "Cotton", false);
  console.log(shortSleeves);

  var longSleeves = new shirt("red", "silk", true);
  console.log(longSleeves);
