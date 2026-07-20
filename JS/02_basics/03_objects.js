// singleton- jab literal ki trh declare krenge to ni bnega
//constructor se jb bnega to singletonn bnega

//object literals
// Object.create
const mysym = Symbol("key1");

const jsuser = {
    name: "baala",
    age: 21,
    [mysym]: "userkey1",
    location: "dhanbad",
    email: "balkrishnverma26@gmail.com",
    isloggedin: false,
    lastlogindays: ["monday", "sat"]
};

// console.log(jsuser.email);
// console.log(jsuser["email"]);
// console.log(jsuser["full name"]);
// console.log(jsuser[mysym]);

jsuser.email="baaalahuvro@gmail.com"
// console.log(jsuser.email);

// Object.freeze(jsuser)
jsuser.email="lol@gmail.com"
jsuser.greeting= function(){
    console.log(`hello js user, ${this.name}`);
    
}
console.log(jsuser.greeting());

