//double for loop to return sum of two numbers
//example [2,7,11,15]

const numbers = [2,7,11,15]

var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++){
        const firstNum = nums[i];
        for(let j = i + 1; j < nums.length; j++){
            const secondNum = nums[j];
            if(firstNum + secondNum === target){
                return [firstNum, secondNum]
            }
        }
    }
      return [];
  };

