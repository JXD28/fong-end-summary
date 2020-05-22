var search = function(nums, target) {
    var res= nums.reduce((t,v)=>{
        console.log('t',t)
        return v==target?++t:t
    }
        
    ,0)
    return res;
}

var result = search([1,2,2,3,3,4,4,4,4],4)
console.log(result)