function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length; j++) {
      if (i == j) {
        continue;
      } else if (array[i] + array[j] === target) {
        return true;
      }
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  hasTargetSum(array, target) {
  for (start = 0 ; end = array.length-1 ; step = 1){
    for (start = 0 ;end =  array.length ; step = 1 ){
      if(step is equal means (i = j)){
        pass
      }
      else{
        return true
      }
    }
  }
  return false when no answer is right for any step
}
*/

/*
  Add written explanation of your solution here
  we created nested for loop and to fo inside array two time to get two value
  if they are in same position we pass  , else if first value plus second value equal to target
  return true , outside the for loops create return false if it didint return true
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
