// calling a declared function

//console.log(future());
/*let MYFUNCTION = future;
console.log(MYFUNCTION());

function future() {
    return "You'll never have flying cars";
}


// arrow functions


// way 1:
function square(value) {
  // do stuff
  return value * value;
}
console.log(square(3));

// way 2 
let square = (value) => { return value * value; }
console.log(square(3));

// way 3
let square = (value) => value * value;
console.log(square(3));

// way 4
let square = value => value * value;
console.log(square(3));



// callstack
function c() {
    return "ok";
}
function b() { 
    return c();
}
function a() {
    return b();
}

console.log(a());



function foo(a, b) {
    console.log(a);
    if(b != undefined) {
        console.log(b);
    }
}

//foo("ok", "then");
foo("ok");



// closures
function wrapValue(n) {
    let local = n;
    return () => local;
}
let myFunction = wrapValue(2);
//console.log(myFunction()

function multiplier(factor) {
  return number => number * factor;
}


let twice = multiplier(2);
console.log(twice(5));

function printZeroPaddedWithLabel(number, label) {
    let numberString = String(number);
    while (numberString.length < 3) {
    numberString = "0" + numberString;
    }
    console.log(`${numberString} ${label}`);
}

function printFarmInventory(cows, chickens, pigs, horses) {
    printZeroPaddedWithLabel(cows, 'Cows');
    printZeroPaddedWithLabel(chickens, 'Chickens');
    printZeroPaddedWithLabel(pigs, 'Pigs');
    printZeroPaddedWithLabel(horses, 'Horses');
}
printFarmInventory(7, 11, 10, 4);




let myCounter = 20;
myCounter++;
function foo(text) {
    console.log(`${text} -- bar!!`);
    myCounter += 1;
}

foo(`${myCounter}`);
myCounter += 2;
foo(`${myCounter}`);



//function square(value) {
//    do stuff
//    return value * value;
//  }
//  console.log(square(3))




// optional arguments

function print(name, age) {
    if( age === undefined ) {
        console.log(`${name} is unknown years old`);
    }
    else {
        console.log(`${name} is ${age} years old`);
    }
}

print('Josh');
print('Connor', 15);
*/


let x = 20;

function test(value) {
    x+=15;
    return () => console.log(value);
}


test(x);

func1();
let func2 = test(x);
func2();