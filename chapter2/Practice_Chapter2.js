

/*
let hashtag = "#"
for(let counter = 0; counter < 7; counter = counter + 1)    {
    console.log(hashtag);
    hashtag = hashtag + "#";
}
*/
// if value % 3 == 0 then console.log "fizz"
// if value % 5 == 0 then console.log "buzz"
// if value divisible by 3 and 5 then console.log "fizzbuzz"

/*
for (let value = 1; value < 101 ; value = value + 1) {
    if (value % 3 == 0 && value % 5 == 0) {
        console.log("fizzbuzz");
    }    
    else if (value % 3 == 0) {
        console.log("fizz");
    } 
    else if (value % 5 == 0) {
        console.log("buzz");
    }
    else {
        console.log(value);
    }
}
*/

// Chess"bored"


let char = "";
let size = 8;
 
for (let y = 0; y < size; y++) {
    for (let x = 0; x< size; x++) {
        if ((x+y) % 2 == 0)
        char += " ";
    else
        char += "#";
    }
    char += "\n";
}
console.log(char);

let test = "Hello there";
console.log(test);


