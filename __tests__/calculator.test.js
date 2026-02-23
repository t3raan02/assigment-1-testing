
import { divide } from "../src/calculator.js";
describe('divide', () => {
    test("divides two positive numbers", () => {
        expect(divide(10, 2)).toBe(5);
    });

    test("throws error when arguments are not numbers", () => {
        expect(() => divide(10, "2")).toThrow('Both arguments must be numbers');
    });

    test("throws error when arguments are NaN", () => {
        expect(() => divide(NaN, 2)).toThrow('Arguments must be valid numbers');
    });

    test("throws error when dividing by zero", () => {
        expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
    });

    test("throws error when both arguments are not numbers", () => {
        expect(() => divide("10", "2")).toThrow('Both arguments must be numbers');
    });
});