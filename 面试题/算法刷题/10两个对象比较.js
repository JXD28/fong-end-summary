let obj1 = {
    name: '李德华',
    age: 18,
    price: NaN
}

let obj2 = {
    name: '张德华',
    age: 18,
    price: NaN
}

// console.log(obj1.valueOf() == obj2.valueOf())

// console.log(JSON.stringify(obj1) === JSON.stringify(obj2))

// console.log(Object.keys(obj1).toString() === Object.keys(obj2).toString())

// console.log(Object.keys(obj1).toString())

// for(key in obj1){
//     console.log(obj1[key].toString() === obj2[key].toString())
// }

function objEquel(obj1, obj2) {
    var a = Object.keys(obj1).length
    var b = Object.keys(obj2).length
    if (a !== b) {
        return false
    } else {
        for (key in obj1) {
            console.log('obj1',key)
            for (let j = 0; j < a; j++) {
                console.log('obj2',Object.keys(obj2)[j])
                if(key === Object.keys(obj2)[j]){
                    console.log('j',j)
                    if (obj1[key].toString() !== obj2[Object.keys(obj2)[j]].toString()) {
                        return false
                    }
                }
                
            }
        }
        return '相等'

    }
}

console.log(objEquel(obj1,obj2))