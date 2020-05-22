// var arr = [5,10,1,10,1,10]
// var len = arr[0]
// var newArr = arr.slice(1,len+1)
// console.log(newArr)
// var result = newArr.reduce(function(pre,item,index,arr){
//     // console.log(Math.abs(arr[index+1]-item))
//     if(index<len-1){
//         console.log(Math.abs(arr[index+1]-item))
//         return pre = Math.abs(arr[index+1]-item)+pre
//     }
//     return pre = pre
// },0)

// console.log(result)

//石头题
//解决了递增数组差值为n的情况但是没有解决往中间插值的情况
function stone(arr) {
    var len = arr.length
    var min = Math.min(...arr)
    var max = Math.max(...arr)
    var minIndex
    arr.forEach((item, index) => {
        if (item === min) {
            minIndex = index
        }
    })
    var count = 0
    //num的作用是数组中的连续差值数
    var num = 1
    while (arr[minIndex] + num <= max) {
        for (var i = minIndex; i < len;) {
            if (arr[minIndex] + num === arr[i + 1]) {
                minIndex = i + 1
                count++
            } else {
                i++
            }
        }
        num++
    }

    return len - (count + 1)
}
var arr = [6, 1, 2, 3, 7]
console.log(stone(arr))