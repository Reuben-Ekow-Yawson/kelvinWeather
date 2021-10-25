//Current temp
const kelvin = 0;
//convert Kelvin to Celsius
const celsius = kelvin - 273;
//convert Celsius to Fahrenheit 
let fahrenheit = celsius * (9 / 5) + 32;
// Round down the fahrenheit
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)

// Convert to Newton
let newton = celsius * (33 / 100);
// Round down
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);