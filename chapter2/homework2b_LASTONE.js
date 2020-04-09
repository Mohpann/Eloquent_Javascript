


/* problem 3: the grid
Given a height and a width, print out an increasing grid of numbers starting from 1, e.g.:
let width = 5;
let height = 5;

should display:
1 2 3 4 5
6 7 8 9 10
11 12 13 14 15
16 17 18 19 20
21 22 23 24 25 

Another example:
let width = 10;
let height = 2;

should display:
1 2 3 4 5 6 7 8 9 10
11 12 13 14 15 16 17 18 19 20

bonus points if you can align the numbers as follows:
 1  2  3  4  5  6  7  8  9 10
11 12 13 14 15 16 17 18 19 20

1 2 3 4 5
6 7 8 9 10
11 12 13 14 15
16 17 18 19 20
21 22 23 24 25
26 27 28 29 30
31 32 33 34 35
36 37 38 39 40
41 42 43 44 45
46 47 48 49 50

*/

let width = 5;
let height = 5;
let number = 0;
let text = "";

for (let i = 1; i <= height; i++) {
    for(let j = 1; j <= width; j++){
        number += 1;
        if (number <= 9) {
            text += " ";
        }
        text += " "
        text += number;   
    }
    text += "\n";
}
console.log(text);