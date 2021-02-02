//finding sum of array
function simpleArraySum(ar) {
    var count = 0;
    for (var i = 0; i < ar.length; i++) {
      count += ar[i];
    }
    return count;
}

simpleArraySum([1,2,3,4,5,6])

//using reduce method
// a = accumulator, c = currentValue
// a = 0, c = 1 => 1
// a = 1, c = 2 => 3
// a = 3, c = 3 => 6
// a = 6, c = 4 => 10


const numbers = [1,2,3,4]

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

sum