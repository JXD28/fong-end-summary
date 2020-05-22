function erfenfa(arr,num){
    var length = arr.length
    // var min = Math.round(length/2)
    var min = Math.floor(length/2)
    console.log('min',min)
    console.log('round',Math.round(length/2))
    if(length === 0){
        console.log('1')
        return null
    }else if(num===arr[min]){
        console.log('2')
        return min
    }else if(num>arr[min])
    {
        console.log('3')
        arr = arr.slice(min+1)
        return erfenfa(arr,num)
    }else{
        console.log('4')
        arr = arr.slice(0,min)
        return erfenfa(arr,num)
    }
    
}

var arr = [1,2,3,4,5,6,7,8,9,10]
var result = erfenfa(arr,9)
console.log(result)