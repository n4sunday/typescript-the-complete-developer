var oldCivic = {
    name: "civic",
    year: 2000,
    broken: true,
    summary: function () {
        return "Name " + this.name;
    }
};
// const printVehicle = (vehicle: {  name: string;  year: number;  broken: boolean;}) => {
var printVehicle = function (vehicle) {
    console.log("Name " + vehicle.name);
    console.log("Year " + vehicle.year);
    console.log("Broken? " + vehicle.broken);
};
printVehicle(oldCivic);
