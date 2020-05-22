



// var findRepeatNumber = function(nums) {
//     var list = []
//     var repeat = []
//     for(var i=0;i<nums.length;i++){
//         if(!list.find((item)=>item === nums[i])){
//             list.push(nums[i])
//         }else{
//             repeat.push(nums[i])
//         }
//     }
//     return repeat[0]
// }

//哈希表
var findRepeatNumber = function(nums){
    var list ={}
    for(var i =0;i<nums.length;i++){
        list[nums[i]]?(list[nums[i]]++):(list[nums[i]]=1)
    }
    for(let key in list){
        if(list[key]>=2){
            return key
        }
    }
}

var nums = [1,22,33,4,5,2,3,3]

var result = findRepeatNumber(nums)

console.log(result)
