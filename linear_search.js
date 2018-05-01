

// Release 0
console.log("Linear Search")

let linearSearch = (target, values) => {
  //write your code here
  let match = false
  for(let i=0;i<values.length;i++){
    if(values[i] === target){
      match =true
      return values.indexOf(values[i])
    }
    
  }
  if(match === false){
    return -1
  }

}

let random_numbers = [ 6, 29, 18, 2, 72, 19, 18, 10, 37 ];

console.log(linearSearch(18, random_numbers));
// 2
console.log(linearSearch(9, random_numbers));
// -1

