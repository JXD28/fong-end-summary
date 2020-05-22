/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {
    arr.sort()
    return arr.slice(0,k)
}

var arr = [3,2,1]
console.log(getLeastNumbers(arr,2))