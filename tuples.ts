const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

// Type alias
type Drink = [string, boolean, number];

const pepsi: Drink = ["brown", true, 40];
const sprite: Drink = ["clear", true, 40];
const tea: Drink = ["brow", false, 40];

const carSpecs: [number, number] = [400, 500];

const carStats = {
  horsePower: 400,
  weight: 3354,
};
