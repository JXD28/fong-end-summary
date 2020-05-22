// Promise.resolve()
// .then(() => {
// console.log('a');
// return new Error('error');
// })
// .then((res)=>{
// console.log('b');
// console.log('then:',res);
// })
// .catch((err) =>{
// console.log('c');
// console.log('catch:',err);
// })

// Promise.resolve()
// .then(function success(res){
// throw new Error('error');
// },function faill(e){
// console.error('fail1:',e);
// })
// .catch(function fail2(e){
// console.error('fail2',e);
// })

//.then /catch  是异步  Promise是同步
console.log( Promise.reject(1).catch((res)=>console.log(res)))