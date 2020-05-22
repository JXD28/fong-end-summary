// 从扑克牌中随机抽5张牌，判断是不是一个顺子，即这5张牌是不是连续的。2～10为数字本身，A为1，J为11，Q为12，K为13，而大、小王为 0 ，可以看成任意数字。A 不能视为 14。

 

// 示例 1:

// 输入: [1,2,3,4,5]
// 输出: True

 

// 示例 2:

// 输入: [0,0,1,2,5]
// 输出: True

var isStraight = function(nums) {
    var arr = nums.sort((a,b)=>b-a)
    var numZ = arr.indexOf(0)+1 === 0?0:arr.length - arr.indexOf(0)
    var numZZ = numZ
    console.log('numZ',numZ)
    for(var i = 0;i<arr.length-1-numZZ;i++){
        if(arr[i]-arr[i+1] === 1){
            continue
        }else if(arr[i]===arr[i+1]){
            return false
        }
        else{
            if(numZ === 0){
                return false
            }else{
                if(arr[i]-arr[i+1] >=numZ+2){
                    return false
                }else if(arr[i]-arr[i+1] <= numZ+1){
                    numZ = numZ-(arr[i]-arr[i+1])+1
                }else{
                    return false
                }
            }
        }
    }
    return true
}


// 解题思路

//     lastIndexOf+1获取0的个数且是第一个非0数的坐标
//     从第一个非0数遍历，用后一个减去前一个
//     差值是-1代表有重复的直接返回false
//     否则累加判断间隔多少
//     如果0的数量>=间隔数量 则是顺子

// 代码

var isStraight = function(nums) {
    nums.sort((a,b)=>a-b)
    // 0 的个数,第一个非0的坐标
    let zero = nums.lastIndexOf(0)+1
    let count = 0
    let len = nums.length
    for(let i=zero;i<len-1;i++){
        let cut = nums[i+1]-nums[i]-1
        // 这里等于-1代表两个数相等的，那肯定不是顺子
        if(cut == -1){
            return false
        }
        count+=cut
    }
    return zero>=count?true:false
};

var result = isStraight([3,10,8,9,10])
console.log(result)