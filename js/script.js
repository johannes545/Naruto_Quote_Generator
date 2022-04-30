/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

quotes = [
  {
    quote: "living in this acursed world, there is merely pain, suffering and futility",
    source: "Madara",
  },
  {
    quote: "existence is nothing but a illusion. one mans fantasy, is another mans reality",
    source: "Itachi Uchiha",
  },
  {
    quote: "Give up, on trying to make me give up",
    source: "Naruto"
  },
  {
    quote: "MY PAIN IS FAR GREATER THAN YOURS",
    source: "Nagato",
  },
  {
    quote: "people are born to be winners, destiny always prevails",
    source: "Neeji"
  },
  {
    quote: "Believe it!",
    source: "Naruto"
  },
  {
    quote: "Those who do not understand true pain, can never understand true peace",
    source: "Nagato"
  },
  {
    quote: "The true meassure of a shinobi is not how he lived, but how he dies",
    source: "Jiraya",
  },
  {
    quote: "Those who break the rules are scum... But, those who abandon their friends are worse than scum",
    source: "Kakashi"
  },
]

/***
 * `getRandomQuote` function
***/
// brug et while loop til at få den til at kører for evigt. lav en værdig i while loopet som bliver kaldt "quote" og den skal sættes til quotes[i], så skal jeg tage et tilfældigt nummer mellem 1 og 6 også display quote og author i en template literal string.
function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber]
}


/***
 * `printQuote` function
***/
function printQuote() {
  let result = getRandomQuote();
  let message = "<p class='quote'>" + result.quote + "</p>" + "<p class='source'>" + result.source + "</p>";
  document.getElementById('quote-box').innerHTML = message;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);