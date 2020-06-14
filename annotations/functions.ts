// No type inference for arguments - they must always be included.
// Type inference for output works but we don't rely on it - must add the return type to avoid unwanted errors.

// arrow functions
const add = (a: number, b: number): number => {
  return a + b;
};

const subtract = (a: number, b: number): number => {
  return a - b;
};

// named function
function divide(a: number, b: number): number {
  return a / b;
}

// assigned anonymous function
const multiply = function (a: number, b: number): number {
  return a * b;
};

// No return value
const logger = (message: string): void => {
  console.log(message);
};

// We never reach the end of this function. Before so we exit the function early without returning a value.
const throwError = (message: string): never => {
  throw new Error(message);
};

// object
const todaysWeather = {
  date: new Date(),
  weather: "sunny",
};

// function
const logWeather = (forecast: { date: Date; weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

// ES2015 destructuring
const logWeather1 = ({ date, weather }): void => {
  console.log(date);
  console.log(weather);
};

// destructuring with types
const logWeather2 = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

// function call
logWeather(todaysWeather);
