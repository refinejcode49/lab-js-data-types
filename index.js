/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string
const stringConcatenated = s1 + " " + s2 + " " + s3 + " " + s4 + " " + s5 + " " + s3 + " " + s2 + " " + s1 + " " + s4;

// Print out the concatenated string
console.log(stringConcatenated);



/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
const lastPart1 = part1.slice(0, 3) + part1.slice(-1).toUpperCase();
const lastPart2 = part2.slice(0, 5) + part2.slice(-1).toUpperCase();
// Print the cameLtaiL-formatted string
console.log(lastPart1 + lastPart2);



/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)
const billWithTax = billTotal + (billTotal * (15 / 100));

// Print out the tipAmount
console.log(billWithTax);



/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
//Math.floor(Math.random() * (max - min + 1)) + min;


// Print the generated random number



/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b; // => false

const expression2 = a || b; // => true

const expression3 = !a && b; // NOTtrue AND false => false

const expression4 = !(a && b); // NOT(false) => true

const expression5 = !a || !b; // NOTtrue OR NOTfalse false OR true => true

const expression6 = !(a || b); // NOT(true or false) => false

const expression7 = a && a; // => true