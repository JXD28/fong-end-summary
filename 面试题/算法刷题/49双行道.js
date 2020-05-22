var str1 = '..X.X'
var str2 = 'XX...'
var num = 5
var arr1 = str1.split('')
var arr2 = str2.split('')
var arr = []
arr.push(arr1)
arr.push(arr2)
console.log(arr)
function numsRout(arr) {
    if (arr[0].length === 1) {
        return 1
    }
    let ans = new Array(2)
    for (var i = 0; i < 2; i++) {
        ans[i] = new Array(num)
    }
    for (var j = 0; j < num; j++) {
        for (var i = 0; i < 2; i++) {
            if (arr[i][j] == 'X') {
                ans[i][j] = 0
            } else {
                if (i == 0 && j == 0) {
                    ans[i][j] = 1
                } else {
                    if (i == 0&&j - 1 >= 0) {
                        ans[i][j] = ans[i+1][j - 1]+1+ans[i][j-1]
                    }
                    if (i ==1 && j - 1 > 0) {
                        ans[i][j] = ans[i - 1][j -1]+ans[i][j-1]
                    }
                }
            }
        }
    }
    return ans[1][num-1]
}

console.log(numsRout(arr))