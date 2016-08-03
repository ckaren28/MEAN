// function fib() {
//   var arr = [];
//
//     function nacci() {
//         if (arr.length <= 1 || arr == undefined ) {
//             arr.push(1);
//
//         }
//         else {
//             arr.push(arr[arr.length-1] + arr[arr.length-2]);
//
//         }
//         console.log(arr[arr.length-1]);
//
//     }
//
//     return nacci
//     };
//
//
//
// var fibCounter = fib();
// fibCounter() // should console.log "1"
// fibCounter() // should console.log "1"
// fibCounter() // should console.log "2"
// fibCounter() // should console.log "3"
// fibCounter() // should console.log "5"
// fibCounter() // should console.log "8"
// -------------


function fib() {
    var value = 0;
    var prev = 0;
    var prevprev = 1;

    function nacci() {

        value = prevprev + prev;
        prev = value;
        prevprev = prev;



        console.log(value);

    }

    return nacci
};



var fibCounter = fib();
fibCounter() // should console.log "1"
fibCounter() // should console.log "1"
fibCounter() // should console.log "2"
fibCounter() // should console.log "3"
fibCounter() // should console.log "5"
fibCounter() // should console.log "8"
