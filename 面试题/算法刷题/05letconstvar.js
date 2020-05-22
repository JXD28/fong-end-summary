// let a = 5
function ui() {
    // console.log(a)
    let b = 6
    var uu = function () {
        console.log(this)
    }
    return uu
}

var ut = ui()
ut()