//Stack(copy),  Heap(Reference)
//stack is a primitive and heap is non primitive


//primitive data type
let myName = "karan";

let anotherName = myName;

anotherName="karan suyal";


console.log(myName);
console.log(anotherName);

//non primitive data type
let userOne={
    name:"karan",
    age:20
}

let userTwo=userOne;
userTwo.name="suyal";


console.log(userOne);
console.log(userTwo);
