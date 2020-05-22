
//我写的

// var firstUniqChar = function (s) {
//     var arr = s.split('')
//     var obj = {}
//     if (arr.length === 0) {
//         console.log('1')
//         return " "
//     } else {
//         arr.forEach(item => obj[item] ? obj[item]++ : obj[item] = 1)
//         console.log('3',obj)
//         for (key in obj) {
//             if (obj[key] === 1) {
//                 return key
//             }
//         }
//         return " "
//     }

// };

//别人的
var firstUniqChar = function (s) {
    for(char of s){
        if(s.indexOf(char) === s.lastIndexOf(char)){
            return char
        }
    }
    return " "
};