console.log("chapter2 test app");
console.log("-----------------------");

// useless statement
//5 + 5;

// Bindings
// valid binding/variable
//let caught = 5 + 5;
//let caught = 5 + 3;
//console.log(caught);

// undefined variable
//let value;
//console.log(value);

// invalid binding
//let var = 5 * 5;
//let const = 5;
//let 43623456jhfaslkdj5_fjkdljalsdkj$lkjflk = 5;

// constant binding
/*const OFF = 0;
const ON = 1;

let value = ON;
value = OFF;
if(value == OFF) {
    console.log("It's OFF");
}
else {
    console.log("It's ON");
}*/


// The Environment
// Node.js documentation provides a list of functions/bindings available in the Node.js enviornment
// https://nodejs.org/dist/latest-v13.x/docs/api/
// e.g.: https://nodejs.org/dist/latest-v13.x/docs/api/process.html#process_process_arch
console.log(process.arch);
// e.g.: https://nodejs.org/dist/latest-v13.x/docs/api/process.html#process_process_cwd
console.log(process.cwd());

// Return values
//console.log(Math.min(2, 4));

// Control Flow
/*let theNumber = Number(5);
console.log(typeof(theNumber));
console.log("Your number is the square root of " + theNumber * theNumber);
console.log("Your number is the square root of " + 25);
console.log("Your number is the square root of " + "25");
console.log("Your number is the square root of 25");
//console.log("Your number " + theNumber + " is the square root of " + theNumber * theNumber);
*/

// Conditional Execution
/*let theNumber = 5;
if (!Number.isNaN(theNumber)) {
    console.log("your number is not NaN");
}
// Boolean conditional execution
let return_value = Number.isNaN(theNumber);
console.log(return_value);
if (return_value) {
    console.log("your number is NaN");
}
else {
    console.log("your number is NOT NaN");
}
*/

/*// numeric conditional execution
let theNumber = 2;
if(theNumber < 3) {
    console.log("Small");
}
else if(theNumber < 6) {
    console.log("Medium");
}
else {
    console.log("Huge");
}*/

// while loops
/*let number = 0;
while(number <= 20) {
    console.log(number);
    number+=1;
}
console.log("done " + number);
*/

// do-while loops
/*let number = 0;
do {
  console.log(number);
  number++;
} while(number <= 20);
console.log("done");
*/


// for loop
/*let number =0;
for(let number2=0; number2 <= 20; number2 += 1) {
    console.log(number2);
}
console.log("done " + number2);*/

// for loop with a counter
//let result = 1;
//for(let counter = 0; counter < 4; counter++) {
//    result *= 2;
//}
// result: 16
// counter: 4
// as the do-while loop
//let counter=0;
//do {
//    result *= 2;
//    counter++;
//} while(counter < 4);
//console.log(result);

// for loop with a break statement
//for(let current=20; ;current += 1) {
//    if(current % 7 == 0) {
//        console.log(current);
//        break;
//    }
//}


// while-loop with break statement
//let counter = 0;
//while(true) {
//    if(counter == 2) {
//        break;
//    }
//    console.log("hello");
//    counter++;
//}

/*let variable = 5;
switch(variable) {
    case 0:
        console.log("it's zero");
        break;
    case 1:
        console.log("it's one");
        break;
    case 2:
        console.log("it's two");
        break;
    case 5:
        console.log("it's five");
        break;
    case 4:
        console.log("it's four");
        break;
    }*/