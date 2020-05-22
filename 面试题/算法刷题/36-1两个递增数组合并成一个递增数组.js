//第一种就是用concat 然后排序
//第二种就是找两个数组中最小的然后将每次找到的最小的值push到新得数组中

function mergeTwoArr(arr1,arr2) {
    var arr = []
    function searchMin(arr1, arr2) {
        if(!arr1.length&&!arr2.length){
            return
        }
        var min1 = Math.min(...arr1)
        var min2 = Math.min(...arr2)
        var min3 = Math.min(min1, min2)
        //确保每次压入数组的值为最小值
        min3 === min1?arr1.splice(arr1.indexOf(min1),1):arr2.splice(arr2.indexOf(min2),1)
        arr.push(min3)
        return searchMin(arr1,arr2)
    }
    searchMin(arr1,arr2)
    return arr
}

var arr1 = [1,3,4,11]
var arr2 = [6,7,8,9,10]
console.log(mergeTwoArr(arr1,arr2))
