//finding sum of array
function simpleArraySum(ar) {
    var count = 0;
    for (var i = 0; i < ar.length; i++) {
      count += ar[i];
    }
    return count;
}

simpleArraySum([1,2,3,4,5,6])

//using reduce 

const numbers = [1,2,3,4]

const sum = numbers.reduce((accumlator, currentValue) => {
  return accumlator + currentValue;
}, 0);

sum