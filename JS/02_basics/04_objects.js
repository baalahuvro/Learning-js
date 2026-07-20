// const tinderUser= new Object()//-singleton object
const tinderuser={} //non singleton obj
tinderuser.id= "123abc"
tinderuser.name="baala"
tinderuser.isloggedin= false

//console.log(tinderUser);
const regularuser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"balkrishn",
            lastname:"verma"
        }
    }
}
// console.log(regularuser.fullname.userfullname.firstname);
const obj1={1:"a" , 2:"b" ,}
const obj2={3:"a" , 4:"b" ,}
const obj4={5:"a", 6:"b "}
// const obj3={obj1,obj2}
// const obj3= Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2,...obj4}//this is the spread mthd use this
// console.log(obj3);
// const users={
//     user1:{
//         id:1,
//         email:"b@gmail.com"

//     }
    
// }
// console.log(users.user1.email);
// console.log(tinderuser);        
// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));
// console.log(tinderuser.hasOwnProperty('isloggedn')); 

const course ={
    coursename:"js learning",
    price:0,
    course_teacher:"hitesh sur"
}
// course.course_teacher
const {course_teacher} =course
console.log(course_teacher);
// {
//     "name":"baala",
//     "occupation":"student",
//     "college":"bit"
// }
[
    {},
    {},
    {},
]// use jason formatter



