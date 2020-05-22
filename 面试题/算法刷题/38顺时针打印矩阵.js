//二维数组顺时针打印

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if(!matrix.length||!matrix||!matrix[0].length){
        return []
    }
     let top = 0
            bottom = matrix.length-1
            right = matrix[0].length-1
            left = 0
            result = []
    while(true){
        for(let col = left;col<=right;col++){
            result.push(matrix[top][col])
        }
        top++
        if(top>bottom){
            break
        }
        for(let row = top;row<=bottom;row++){
            result.push(matrix[row][right])
        }
        right--
        if(right<left){
            break
        }
        for(let col = right;col>=left;col--){
            result.push(matrix[bottom][col])
        }
        bottom--
        if(bottom<top){
            break
        }
        for(let row = bottom;row>=top;row--){
            result.push(matrix[row][left])
        }
        left++
        if(left>right){
            break
        }
    }
    return result
}
