// singleton
// object literals



//object literals
const jsuser={
    name: "karan",
    "full Name": "Karan Suyal",
    age:18,
    location: "Rudrapur",
    email: "suyalkaran441@gmail.com",
    isLoggedIn: false
}

//print
// console.log(jsuser.name)
// console.log(jsuser.email)
// console.log(jsuser["full Name"])

//change
jsuser.email = "karan@chat.gpt"
Object.freeze(jsuser)  // do not change user
jsuser.email="karan@google.com"
// console.log(jsuser.email)



// Object Dstructure

const course ={
    coursename: "Bca",
    price:"100000",
    courseInstructor:"KS"
}

const {courseInstructor: instructor} = course//destructure
console.log(instructor);




//some uses in react

// const navbar =({company}) => {

// }
// navbar(company = "karan")






