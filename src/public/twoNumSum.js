//double for loop to return sum of two numbers
//example [2,7,11,15]

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

// return the indices of two numbers too equal sum using map
var twoSum = function(nums, target) {
    let map = new Map;
    for (var i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i]
        }
        map.set(nums[i], i);
    }
}

//return indices by using a storage(comparing)
var twoSum = function(nums, target) {
    let storage = {};
    
    for(let [index, num] of nums.entries()){
        if(storage[num] !== undefined) return [storage[num], index];
        storage[target - num] = index;
    }
}