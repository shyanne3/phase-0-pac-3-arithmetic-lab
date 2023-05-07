// Adds a to b and returns the result
function add(a, b) {
    return a + b;
}

// Subtracts a by b and returns result
function subtract(a, b) { 
    return a - b;
}

// Multiplies a by b and returns the result
function multiply(a, b) {
    return a * b;
}

// Divides a by b and returns the result
function divide(a, b) {
    return a / b;
}

// Increments n and returns the result
function increment(n) {
    return (n += 1);
}

// Decrements n and returns the result
function decrement(n) {
    return (n -= 1);
}

// Parses n as an integer and returns the integer; assumes base 10; 
// and returns NaN as appropiate.
function makeInt(n) {
    parseInt(n, 10);
    return parseInt(n, 10);
}

// Preserves n's decimal and returns the parsed number; returns NaN as appropiate
function preserveDecimal(n) {
    parseFloat(n);
    return parseFloat (n);
}