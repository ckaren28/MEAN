
function sum(x, y){
    var sum = 0
    for (var i = 0; i <= y; i++) {
        sum += i
    }
    return sum;
}
console.log(sum(0, 2))

function findmin(arr){
    var min = arr[0]
    for (var i = 0; i < arr.length; i ++){
        if (arr[i] < arr[i+1]){
             min = arr[i];
        }
    }
    console.log(min);
}

function average(arr){
    var sum = arr[0]
    for (var i = 0; i < arr.length ; i ++){
         sum += arr[i];
    }
    console.log( sum / arr.length);
}


var person = {
    name: "Karen",
    distance_traveled: 0,
    say_name : function(){
        console.log(person.name);
    },
    say_something : function(string){
        console.log(`${person.name}  says:  ${string}` );
    },
    walk : function(){
        console.log(`${person.name}  is walking!`);
        person.distance_traveled +=3;
    },
    run : function(){
        console.log(`${person.name}   is walking!` );
        person.distance_traveled +=10;
    },
    crawl : function(){
        console.log(`${person.name} is walking`);
        person.distance_traveled +=1;
    }
}

console.log(person.distance_traveled);
person.walk();
person.run();
person.crawl();
console.log(person.distance_traveled)
