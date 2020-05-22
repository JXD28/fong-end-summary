// 把n个骰子扔在地上，所有骰子朝上一面的点数之和为s。输入n，打印出s的所有可能的值出现的概率。

 

// 你需要用一个浮点数数组返回答案，其中第 i 个元素代表这 n 个骰子所能掷出的点数集合中第 i 小的那个的概率。

 

// 示例 1:

// 输入: 1
// 输出: [0.16667,0.16667,0.16667,0.16667,0.16667,0.16667]

// 示例 2:

// 输入: 2
// 输出: [0.02778,0.05556,0.08333,0.11111,0.13889,0.16667,0.13889,0.11111,0.08333,0.05556,0.02778]

 

// 限制：

// 1 <= n <= 11


//  n   s
//  1   [1~6]
//  2   [2~12]
//  3   [3~18]
//  n   [n~6n]
//原理就是当n = 3时,点数和最大为18,那么比如点数和为13的情况是 当n=2 时,点数和分别为7,8,9,10,11,12 情况出现次数之和
//7+6,8+5,9+4,10+3,11+2,12+1
var twoSum = function(n) {
    if (n < 1) {
      return [];
    }
    const res = [0, 1, 1, 1, 1, 1, 1];
    for (let i = 1; i < n; i++) {
      for (let j = 6 * n; j > 0; j--) {
        res[j] = res
          .slice(Math.max(0, j - 6), j)
          .reduce((acc, cur) => acc + cur, 0);
      }
    }
    return res.slice(1).map(num => num / Math.pow(6, n)).filter(Boolean);
};

//递归
var twoSum = function(n) {
    function diceCnt(n) {
      if (n === 1) {
          return [0, 1, 1, 1, 1, 1, 1];
      }

      cnts = diceCnt(n - 1);
      for (let i = 6 * n; i > 0; i--) {
          cnts[i] = cnts
          .slice(Math.max(i - 6, 0), i)
          .reduce((acc, cur) => acc + cur, 0);
      }

      return cnts;
      }
      return diceCnt(n)
          .map(num => num / Math.pow(6, n))
          .filter(Boolean)
};

// Array 类中的 filter 方法使用目的是移除所有的 ”false“ 类型元素  (false, null, undefined, 0, NaN or an empty string)：
// Boolean 是一个函数，它会对遍历数组中的元素，并根据元素的真假类型，对应返回 true 或 false.

// 例如：

// Boolean(0); // false
// Boolean(true); // true
// Boolean(1); // true
// Boolean(""); // false
// Boolean("false"); // true. "false"是一个非空字符串

