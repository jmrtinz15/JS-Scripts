// Sum all numbers in a range

function sumAll(arr) {
    let startnum = arr[1];
    let endnum = arr[0];

    // Find total count of numbers in a range
    let numcount  = Math.abs(startnum - endnum) +1;

    // Forumula for calculating the sum of a continous range 
    const sum = ((startnum + endnum) * numcount) / 2; 

    return sum;
  }
  
  console.log(sumAll([1, 4]));
 
