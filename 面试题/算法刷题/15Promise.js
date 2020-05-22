const myFirstPromise = () =>(
    new Promise((resolve, reject) => {
        setTimeout(function(){
            resolve("成功!");
        }, 250);
    })
) 


//fullished->then, rejected->catch
// myFirstPromise.then((data) => {
//     console.log("Yay! " + data);
// }).catch((e) => {console.log(e)})

 var myfunction = async function (){
    var aaa = await myFirstPromise()
    console.log(aaa)
}

myfunction()