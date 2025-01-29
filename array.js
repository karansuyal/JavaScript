const myarray=[1,2,3,4,5]
console.log(myarray[0]);


//Array metheds

myarray.push(6)
myarray.push(7)
myarray.pop()

console.log(myarray.sort())


myarray.unshift(9)
myarray.shift()


console.log(myarray.includes(9));
console.log(myarray.includes(5));


const newarr =myarray.join()

console.log(myarray);
console.log(myarray);




//slice , splice

console.log("A",myarray);
const myn1 = myarray.slice(1,3)


console.log(myn1);
console.log("B",myarray);


const myn2 =myarray.splice(1,3)
console.log("c",myarray);
console.log(myarray);




