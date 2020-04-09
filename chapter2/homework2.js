/* problem 1: print out a list of factorial values for the numbers 1 through 10

1!
2!
3!
4!


1
2
6
24
....
*/

n=5
return_value=120
counter=5
function factorial(n) {
  let return_value = 1;
  // factorial(n) = 1 * 2 * 3 * ... * n
  for(let counter=1; counter <= n; counter++) {
    return_value = counter * return_value;
  }
  return return_value;
}
function factorial_recursive(n) {
  if (n==0 || n==1)
    return 1;
  return factorial_recursive (n-1) * n; 
  }
/*
Problem 1 solution:
for (let counter = 1; counter <= 10; counter++){
  console.log(factorial(counter));
}*/

// remember that the binomial coefficient is (n choose k) = n! / (k! * (n-k)!)
function binomial_coefficient(n, k) {
  return factorial(n) / (factorial(k) * factorial(n-k));
}

/* problem 2: print out the first 6 rows of Pascal's triangle


0 choose 0 = 1

1 choose 0 = 1
1 choose 1 = 1

2 choose 0 = 1
2 choose 1 = 2
2 choose 2 = 1


3 choose 0 = 1
3 choose 1 = 3
3 choose 2 = 3
3 choose 3 = 1

(x+y)^0 = 1
(x+y) = (x+y) = 1x + 1y
(x+y)² = (x+y)(x+y) = 1x² + 2xy + 1y²
(x+y)^3 = (x+y)(x+y)(x+y) = (x² + 2xy + y²)(x+y) = 1x^3 + 3x²y + 3xy² + 1y^3
  
      1
     1 1
    1 2 1  
   1 3 3 1
  1 4 6 4 1
1 5 10 10 5 1
*/

let s = ""
for(let n=0; n < 6; n++) {
  s = "";
  for(let k=0; k <= n; k++) {
    s += binomial_coefficient(n,k) + " ";    
  }
  console.log(s);
}
