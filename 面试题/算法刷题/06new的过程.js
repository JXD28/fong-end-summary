// console.log(a);
// var a=1;
// console.log(a); 
// function a(){console.log(2)};
// console.log(a);
//函数声明优先于变量声明,变量声明覆盖函数声明了
// var a=3;
// console.log(a);
// function a(){console.log(4)};
// console.log(a);
// a();


//new 的过程
function Abc(name){
    this.name = name
}

function _new(Func,...arg){
    //1.创建一个新得对象
    var newobj = new Object()
    //2.实例的原型指向构造函数的原型对象
    newobj.__proto__ = Func.prototype
    //3.改变this的指向,并执行构造函数
    var result = Func.call(newobj,...arg)
    if(typeof result === 'object'){
        return result
    }else{
        return newobj
    }
}

var result = _new(Abc,'noco')
console.log(result.name)