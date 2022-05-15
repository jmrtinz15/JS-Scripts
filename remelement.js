//Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.

// var removeElement = function(nums, val) {

//     return nums.filter(num => num != val); //If the number in the array does not equal the value -> leave it in the array
  
// };
// console.log(removeElement([0,1,1,2], 1));

var removeElement = function(nums, val) {

    const newarr = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == val) {
           continue;
        } else {
            newarr.push(nums[i]);
        }
    }
  return newarr;
};
console.log(removeElement([3,2,2,3], 3));

