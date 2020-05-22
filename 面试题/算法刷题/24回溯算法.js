/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = function (board, word) {
    const m = board.length;
    const n = board[0].length;
  
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (wordSearch(i, j, 0)) {
          return true;
        }
      }
    }
  
    function wordSearch (i, j, k) {
        // console.log(word[k])
      // 超出边界或者不匹配时，返回 false
      if (i < 0 || j < 0 || i >= m || j >= n || word[k] !== board[i][j]) {
        return false;
      }
      //下边的代码是找到之后执行的
  
      // 找到了而且还是最后一个字符，返回 true，为递归的终止条件
      if (k === word.length - 1) {
        return true;
      }
  
      // 先占位
      const temp = board[i][j];
      board[i][j] = '-';
      // 往四个方向递归搜索，有一个方向匹配就可以了
      const res = wordSearch(i + 1, j, k + 1) ||
        wordSearch(i - 1, j, k + 1) ||
        wordSearch(i, j + 1, k + 1) ||
        wordSearch(i, j - 1, k + 1);
  
      // 四个方向搜索完了释放
      board[i][j] = temp;
  
      return res;
    }
  
    return false;
  };

var board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
var word = "ABCCED"
console.log(exist(board,word))
