///////
const tinderUser ={}

tinderUser.id ="123abc"
tinderUser.name ="karan"
tinderUser.isLoggedIn =false

console.log(tinderUser);

///////
const ragularUser ={
    email:"karan@gamil.com",
    fullName:{
        userfullName:{
            firstName:"karan",
            lastName:"suyal"
        }
    }
}

console.log(ragularUser.fullName.userfullName.firstName)

///////marge
const obj1 ={1: "a",2:"b"}
const obj2 ={3: "c",4:"d"}


// const obj3 =Object.assign({},obj1,obj2)
//second method
const obj3={...obj1,...obj2}
console.log(obj3);

