/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet //This is stating the class
{
  constructor(author, content, timeStamp, numberOfLikes, comments)// (Items listed in the parenthesis are parameters.)
  {
    this.author = author; //This are properties and the group of data (properties) are a "state"
    this.content = content;
    this.timeStamp = timeStamp;
    this.numberOfLikes = numberOfLikes;
    this.comments = comments;
  }
  //Methods are described here  - In this method (function), I am causing the number of likes to increment up.
  incrementnumberOfLikes()
  {
    this.numberOfLikes++;
  }
    //Methods are described here  - In this method (function), I am adding a new comment by pushing it on to the array of comments.
  addComment(newComment)
  {
    this.comments.push(newComment);
  }
};
//These are my Object instances where I enter in the unique data attributed to this instance. (Items in the parathesis are arguments.)
var babyTweet = new Tweet("Heather Whether", "Look my baby is so cute", "7:13 PM 06/23/21", 34, ["Love it", "Best Baby Ever!", "I could just Squeeze him!"]);
var cutePuppyTweet = new Tweet("John Smith", "My new Puppy George tried to pee on an ant farm.", "4:37 PM 08/2/21", 12, ["He is a mess", "What a cutie!", "Bet he won't do that again"]);
var jokeTweet = new Tweet("Kimberly Lake", "Money Talks: Mine always says goodbye", "1:49 PM 10/2/20", 28, ["LOL!", "Ha ha ha!", "Did you at least get a hello?"]);

console.log(babyTweet); // log the code prior to introducing the Methods.
console.log(cutePuppyTweet);
console.log(jokeTweet);

babyTweet.incrementnumberOfLikes(); //This is where the likes increment by 1
console.log(babyTweet);

cutePuppyTweet.addComment("What a silly dog!") //This is adding a new comment to the array of comments.
console.log(cutePuppyTweet);
