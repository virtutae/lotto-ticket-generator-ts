import { generateRandomNum } from "./lottoGenerator";
import { createListOfSix } from "./lottoGenerator";
import { sortListAsc } from "./lottoGenerator";




test("generates a random number between 1 and 70", () => {
    for (let i = 0; i < 20; i++) {
        const randomNum = generateRandomNum();
        expect(randomNum).toBeGreaterThan(0);
        expect(randomNum).toBeLessThan(71);
    }
});

test("creates an array that contains 6 numbers", () => {
    for (let i = 0; i < 20; i++) {
        const array = createListOfSix();
        expect(array.length).toBe(6);
    }
});


test("sorts the array of numbers in ascending order", () => {

    expect(sortListAsc([1, 5, 2, 67, 34, 3])).toEqual([1, 2, 3, 5, 34, 67]);

});

