enum VehicleType{
    PedalCycle,
    MoterCycle,
    Car,
    Van,
    Bus,
    Lorry
}

var type = VehicleType.Lorry;
var typeName = VehicleType[type];

console.log(typeName);