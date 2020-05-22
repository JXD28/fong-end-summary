/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
//不能从下往上找,因为会找不全
// var findNumberIn2DArray = function(matrix, target) {
//     for(var row = (matrix.length -1);0<=row;){
//         if(matrix[row][0]<=target){
//             console.log('大于')
//             return matrix[row].some(item=>item==target)
//         }else{
//             console.log('小于')
//             row--
//         }
//     }
//     return false
// }

var findNumberIn2DArray = function (matrix, target) {
    for (var row = 0; row < matrix.length;) {
        if (matrix[row][0] > target) {
            return false
            // return matrix[row].some(item=>item==target)
        } else {
            if (matrix[row].some(item => item == target)) {
                return true
            } else {
                row++
            }
        }
    }
    return false
}




//js中没有真正的多维数组,只能数组嵌套数组
var matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

// console.log(matrix[2][0]) // 7

// console.log(0<=2);

var result = findNumberIn2DArray(matrix, 7)
console.log(result)
