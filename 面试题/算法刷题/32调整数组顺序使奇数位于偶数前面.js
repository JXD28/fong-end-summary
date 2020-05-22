// 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数位于数组的前半部分，所有偶数位于数组的后半部分

var exchange = function(nums) {
    var arr = []
    var ji = []
    var ou = []

    nums.forEach(item=>{
        judgeNum(item)
    })

    arr = ji.concat(ou)
    return arr

    function judgeNum(num){
        // console.log('judge')
        if(num<1 || num >10000){
            return false
        }
        if(num%2 === 0){
        console.log('ou')
            ou.push(num)
        }else{
        console.log('ji')
            ji.push(num)
        }
    }
}



//解题
var exchange = function(nums) {
    return [...nums.filter(v=>v%2===1),...nums.filter(v=>v%2===0)]
}

arr = [1,2,3,4,5]
var result = exchange(arr)
console.log(result)