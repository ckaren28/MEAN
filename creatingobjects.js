function VehicleConstructor(name, wheels, passenger){
    var vehicle = {};
    vehicle.name = name;
    vehicle.wheels = wheels;
    vehicle.passenger = passenger;

    vehicle.makeNoise = function(sound){
        console.log(sound);
    }
    return vehicle
}

var bike = VehicleConstructor('bicycle', 2, 1);
console.log(bike);
bike.makeNoise('ring, ring')

var sedan = VehicleConstructor('sedan', 4, 4);
console.log(sedan);
sedan.makeNoise('Honk Honk!');

var bus = VehicleConstructor('bus', 6, 3);
bus.pickUp = function(newPassengers){
    bus.passenger += newPassengers;
}
console.log(bus.passenger);
bus.pickUp(2);
console.log(bus.passenger);
