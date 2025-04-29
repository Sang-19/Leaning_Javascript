// The reason is that an equality check == and comparisons > < >=
// <= work differently.
// Comparisons convert null to a number, treating it as 0.
// That's why (3) null >= 0 is true and (1) null > 0 is false.
// -8 LF (JavaScript Layout: U.S. Prettier

console.log("2" > 1);
console.log("02" > 1);
console.log(null > 0);
console.log(null == 0); //converted null to 0
console.log(null >= 0);

// === - check the datatype and don't convert -- strict check
// like string and number convert