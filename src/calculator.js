export function add(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Both arguments must be numbers');
    }
    return a + b;
}
export function divide(a, b) {
    if (typeof a !== 'number'  || typeof b !== 'number') {
        throw new TypeError('Both arguments must be numbers');
    }

    if (Number.isNaN(a) ||  Number.isNaN(b)) {
        throw new TypeError('Arguments must be valid numbers');
    }

    if (b === 0) {
        throw new RangeError('Cannot divide by zero');
    }
    return a / b;
}