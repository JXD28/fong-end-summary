// var majorityElement = function(nums) {
//     var len = nums.length
//     var len1 = Math.floor(len/2)
//     console.log('len1',len1)
//     var obj ={}
//     for(let i =0;i<len;i++){
//         obj[nums[i]]?++obj[nums[i]]:obj[nums[i]]=1
//     }
//     for( key in obj){
//         if(obj[key]>len1){
//             return key
//         }
//     }

// }
var majorityElement = function(nums) {
    var len = nums.length
    var len1 = Math.floor(len/2)
    var obj ={}
    for(let i =0;i<len;i++){
        // obj[nums[i]]?++obj[nums[i]]:obj[nums[i]]=1
        obj[nums[i]] = (~~obj[nums[i]])+1
    }
    return obj
    // for( key in obj){
    //     if(obj[key]>len1){
    //         return key
    //     }
    // }

}

var result = majorityElement([1, 2, 3, 2, 2, 2, 5, 4, 2])
console.log(result)