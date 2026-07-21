// function saymyname(){
//     console.log('b');
//     console.log('a');
//     console.log('a');
//     console.log('l');
//     console.log('a');
// }
// saymyname()
// function add2no(no1 ,no2){ //these are parameters
//     console.log( no1 + no2);//arguments
    
// }
// add2no(3,4)
// saymyname() 
//     function add2no(no1 ,no2){
//     // let result =no1+no2
//     // return result
//     return no1 +no2
// }
// const result =add2no(3,5)
// console.log("result:",result);

function loginmsg(username){ //usrname="sam"-ye default value hojayega
    if(undefined){ //!username--ye bhi use kr skte sam h
        console.log("please enter a username");
        return 
        
    }
    return `${username} just loggeed in`
}
console.log(loginmsg("hehe"));

function calculatecartprice(val1, val2, ...num1){
    return num1
}
console.log(calculatecartprice(200,400,500,2000));

const user={
    username:"baalahuvro",
    price:199
}
function handleobject(anyobject){
    console.log(`username is ${anyobject.username} nd price is ${anyobject.price}`);
    
}
handleobject({
    username:"sam",
    price:200
})

const mynewarray =[20, 300, 400, 600]
function returnsecondvalue(getarray){
    return getarray[1]
}
// console.log(returnsecondvalue(mynewarray));
console.log(returnsecondvalue([200,2001,2932]));
