var minArray = function(numbers) {
    var left = 0
    var right = numbers.length-1
    while(left<right){
        var mid = Math.floor((left+right)/2)
        //正序
        if(numbers[left]<numbers[right]){
            return numbers[left]
        }
        //非正序
        if(numbers[left]<numbers[mid]){
            left = mid+1
        }else if(numbers[mid]<numbers[right]){
            right = mid
        }else {
            left++
        }
    }
    return numbers[left]
}