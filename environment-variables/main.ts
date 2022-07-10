// get a value
const Author = Deno.env.get('AUTHOR');
console.log('Author: ' + Author);

// set a value
Deno.env.set('YEAR', '2022');
console.log('Year: ' + Deno.env.get('YEAR'));

// delete value
Deno.env.delete('YEAR');
console.log('Year: ' + Deno.env.get('YEAR'));

// store all environment variables as an object
const envVars = Deno.env.toObject();
console.log(envVars);
