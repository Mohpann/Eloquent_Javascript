/*
let value = "poopy";
console["log"](value);



let myArray = [1,2,3];
console.log(myArray[0]);


let myObject = {
  name: "foo"
};

console.log(myObject['name']);


function addEntry(events, squirrel) {
  journal.push({events, squirrel});
}

let journal = [];
let events = ["work", "home"];
let squirrel = false;


//journal.push({events, squirrel});
journal.push({
  events: events,
  squiirrel: squirrel
});


let joey = {
  name: "Joey"
};


joey.name = "JOEY";
joey.age = 15;
console.log(joey);




function max(numbers) {
  let result = -Infinity;
  for(let number of numbers) {
    if(number > result) result = number;
      return result;
  }
}

console.log(max([4, 1, 9, -2]));

// destructuring
function phi([n00, n01, n10, n11]) {
    return (n11 * n00 - n10 * n01) /
    Math.sqrt((n10 + n11) * (n00 + n01) *
    (n01 + n11) * (n00 + n10));
}
// same as
function phi(array_of_numbers) {
    let n00 = array_of_numbers[0];
    let n01 = array_of_numbers[1];
    let n10 = array_of_numbers[2];
    let n11 = array_of_numbers[3];
    
    return (n11 * n00 - n10 * n01) /
    Math.sqrt((n10 + n11) * (n00 + n01) *
    (n01 + n11) * (n00 + n10));
}


let arr = [20, 10, 4, 5, 10, 20];
console.log(phi(arr));





function range(start, end, step) {
    let array = [];
    if (step === undefined) {
        step = 1;
    }
    if (start < end) {
        for(let i = start; i <= end; i += step){
            array.push(i);
        }
    }
    if (start > end) {
        for(let i = start; i >= end; i += step) {
            array.push(i);
        }
    }
    return array;
}

let a = range(5, 2, -1);
let b = range(2, 10, 1);
console.log(a);
console.log(b);

function sum(numbers) {
    let result = 0;
    for (let j of numbers) {
      result += j;
    }
    return result;
  }
console.log(sum(range(1,10)));



let myObject = {
    "name": "Josh"
};

myObject.name = "Connor";
*/




/*
function reverseArray(array) {
    result = [];
    for (let item of array) {
      result.unshift(item);
    }
    return result;
  }
  
function reverseArray(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.unshift(array[i]);
  }  
return newArray;
}
*/


function reverseArrayUsingPush(array) {
  let newArray = []
  for (let i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}

function reverseArrayInPlace(array) {
  for (let i = 0; i < (array.length/2);i++) {
    let temp = array[i]; 
    array[i] = array[array.length - 1 - i]; 
    array[array.length - 1 - i] = temp;  
  }
  return array;
}

/*
console.log(reverseArrayUsingPush([11, 22, 33]));
console.log(reverseArrayUsingPush([-1, -2, -3]));



let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);

let numberArray = [11, 22, 33, -44];
reverseArrayInPlace(numberArray);
console.log(numberArray);


let arrayValue2 = [1, 2, 3];
let arrayValue3 = [8, 9, 10];

console.log(JSON.stringify(reverseArrayInPlace(arrayValue2)));
console.log(JSON.stringify(reverseArrayInPlace(arrayValue3)));
*/

function arrayToList(array) {
  let result = {};
  if (Array.isArray(array)) {
    let currListObject = result;
    for (let i of array) {
      let newListObject = {
      	value: i,
      	rest: null
      };
      if (typeof currListObject.rest === 'undefined') {
        result = newListObject;
      } else {
      	currListObject.rest = newListObject;
      }
      currListObject = newListObject;
    }
  }
  return result;
}

function listToArray(list) {
  let result = [];
  if (typeof list === 'undefined' || list.value === undefined || list.rest === undefined) {
    return result;
  } else {
    result.push(list.value);
    while (list.hasOwnProperty('rest') && list.rest !== null) {
      list = list.rest;
      if (list.hasOwnProperty('value')) {
      	result.push(list.value);
      }
    }
  }
  return result;
}

function prepend(element, list) {
  return {
    value: element,
    rest: list
  };
}

function nth(list, number) {
  return listToArray(list)[number];
}

//  console.log(arrayToList([1,2,3]));

//  console.log(listToArray(arrayToList([10,20,30])));

  console.log(prepend(10, prepend(20, null)));

  console.log(nth(arrayToList([10,20,30]), 1));