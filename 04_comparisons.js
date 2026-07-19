console.log(null>0);
console.log(null==0);
console.log(null<=0);
console.log(undefined>0);
console.log(undefined<=0);
console.log(undefined==0);
console.log(undefined==null);
// avoid to use these types of comparisons, they are confusing and can lead to unexpected results
//=== is strict comparison operator, it checks for both value and type equality
