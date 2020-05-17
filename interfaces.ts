interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: 2000,
  broken: true,
  summary(): string {
    return `Name ${this.name}`;
  },
};

// const printVehicle = (vehicle: {  name: string;  year: number;  broken: boolean;}) => {
const printVehicle = (vehicle: Vehicle) => {
  console.log(`Name ${vehicle.name}`);
  console.log(`Year ${vehicle.year}`);
  console.log(`Broken? ${vehicle.broken}`);
};

printVehicle(oldCivic);

const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `MY drink is ${this.sugar} grams of sugar`;
  },
};

printVehicle(oldCivic);
