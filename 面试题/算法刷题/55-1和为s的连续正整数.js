// 输入一个正整数 target ，输出所有和为 target 的连续正整数序列（至少含有两个数）。

// 序列内的数字由小到大排列，不同序列按照首个数字从小到大排列。



// 示例 1：

// 输入：target = 9
// 输出：[[2,3,4],[4,5]]

// 示例 2：

// 输入：target = 15
// 输出：[[1,2,3,4,5],[4,5,6],[7,8]]


//超时
// var findContinuousSequence = function (target) {
//     var max = Math.ceil(target / 2)
//     var ans = 0
//     var result = []
//     for (var i = 1; i <= max; ++i) {
//         var arr = []
//         for (var j = i; j <= max; ++j) {
//             ans = ans + j  
//             arr.push(j)
//             if(ans === target){
//                 result.push(arr)
//                 break
//             }
//         }
//         ans = 0
//         arr = []
//     }
//     return result
// }


var findContinuousSequence = function (target) {
    var max = Math.ceil(target / 2)
    var ans = 0
    var result = []
    for (var i = 1; i <= max; ++i) {
        var arr = []
        var j = i
        while (ans < target) {
            ans += j
            arr.push(j)
            j++
        }
        if (ans === target) {
            result.push(arr)
        }
        ans = 0
        arr = []
    }
    return result
}
var result = findContinuousSequence(15)
console.log(result)