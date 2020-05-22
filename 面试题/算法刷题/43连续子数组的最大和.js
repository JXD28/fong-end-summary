/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if(nums.length === 0){
        return null
    }
    var sum = nums[0]
    var maxSum = nums[0]
    for(let i =1;i<nums.length;i++){
        sum = sum>0?sum +=nums[i]:nums[i]
        maxSum = sum>maxSum?sum:maxSum
    }
    return maxSum
}