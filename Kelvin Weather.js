// Constant variable temp in kelvin
const kelvin = 0;

// Conversion to celcius
let celsius = kelvin - 273;

// Conversion to celsius
let fahrenheit = celsius * (9 / 5) + 32;

// Rounds fahrenheit down to the nearest whole number
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);


/// Extra ///

let newton = Math.floor(celsius * (33 / 100));
console.log(newton + ' Newtons cold.');
