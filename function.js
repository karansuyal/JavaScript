//////
function myName(){
console.log("K");
console.log("A");
console.log("R");
console.log("A");
console.log("N");
}
myName()


///////
function addTwoNumbers(num1,num2){ //parameters
    console.log(num1 + num2);

}
addTwoNumbers(7,8)//arguments



///////
function calculateCartPrice(...num1){ //(...)Rest operator or (...)spreat operator
    return num1
}

console.log(calculateCartPrice(200,400,600,788,4566))