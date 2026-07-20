const marvel_heroes= ["thor", "ironman", "spiderman"]
const dc = ["superman", "flash","batman"]
// marvel_heroes.push(dc)
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

// marvel_heroes.concat(dc)
// console.log(marvel_heroes);
const allhero= marvel_heroes.concat(dc)
console.log(allhero);

const all_new_hero= [...marvel_heroes,...dc] //glass lo aurm gira do == spread
console.log(all_new_hero);
const another_arr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_arr= another_arr.flat(2)
console.log(real_another_arr);



console.log(Array.isArray["baala"]);
console.log(Array.from("baala"));
console.log(Array.from({name:"baala"})); // interesting


let score1 =100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));
// after this read mdm of is of from(of arraya)






