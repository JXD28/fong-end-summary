var str = '3 1 3 2 5'

// console.log(arr.split(' '))
var arr = str.split(' ')

function or(arr,num){
    var result = max(arr)
    for(let i = 0 ;i<arr.length;i++){
        var temp = arr[i]
        arr[i] = arr[i]|num
        if(result<max(arr)){
            result = max(arr)
        }else{
            arr[i] = temp
        }
    }
    return result
}


function max(arr){
    var obj={}
    var len = arr.length
    for(let i =0;i<len;i++){
        // obj[nums[i]]?++obj[nums[i]]:obj[nums[i]]=1
        obj[arr[i]] = (~~obj[arr[i]])+1
    }
    var max = 0
     for( key in obj){
        if(obj[key]>max){
            max = obj[key]
        }
    }
    return max
}

console.log(or(arr,2))