// 一个长度为n-1的递增排序数组中的所有数字都是唯一的，
// 并且每个数字都在范围0～n-1之内。在范围0～n-1内的n个数字中有且只有一个数字不在该数组中，请找出这个数字。



// 示例 1:

// 输入: [0,1,3]
// 输出: 2

// 示例 2:

// 输入: [0,1,2,3,4,5,6,7,9]
// 输出: 8

//当递归函数有return时，在递归的地方也要return，不然永远返回的是undefined
var missingNumber = function (nums) {
    function search(left, right) {
        if (left === right) {
            if(left === nums[left]){
                return nums[left]+1
            }
            return nums[left] - 1
        }
        var mid = Math.floor((left + right) / 2)
        if (mid === nums[mid]) {
            return search(mid + 1, right)
        } else {
            return search(0, mid )
        }
    }
    return search(0, nums.length - 1)
}
var nums = [ 1, 2]
var result = missingNumber(nums)

console.log(result)