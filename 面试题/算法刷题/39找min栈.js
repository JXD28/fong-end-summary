/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.arr = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.arr.push(x)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.arr.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.arr[this.arr.length-1]
};

/**
 * @return {number}
 */
MinStack.prototype.min = function() {
    var array = this.arr
    return Math.min(...array)
};

var minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.min())  
minStack.pop()

console.log('top',minStack.top())
      
var min = minStack.min()   
console.log('min',min)
console.log(minStack.arr)

//更优解法
/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.data = [] ; //保存入栈出栈顺序
    this.minS = [];  //保存当前的最小值

};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    let data = this.data;
    let minS = this.minS;
    data.push(x);
    if(minS[minS.length-1]<x){
        minS.push(minS[minS.length-1]);
    }else minS.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.data.pop();
    this.minS.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.data[this.data.length-1];
};

/**
 * @return {number}
 */
MinStack.prototype.min = function() {
    return this.minS[this.minS.length-1];

};
