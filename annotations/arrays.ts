// empty array needs annotation
const carMakers: string[] = [];

// contentful array uses type inference
const carMakers2 = ["ford", "toyota", "chevy"];

const dates = [new Date(), new Date()];

// 2d array uses type inference
const carsByMake = [["f150"], ["corolla"], ["camaro"]];

// empty 2d array needs annotation
const carsByMake2: string[][] = [];

// help with inference when extracting values
const car = carMakers2[0];
const myCar = carMakers2.pop;

// prevent incompatible values
// carMakers2.push(100); -> error

// Help with 'map', 'forEach' etc. - autocomplete
carMakers2.map((car: string): string => {
  return car.toUpperCase();
});

// flexible types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push("2030-10-10");
importantDates.push(new Date());
// importantDates.push(100); -> error
