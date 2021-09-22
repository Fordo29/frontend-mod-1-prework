// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
function buildABear(name, age, fur, clothes, specialPower) //buildABear is the class name and (items listed in the parenthesis are parameters.)
{
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`; //This is the greeting property that is a string that interpolates a name from another variable
  var demographics = [name, age]; // dynamic properties name and age.
  var powerSaying = "Did you know that I can " + specialPower + " ?"; //This is a property that strings together with concatenation a dynamic variable.
  var builtBear = {  //This is a property of an object that is another object with properties.  This object lists the dynamic properties of the bear. 
    basicInfo: demographics,
    clothes: clothes,
    exterior: fur,
    cost: 49.99,
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    isCuddly: true,
  };

  return builtBear //This method will show the properies of the completed bear
}

buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares'); 
//     basicInfo: name: Fluffy, age: 4 
//     clothes: ['pants', 'jorts', 'tanktop'],
//     exterior: brown,
//     cost: 49.99,
//     sayings: [`Hey partner! My name is Fluffy - will you be my friend?!`, "Did you know that I can give you nightmares?", "Goodnight my friend!"],
//     isCuddly: true,
      
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in'); 
//     basicInfo: name: Sleepy, age: 2
//     clothes: ['pajamas', 'sleeping cap'],
//     exterior: purple,
//     cost: 49.99,
//     sayings: [`Hey partner! My name is Sleepy - will you be my friend?!`, "Did you know that I can sleeping cap?", "Goodnight my friend!"],
//     isCuddly: true,

//FizzBuzz
function fizzBuzz(num1, num2, range) //fizzBuzz is the class name (items in the parathesis are parameters)
{ 
  for (var i = 0; i <= range; i++) //This lists out our loop - starts at 0 and goes to range listed in the argument and increments up by one.
  {
    if (i % num1 === 0 && i % num2 === 0) // Cycles through the loop following these if statements
    {
      console.log('fizzbuzz'); // If the conditions are met, the number will be replaced with this 'fizzbuzz'. 
    } 
    else if (i % num1 === 0) //If the condition is is not met above the loop continues here.
    {
      console.log('fizz');// if the condition is met here, the number will be replaced with 'fizz'
    } 
    else if (i % num2 === 0)//if the condition for the loop on a number is not met in the 2 previous conditions it continues here. 
    {
      console.log('buzz'); //if the condition is met here, the number will be replaced with the word 'buzz'.
    } else {
      console.log(i); //If none of the conditions are met while proceeding through the loop, the number will be displayed. 
    }
  }
}

fizzBuzz(3, 5, 100); // these are the object instances with the list of arguments that are passed into our function above. 
fizzbuzz(5, 8, 400);
