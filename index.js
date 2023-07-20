function add(){
}

function subtract(m,n){
    return m - n;
}
subtract(10-6)

function divide(i,j){
    return i / j;
}
divide(5,2);

function multiply(x,y){
    return x * y;
}
multiply(6,6);

function add(a,b){
 return a + b;
}
add(1000, 78);

function increment(n){
    n++;
    return n;
}
increment(9);

function decrement(a){
    a--;
    return a;
}
decrement(7);

function makeInt(p){
    return parseInt(p);
}
console.log(makeInt("6", 10));

function preserveDecimal(n){
    return parseFloat(n)
}
preserveDecimal("3.14");

function makeInt(n, targetBase) {
    return parseInt(n, targetBase);
  }
  
  // Example usage:
  const base10Number = "9000";
  const targetBase = 9; // Set the desired target base (e.g., base 9)
  
  const result = makeInt(base10Number, targetBase);
  console.log(result); // Output: 0