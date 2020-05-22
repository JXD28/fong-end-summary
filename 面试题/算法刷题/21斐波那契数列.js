//会超时
// var fib = function(n) {
//     if(n===1){
//         return 0
//     }else if(n===2 || n===3){
//         return 1
//     }else {
//         return fib(n-1)%1000000007+fib(n-2)%1000000007
//     }
// };

//时间复杂度O(N)
var fib = function(n){
    var arr = [0,1]
    for(let i =2 ;i<=n;i++){
        arr.push(arr[i-1]%1000000007+arr[i-2]%1000000007)
    }
    return arr[n]%1000000007
}

//备忘录时间复杂度O(1)
//const仅保证指针不发生改变，修改对象的属性不会改变对象的指针，
//所以是被允许的。也就是说const定义的引用类型只要指针不发生改变，其他的不论如何改变都是允许的
var fib = function(n) {
    const cache = {
        0: 0n,
        1: 1n
    };
    return Fibonacci(n) % 1000000007n;

    /**
     * @param {number} n
     * @return {number}
     */
    function Fibonacci(n) {
        //备忘录
        if (cache[n] !== undefined) {
            return cache[n];
        }

        cache[n] = Fibonacci(n - 1) + Fibonacci(n - 2);
        return cache[n];
    }
};


console.log(fib(45))
console.log(fib1(45))



