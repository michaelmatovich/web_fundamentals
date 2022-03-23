/* Variables and datatypes in js

Types of data: Primitive datatypes
Strings - strings of characters
Numbers - numbers are #'s no matter if there is a decimal or not
Booleans - true or false

Rules of naming variable
1. No spaces
2. No dashes
3. Cannot start with a number

The accepted casing of JS is camel case

*/

var Stuffy = "Koala Bear";
var age = 34;
var percentage = 35.9;
var isRaining = true;

// For Loop
// 1. Sentry    2. Starting Point   3. Ending Point 4. Increments

for (var i = 1; i < 101; i++)
console.log(i);




function getTotal(arrayOfNumbers) {
    
    var sum = arrayOfNumbers[0];
    
    for(var i=0; i<arrayOfNumbers.length; i++) {
    sum += arrayOfNumbers[i];
    console.log("the current sum is: " + sum); 
    }
    
    console.log("the total is: " + sum);
    
}
    
getTotal([1, 3, 5]);

