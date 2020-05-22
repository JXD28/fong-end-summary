// var hammingWeight = function(n) {
//     var binary = n.toString(2).split('')

//     var count= 0
//     binary.map(item=>{
//         if(item == 1){
//             count++
//         }
//     })
//     return count
// }

// console.log(hammingWeight(9))

// //位运算
// var hammingWeight = function(n) {
//     let count = 0;
//     while (n !== 0) {
//       n = n & (n - 1);
//       count++;
//     }

//     return count;
//   };
//正则
// match() 方法可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配。
//该方法类似 indexOf() 和 lastIndexOf()，但是它返回指定的值，而不是字符串的位置。
var hammingWeight = function (n) {
    const r = n.toString(2).match(/1/g);
    return r ? r.length : 0

};

var num = 9
// console.log(num.toString(2))

console.log(num & (num - 1))