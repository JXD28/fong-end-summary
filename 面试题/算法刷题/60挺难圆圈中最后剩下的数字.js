// 0,1,,n-1这n个数字排成一个圆圈，从数字0开始，每次从这个圆圈里删除第m个数字。求出这个圆圈里剩下的最后一个数字。

// 例如，0、1、2、3、4这5个数字组成一个圆圈，从数字0开始每次删除第3个数字，则删除的前4个数字依次是2、0、4、1，因此最后剩下的数字是3。

 

// 示例 1：

// 输入: n = 5, m = 3
// 输出: 3

// 示例 2：

// 输入: n = 10, m = 17
// 输出: 2
//我写的
// var lastRemaining = function (n, m) {
//     var qu = []
//     var a = 0
//     while(a<n){
//         qu.push(a++)
//     }
//     while (qu.length > 1) {
//         for (var i = 1; i < m; i++) {
//             var temp = qu.shift()
//             qu.push(temp)
//         }
//         qu.shift()
//     }
//     return qu[0]
// }


//别人的
// var lastRemaining = function (n, m) {
//   let ans = 0;
//   for (let i = 2; i <= n; i++) {
//     ans = (ans + m) % i;
//   }
//   return ans;
// };

var lastRemaining = function(n, m) {
    const arr = [];
    for(let i = 0; i < n; i++) arr.push(i);
    let head = 0;
    while(arr.length > 1) {
        head = (head + m - 1) % arr.length;
        arr.splice(head, 1);
    }
    return arr[0];
};


var result = lastRemaining(10,17)
console.log(result)