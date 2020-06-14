// array-like structure where each element represents some property of a record
const drink = {
  color: "brown",
  carbonated: "true",
  sugar: 40,
};

// array - order could easily be swapped, losing info
const pepsi = ["brown", true, 40];
pepsi[0] = 40;

// annotated to define order => tuple
const pepsi2: [string, boolean, number] = ["brown", true, 40];

// pepsi2[0] = 30; -> error

// type aliasing - can substitute the annotation with Drink
type Drink = [string, boolean, number];
// pepsi2 and pepsi3 are equivalent
const pepsi3: Drink = ["brown", true, 40];
const sprite: Drink = ["clear", true, 40];
const tea: Drink = ["brown", false, 0];
