interface Automobile {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

// very long annotation - could need to be duplicated for more functions
const printVehicleLong = (vehicle: {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}`);
  console.log(vehicle.summary());
};

printVehicleLong(oldCivic);

// using the interface - must pass in an object with the properties defined in the interface - like oldCivic
const printVehicle = (automobile: Automobile): void => {
  console.log(`Name: ${automobile.name}`);
  console.log(`Year: ${automobile.year}`);
  console.log(`Broken? ${automobile.broken}`);
  console.log(automobile.summary());
};

printVehicle(oldCivic);

// new interface
interface Reportable {
  summary(): string;
}

// new function
const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

// oldCivic qualifies as it has the summary() property. Irrelavant that is has other properties too
printSummary(oldCivic);

// this also has a summary() property so is ALSO of type Reportable. Way to make code more reusable
const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};

printSummary(drink);
