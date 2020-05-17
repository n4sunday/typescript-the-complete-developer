const carMakers: string[] = ["ford", "toyota", "chevy"];
const dates = [new Date(), new Date()];

const carsByMake = [["f150"], ["corolla"], ["camaro"]];

// Help with interence when extracting valuse
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incopatible values
carMakers.push("bmw");

// Help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push("2030-10-10");
importantDates.push(new Date());
importantDates.push(100);
