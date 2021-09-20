/*
In the exercises below, write your own code where indicated
to achieve the desired result.

Complete each task, using the Burrito class below as a starting point.

Make sure to run the file with node in your command line.
*/

// The burrito should also have a property called `toppings`. It should be assigned to
// the toppings parameter in the constructor.

// Below/outside of the class declaration, create 3 object instances of a burrito.
// The toppings argument should be an Array of Strings.

// The burrito class should have a method named `changeProtein`.
// This method should accept one argument, a String.
// The method should re-assign this.protein to the value that was passed in.

// Call the `changeProtein` method on a burrito, then log the burrito to verify
// that the protein has been changed.

// The burrito class should have a method named `addTopping`.
// This method should accept one argument, a String.
// The method should add a topping to the list of toppings held in state.

// Call the `addTopping` method on two burritos, then log the burritos to verify
// that the proteins have been changed.


//label class as Burrito.  Burrito is the Class name.
class Burrito
{
    constructor(protein, base, toppings) // (Items listed in the parenthesis are parameters.)
    {
        this.protein = protein; //This are properties and the group of data (properties) are a "state"
        this.base = base;
        this.toppings = toppings;
    }
    //Methods are described here  - In this method (function), I am changing the protein of the burrito..by assigning it a new value.
    changeProtein(newProtein)
    {
        this.protein = newProtein;
    }
    //this Method is allowing me to add a new topping to the burrito within the array.
    addTopping(newTopping)
    {
        this.toppings.push(newTopping);
    }
}

//These are Object instances.  This is where I put the details of the Protein, the base and the array of toppings on my burrito. (Items in the parathesis are arguments.)
var chickenBurr = new Burrito("Chicken", "Rice", ["Salsa", "Guacamole", "Lettuce"]);
var steakBurr = new Burrito("Steak", "Spanish Rice", ["Cheese", "Sour Cream", "Tomato"]);
var beanBurr = new Burrito("Beans", "Spanish Rice", ["Rice", "Cheese", "Salsa"]);

console.log(steakBurr); //logging the Steak burrito before I change the protein.
steakBurr.changeProtein("Chicken"); // passing the change protein into the argument and reassigning steak to chicken.
console.log(steakBurr); // This will now display chicken as the protein.

console.log(steakBurr);//this log and the following logs will show they have the same protein - but different base and toppings.
console.log(chickenBurr);

beanBurr.addTopping("Strawberry Jam"); //This line of code adds an additional topping (Strawberry Jam) to the array of toppings for the bean burrito.
chickenBurr.addTopping("Mayo"); //This line of code adds an additional topping (Mayo) to the array of toppings for the chicken burrito.

console.log(beanBurr); //These 2 lines of code log the results that the additional topping is showing
console.log(chickenBurr);
