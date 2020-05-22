// var a = [1,3,2,5,4,8,6,2]

// function quchong(arr){
//     var b = []
//     for(var i =0;i<arr.length;i++){
//         if(b.indexOf(arr[i]) == -1){
//             b.push(arr[i])
//         }
//     }
//     return b
// }

// console.log(quchong(a))

// console.log(!-1)

// var b ='hufds'
// console.log(parseInt(b))

// var c = {
//     b:333,
//     f:'dfdf'
// }

// console.log(c.valueOf())

// console.log(5*'5')


var str = 'dfsYudfsJG'

// function zhuan(str){
//     var strr = str.split('')
//     for(var i = 0;i<strr.length;i++){
//         strr[i]=(strr[i] == strr[i].toUpperCase()?strr[i].toLowerCase():strr[i].toUpperCase())
//     }
//     return strr.join('')
// }

// console.log(zhuan(str))

//最大值
function zuida(str){
    var obj = {}
    for(let i in str){
        obj[str[i]]?obj[str[i]]++:(obj[str[i]])=1
    }
    
    var keys = Object.keys(obj)
    var values = Object.values(obj)
    var max = Math.max(...values)
    // console.log(keys,values,max)
    function maxkeys(){
        var maxArr = []
        var pos = 0
        while(pos<values.length){
            pos = values.indexOf(max,pos)
            if(pos === -1){
                break
            }
            maxArr.push(keys[pos])
            pos++
        }
        return maxArr
    }
    return{
        max:maxkeys(),
        num:max 
    }

}

// console.log(zuida(str))

//for of

var obj1 = {
    0:123,
    1:'345',
    length:3
}

for(let item of Array.from(obj1)){
    console.log(item)
}
console.log(Array.from(obj1))

