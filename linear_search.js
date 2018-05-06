'use strict'

// Release 0
console.log("Linear Search")
let linearSearch = (target, values) => {
  let targetAppearance = 0;
  for(let z = 0; z < values.length; z++){
    if(values[z] === target){
      targetAppearance++
    }
  }
  if(targetAppearance === 0){
    return -1
  }
  return targetAppearance;
  //write your code here
}

let random_numbers = [ 6, 29, 18, 2, 72, 19, 18, 10, 37 ];

console.log(linearSearch(18, random_numbers));
// 2
console.log(linearSearch(9, random_numbers));
// -1

// Release 1
console.log("Global Linear Search")
let globalLinearSearch = (target, values) => {
  let arrayOfTarget = [];
  for(let z = 0; z < values.length; z++){
    if(values[z].toLowerCase() === target.toLowerCase()){
      arrayOfTarget.push(z);
    }
  }return arrayOfTarget;
  //write your code here
}

let banana_arr = "banana".split("");
// ["b", "a", "n", "a", "n", "a"]
console.log(globalLinearSearch("a", banana_arr));
// [ 1, 3, 5 ]

module.exports = {
  linearSearch,
  globalLinearSearch
}
