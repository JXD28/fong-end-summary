// 这题其实就是在求斐波那契数列。理解起来也很简单。假设跳到 n 级台阶有 f(n)种方法。根据题目，青蛙在跳上 n 级时有 2 种方法：

//     从 n - 1 级跳 1 级上来
//     从 n - 2 级跳 2 级上来

// 青蛙跳到 n- 1 级有 f(n-1)种方法，跳到 n- 2 级有 f(n-2)种方法。所以 f(n) = f(n - 1) + f(n - 2)。这就是斐波那契数列的定义式。


//0 1 1 2 3 
var numWays = function(n) {
    let cache = {
        0:0,
        1:1
    }
  return num(n+1) % 1000000007;//注意下标
  function num(n) {
      if (cache[n] !== undefined) {
          return cache[n];
      }

      cache[n] = num(n - 1) + num(n - 2);
      return cache[n]% 1000000007;
  }
};

function jumpFloorII(number)
{
   var arr = [0,1]
   if(number === 1){
       return arr[number]
   }else{
       for(let i = 2;i<=(number+1);i++){
           arr.push(arr[i-1]+arr[i-2])
       }
   }
    return arr[number+1]
}

console.log(jumpFloorII(10))