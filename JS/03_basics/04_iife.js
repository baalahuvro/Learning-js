// immediately invoked function expressions--- global scope ke pollution se dikkt hoti hai isliye we use it
(function chai(){
    //named iife
    console.log("db connected");
    
})(); // do iife likhne ke liye this semicolong is necessary
// console.log(chai())
((name) => {
    console.log("DB Connected Two");
})("baala");  
