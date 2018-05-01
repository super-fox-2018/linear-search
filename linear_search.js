'use strict'

// Release 0
console.log("Linear Search")
let linearSearch = (target, values) => {
  //write your code here
  for(let a=0; a<=values.length-1; a++){
    if(values[a]===target ){
      return a;
    }
    
    if(a === values.length-1){
      return a - values.length;
    }
  }
}

let random_numbers = [ 6, 29, 18, 2, 72, 19, 18, 10, 37 ];

console.log(linearSearch(18, random_numbers));
// 2
console.log(linearSearch(9, random_numbers));
// -1

// Release 1
console.log("Global Linear Search")
let globalLinearSearch = (target, values) => {
  //write your code here
  var disp = [];
  for(let a=0; a<=values.length-1; a++){
    if(values[a]===target ){
      disp.push(a) ;
    }
  }
  return disp;
}

let banana_arr = "banana".split("");
// ["b", "a", "n", "a", "n", "a"]
console.log(globalLinearSearch("a", banana_arr));
// [ 1, 3, 5 ]

// module.exports = {
//   linearSearch,
//   globalLinearSearch
// }
