const user ={
    username: "baala",
    price:999,
    welcomemsg: function() {
        console.log(`${this.username} , welcome to website`);
        
    }
}

//user.welcomemsg()
// user.username= "sam"
// user.welcomemsg()
// console.log(this);
// function chai(){
//     let username ="ba ala"
//     console.log(this.username);
// }
// chai()
// const chai = () => {
//     let username ="baala"
//     console.log(this);
    
// }
// chai()

// const addtwo =(num1 , num2) => {
//     return num1 + num2
// }

// console.log(addtwo(3,4))
const addtwo = (num1, num2) => (num1 + num2); //implicit function me paranethesis no need
// const addtwo = (num1, num2) => ({username: "baala"});

console.log(addtwy(3, 5));
