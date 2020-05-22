var arr = [99,2,4,5,6,4,,9,67]

function compare(a,b){
    console.log('a',a)
    console.log('b',b)
    return a-b
}
//将数组中的对象以某一个属性排序
var arr = [
    {name:3,age:4},
    {name:5,age:1},
    {name:6,age:6},
    {name:7,age:4},
    {name:8,age:8},
    {name:9,age:10}
]
arr.sort((a,b)=>(a.age-b.age))
console.log(arr)
//sort 的内部排序会根据排序对象的长度进行不同的排序算法
arr.sort(compare)
console.log('排序',arr)