

function VehicleConstructor(name, wheels, passenger, speed, vin){
   if (!(this instanceof VehicleConstructor)){
    return new VehicleConstructor(name, wheels, passenger, speed);
  }

  this.distanceTraveled = 0;
  this.speed = speed;
  this.name = name;
  this.wheels = wheels;
  this.passenger = passenger;
  this.vin = Math.floor(Math.random()*1000000000000000000);

};
  VehicleConstructor.prototype.updateDistanceTraveled = function(){
     this.distanceTraveled += this.speed;
    //  console.log(distanceTraveled);
     return this;
 };

  VehicleConstructor.prototype.makeNoise = function(noise){
    this.noise = noise;
    console.log(noise);
    return this;
  };
  VehicleConstructor.prototype.move = function(){
    this.makeNoise("beep");
    this.updateDistanceTraveled();
    return this;
  };
  VehicleConstructor.prototype.checkMiles = function(){
     console.log(distanceTraveled);
    return this;
  };
  VehicleConstructor.prototype.generateVIN = function(){
      var vin = Math.floor(Math.random()*1000000000000000000);
      console.log(vin);
      return this;
  }



var car = new VehicleConstructor('car', 4, 2, 20);
console.log(car.move().move())
