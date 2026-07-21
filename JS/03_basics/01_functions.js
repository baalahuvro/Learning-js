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

