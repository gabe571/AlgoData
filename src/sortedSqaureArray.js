//Input: nums = [-4,-1,0,3,10]
//Output: [0,1,9,16,100]
//Explanation: After squaring, the array becomes [16,1,0,9,100].
//After sorting, it becomes [0,1,9,16,100].

var sortedSquares = function(a){
    for (let i =0; i < a.length; i++) { //squaring each index
        A[i] = A[i] * A[i];
    }
    const sortedIndex = (a,b) => { //sort by ascending order
        return a - b
    }
    return a.sort(sortedIndex);  //returns [4,9,9,49,121]
};

//two pointer

var sortedSquares = function(nums) {
    // set up new array to be retutned
    // set up our two pointers
      const result = new Array(nums.length);
      let left = 0 
      let right = nums.length - 1;
      //our loop thru to compare our two numbers and have them squared
      for (let i = nums.length - 1; i >= 0; i--) {
          if (Math.abs(nums[left]) < Math.abs(nums[right])) {
              result[i] = nums[right] ** 2
              right--;
          } else {
              result[i] = nums[left] ** 2
              left++;
          }
      }
      //return squared results in ascending order
      return result;
  };