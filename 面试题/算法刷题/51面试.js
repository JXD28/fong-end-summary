//把字符串的大小写取反

// var a = 'uyuiytuyghbiYYTubhuiIhhj12321321.,.,;'


// // a = a.replace(/[a-zA-Z]/g, function (e) {
// //     if (e.toUpperCase() === e) {
// //         return e.toLowerCase()
// //     }
// //     else
// //         return e.toUpperCase()

// // })

// a = a.replace(/[a-zA-Z]/g, (e) => {
//     return e.toUpperCase() === e ? e.toLowerCase() : e.toUpperCase()
// })

// console.log(a);



//5 实现一个字符串的匹配算法,与indexOf方法一样,但是不能用indexOf(), str.indexOf('ui')

// ~function () {
//     function myIndex(str) {
//         // var res = -1
//         // let leng = this.length
//         // let strL = str.length
//         // for (var i = 0; i <= leng - strL; i++) {
//         //     if (this.substr(i, strL) === str) {
//         //         res = i
//         //         break
//         //     }
//         // }
//         // return res

//         let b = new RegExp(str)
//         let res =b.exec(this)
//        return  res === null?  -1:res.index
//     }
//     String.prototype.myIndex = myIndex
// }()

// //不用正则来找字符串: 从第一位开始找三位,不一样找下一位,数三位.
// let a = 'uiytgii'
// let str = 'ytg'
// console.log(a.myIndex(str))
// console.log(a.indexOf(str))
// // 用exec方法来找值
// var b = new RegExp(/ytg/)

// b.exec('uiytgii')

// console.log(b.exec('uiytgii'))

//6 

// 数组扁平化

let arr=[[1,2,3],[3,4,5,5],[6,7,8,9,[11,12,[12,13,[14]]]],10]

arr = arr.flat(Infinity)
console.log(Array.from(new Set(arr)).sort((a,b)=>a-b))