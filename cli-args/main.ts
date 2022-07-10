// print all arguments
// console.log(Deno.args)
//
// // print each argument separately
// console.log(Deno.args[0]);
// console.log(Deno.args[1]);
// console.log(Deno.args[2]); // we will not provide this 3rd argument

// import the parse() function
import { parse } from "https://deno.land/std@0.147.0/flags/mod.ts";

// parse into flag options
const flags = parse(Deno.args, {
    string: ["author", "title"],
    boolean: ["published"],
})

// print each flag option
console.log('author: ' + flags.author);
console.log('title: ' + flags.title);
console.log('published: ' + flags.published);

// print the flags object structure
console.log(flags);
