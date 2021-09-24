// Challenge - See if you can follow the instructions and complete the exercise in under 30 minutes!

// Declare two variables - heroName AND specialAbility - set to strings
var heroName = "nezthenasty";
var specialAbility = "Reads minds";

// Declare two variables - greeting AND catchphrase
//   greeting should be assigned to a string that uses concatenation to include the heroName
//   catchphrase should be assigned to a string that uses interpolation to include the specialAbility
var greet = "Lookie what we have here " + heroName
var catchphrase = "'Unbelievable!!' He exclaims as he ${specialAbility}"


// Declare two variables - power AND energy - set to integers
var power = 100;
var energy = 50;

// Declare two variables - fullPower AND fullEnergy
//   fullPower should multiply your current power by 500
//   fullEnergy should add 150 to your current energy
var fullPower = (power * 500);
var fullEnergy = (energy + 50);

// Declare two variables - isHuman and identityConcealed - assigned to booleans
var isHuman = true;
var identityConcealed = false;

// Declare two variables - archEnemies AND sidekicks
//   archEnemies should be an array of at least 3 different enemy strings
//   sidekicks should be an array of at least 3 different sidekick strings
var archEnemies = ["Crazy Woman",  "The Painter", "Fire Man"]
var sidekicks = ["Mum", "The American", "The Porter"]

// Print the first sidekick to your console
console.log(sidekicks[0]);
// Print the last archEnemy to the console
console.log(archEnemies[2]);
// Write some code to add a new archEnemy to the archEnemies array
archenemies.push("The Mooch");

// Print the archEnemies array to console to ensure you added a new archEnemy
console.log(archenemies)
// Remove the first sidekick from the sidekicks array
sidekicks.unshift();
// Print the sidekicks array to console to ensure you added a new sidekick
console.log(sidekicks);
// Create a function called assessSituation that takes three arguments - dangerLevel, saveTheDay, badExcuse
//   - dangerLevel should be an integer
//   - saveTheDay should be a string a hero would say once they save the day 
//   - badExcuse should be a string a hero would say if they are too afraid of the dangerLevel
  

// Your function should include an if/else statement that meets the following criteria
//   - Danger levels that are above 50 are too scary for your hero. Any danger level that is above 50 should result in printing the badExcuse to the console
//   - Anything dangerLevel that is between 10 and 50 should result in printing the saveTheDay string to the console
//   - If the dangerLevel is below 10, it means it is not worth your time and should result in printing the string "Meh. Hard pass." to the console.

var dangerLevel = 51
var saveTheDay = "Mission Accomplished. I read that like a book";
var badExcuse = "Path is to fuzzy!"

  if (dangerLevel >= 51)
  {
    console.log(badExcuse);
  }
  else if (dangerLevel <= 10)
  {
    console.log("Meh. Hard pass.");
  }
  else
  {
    console.log(saveTheDay);
  }
  
//Test Cases
var announcement = 'Never fear, the Courageous Curly Bracket is here!';
var excuse = 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.';
// assessSituation(99, announcement, excuse) > Should print - 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.'
//assessSituation(21, announcement, excuse) > should print - 'Never fear, the Courageous Curly Bracket is here!'
//assessSituation(3, announcement, excuse) > should print - "Meh. Hard pass."

var dangerLevel = 3

if (dangerLevel >= 51)
{
  console.log(excuse);
}
else if (dangerLevel <= 10)
{
  console.log("Meh. Hard pass.");
}
else
{
  console.log(announcement);
}


  
  
// Declare a new variable - scaryMonster - assigned to an Object with the following key/values
//   - name (string)
//   - smell (string)
//   - weight (integer)
//   - citiesDestroyed (array)
//   - luckyNumbers (array)
//   - address (object with following key/values: number , street , state, zip)

  var scaryMonster = 
    {
      name: "Hairy Beast",
      smell: "Soap",
      weight: 350,
      citiesDestroyed: ["London", "San Diego", "Denver", "New York"],
      luckyNumbers: [2, 55, 74], 
      address = 
      {
      number: 1111,
      street: "Lucky St.",
      state: "Colorado", 
      zip: "12345"
      }
    }

// Create a new class called SuperHero
// - Your class should have the following DYNAMIC values
//   - name 
//   - superpower
//   - age 
// - Your class should have the following STATIC values
//   - archNemesis, assigned to "The Syntax Error"
//   - powerLevel = 100
//   - energyLevel = 50 

// - Create the following class methods
//   - sayName, should print the hero's name to the console
//   - maximizeEnergy, should update the energyLevel to 1000
//   - gainPower, should take an argument of a number and INCREASE the powerLevel by that number

// - Create 2 instances of your SuperHero class

class superHero
{
  constructor (name, superPower, age, archNemesis, powerLevel, energyLevel)
  {
    this.name = name;
    this.superPower = superPower;
    this.age = age;
    this.archNemesis = "The Syntax Error";
    this.powerLevel = 100;
    this.energyLevel = 50;

  }
  sayName ()
  {
    console.log(this.name);
  }

  maximizeEnergy(newEnergy)
  {
    this.energyLevel = newEnergy;
  }
  gainPower(powerIncrease)
  {
    var newPowerLevel = this.powerLevel + powerIncrease;
    this.powerLevel = newPowerLevel;
  }
}
var boySuperHero = new superHero("Gravios", "Super Strength", 52);
var girlSuperHero = new superHero("Femme Fatale", "vampire", 5000);

console.log(boySuperHero);
console.log(girlSuperHero);
boySuperHero.sayName();

boySuperHero.maximizeEnergy(1000);
console.log(boySuperHero);
console.log(girlSuperHero.powerLevel);
girlSuperHero.gainPower(15);
console.log(girlSuperHero.powerLevel);
girlSuperHero.sayName();

// Reflection
// What parts were most difficult about this exerise?
Methods are the most difficult parts for me.  
// What parts felt most comfortable to you?
assigning variables and properties and arguments.  I even feel comfortable with if statements.  
// What skills do you need to continue to practice before starting Mod 1?
I need a lot more practice with methods within an object - telling the object to do something. I am very slow.  
