

/*
function min(value, value2) {
    if (value2 < value) {
        return value2;
    }
    else {
        return value;
    }
}
console.log(min(10,2));

function isEven(n) {
    if (n < 0) {
        return isEven(-n);
    }
    else if (n == 0) {
        return true;
    }
    else if (n == 1) {
        return false;
    }
    else {
        return isEven (n - 2);
    }
}
console.log(isEven(4));


let b_counter = 0
function countBs(string) {
    for (i = 0; i < string.length; i++)
    if (string[i] === "B") {
        b_counter += 1;
    } 
    return b_counter;
}
console.log(countBs("BBaB"));


function countBs_2(string) {
    return counterChar(string, "B");
}
console.log(countBs_2("BBAB"));


function counterChar(string, char) {
    let char_counter = 0;       
    for (i = 0; i < string.length; i++) {
        if (string[i] == char) {
            char_counter += 1;
        }
    }
    return char_counter;
}
console.log(counterChar("AAcA", "A"));
*/


// CH3 last homework
// we've seen with in Chapter 3 page 47, that we can define functions that capture variables/bindings
// this was shown with the "wrapValue(n)" function, that:
// 1. accepts a numeric value
// 2. returns a function, that takes no parameters and returns the original value when called.

// remember, that we can concatentate strings like this:
/*let string = "Hello";
let new_string = string + " Connor!";
// then "new_string" contains the old string concatenated with the new strings
console.log(new_string);
*/

//
// Write a program that defines function wrapString(str), which:
// 1. accepts a string parameter
// 2. returns a function, that takes one parameter and returns: the original value concatenated with the parameter

// Then use your new "wrapString" function, to create a function which can take a person's NAME, and return the string "Hello NAME!"

// You can check it by doing this:
// let helloGenerator = wrapString("Hello");
// let generatedString = helloGenerator("Connor");
// console.log(generatedString);
//
// and see "Hello Connor!" displayed

function wrapString(str) {
    let local = str;
    return () => local;
}
let wrap = wrapString("hello");
//console.log(wrap());

function helloMaker_2(who) {
    return (wrap() + " " + who)
}
console.log (helloMaker_2("josh"));
/*
function helloMaker(name) {
    let wrap = wrapString("Hello");
    let newWrap = wrap + name;
    return newWrap;
}

console.log(helloMaker("sir"));
*/