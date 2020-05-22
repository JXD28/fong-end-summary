var a = [1,3,2,5,4,8,6,2]

////比较次数O(N^2),交换次数O(N^2)
// function maopao(arr){
//     for(let i =0;i<arr.length-1;i++){
//         for(let j = 0;j<arr.length-i-1;j++){
//             if(arr[j]>arr[j+1]){
//                 let arr1 = arr[j]
//                 arr[j] = arr[j+1]
//                 arr[j+1] = arr1
//             }
//         }
//     }
//     return arr
// }

// console.log(maopao(a))
// console.log(new Set(a))
// console.log([...new Set(a)])

//比较次数O(N^2),交换次数O(N)因为每次循环只交换一次,把index放到手里
function xuanze(arr){
    //取元素
    for(let i=0;i<arr.length-1;i++){
        var min = i
        //比较元素
        for(var j=i+1;j<arr.length;j++){
            if(arr[min]>arr[j]){
               min = j
            }
        }
        var temp = arr[i]
        arr[i] =  arr[min]
        arr[min] = temp
    }
    return arr
}

console.log(xuanze(a))

//插入排序
//假设第一个已经排好序,在于只换一次位,值一直拿在手,直到跳出while才换位
// function insert(arr){
//     //从第二位开始取元素
//    for(var i =1;i<arr.length;i++){
//        var j = i
//        //取出的值;;
//        var temp = arr[i]
//        while(j>0&&arr[j-1]>temp){
//            arr[j] = arr[j-1]
//         j--
//        }
//        arr[j] = temp
//    }
//    return arr
// }

// console.log(insert(a))