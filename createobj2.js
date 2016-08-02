

function VehicleConstructor(name, wheels, passenger, speed){
   if (!(this instanceof VehicleConstructor)){
    return new VehicleConstructor(name,wheels,passenger, speed);
  }
  /* Privates */
  var distanceTraveled = 0;
  var self = this;
  function updateDistanceTraveled(){
    distanceTraveled += self.speed;
    console.log(distanceTraveled);
  }
  /* public */
  this.speed = speed;
  this.name = name;
  this.wheels = wheels;
  this.passenger = passenger;

  this.makeNoise = function(noise){
    var noise = noise;
    console.log(noise)
  };
  this.move = function(){
    this.makeNoise();
    updateDistanceTraveled();
  };
  this.checkMiles = function(){
    console.log(distanceTraveled);
  };

}

var car = new VehicleConstructor('car', 4, 2, 40);
car.move();
car.move();
car.checkMiles();
console.log(car.speed);
