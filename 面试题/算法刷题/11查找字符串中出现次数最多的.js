function searchStr(str) {
    var obj = {}
    var strArray = str.split('')
    strArray.forEach((item) => {
        obj[item] ? obj[item]++ : (obj[item] = 1)
    })
    var keys = Object.keys(obj)
    var vals = Object.values(obj)
    var max = Math.max(...vals)
    return {
        max:keys[vals.indexOf(max)],
        number:max
        
    }
}

var str = 'qwerrhajsbdfirgreytsdfw'

console.log(searchStr(str))