

console.log(runningLogger());

function runningLogger(){
    console.log('I am running!');
 }

function multiplyByTen(n) {
    console.log(n * 10);
}
console.log(multiplyByTen(5));

function stringReturnOne(){
    console.log("I'm not really sure")
}

function stringReturnTwo(){
    console.log("what to return?")
}

function caller(x){
    if (typeof (x) == "function"){
        x();
    }
}

function myDoubleConsoleLog(function1, function2){
    if (typeof(function1) == "function"){
        console.log(function1());
    }
    if (typeof(function2) == "function"){

    }
}

function caller2(arg){
    console.log('Starting ...');
    if (typeof(arg) == "function"){
        setTimeout(arg(), 2000);
    }
    console.log('Ending?')
    return "Interesting"
}
