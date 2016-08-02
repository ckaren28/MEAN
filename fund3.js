

function personConstructor(name){
    person.name = name;
    return {
        name: name,
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
}

function ninjaConstructor(name, cohort){
    var ninja = {}
    var belts = ['yellow', 'red', 'black']
    ninja.name = name;
    ninja.cohort = cohort;
    ninja.beltLevel = 0;
    ninja.levelUp = function(){
        if (ninja.beltLevel < 2){
            ninja.beltLevel += 1;
            ninja.belt = belts[ninja.beltLevel];
        }
    return ninja
    }
    ninja.belt = belts[ninja.beltLevel];
    return ninja;

}

var ninja1 = ninjaConstructor('la', 'dc')
console.log(ninja1);
ninja1.levelUp().levelUp()
console.log(ninja1)
