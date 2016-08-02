x = [3, 5, 'Dojo', 'rocks', 'Michael', 'Sensei']
     console.log(x);
x.push(100);
console.log(x);
x = ['hello', 'world', 'JavaScript is Fun']
console.log(x);
var sum = 0
for (var i = 1; i < 501; i ++){
    sum = sum + i;
}
 console.log(sum);
var result = 0
var sum = 0
var ave = 0
arr = [1, 5, 90, 25,-3, 0]
for (var i = 0; i < arr.length; i ++){
    if (arr[i] < arr[i+1]){
         result = arr[i];
    }
}
console.log(result);

for (var i = 0; i < arr.length ; i ++){
     sum = sum + arr[i];
     ave = sum /arr.length;
}
console.log(ave);


var new_ninja = {
 name: 'Jessica',
 profession: 'coder',
 favorite_language: 'JavaScript', //like that's even a question!
 dojo: 'Dallas'
}
for(var i = 0; i < new_ninja.length; i ++){
    console.log(new_ninja[i]);
}
console.log(new_ninja)
