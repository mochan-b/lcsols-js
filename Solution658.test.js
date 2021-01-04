const {findClosestElements} = require("./Solution658");

describe("Solution 658 tests", () => {
    test('[1,2,3,4,5], 4, 3]', () => {
        // arrange and act
        var arr = [1,2,3,4,5];
        var k = 4;
        var x = 3;

        var result = findClosestElements(arr, k, x);

        // assert
        expect(result).toStrictEqual([1,2,3,4]);
    });

    test('[1,2,4,5,8], 1, 3]', () => {
        // arrange and act
        var arr = [1,2,4,5,8];
        var k = 1;
        var x = 3;

        var result = findClosestElements(arr, k, x);

        // assert
        expect(result).toStrictEqual([2]);
    });

    test('[1,2,3,4,5], 1, 3]', () => {
        // arrange and act
        var arr = [1,2,3,4,5];
        var k = 1;
        var x = 3;

        var result = findClosestElements(arr, k, x);

        // assert
        expect(result).toStrictEqual([3]);
    });

    test('[2,4,5,8], 1, 1]', () => {
        // arrange and act
        var arr = [2,4,5,8];
        var k = 1;
        var x = 1;

        var result = findClosestElements(arr, k, x);

        // assert
        expect(result).toStrictEqual([2]);
    });

    test('[1,2,3,4,5], 4, -1]', () => {
        // arrange and act
        var arr = [1,2,3,4,5];
        var k = 4;
        var x = -1;

        var result = findClosestElements(arr, k, x);

        // assert
        expect(result).toStrictEqual([1,2,3,4]);
    });

    test('[3,5,8,10], 2, 15]', () => {
        // arrange and act
        var arr = [3,5,8,10];
        var k = 2;
        var x = 15;

        var result = findClosestElements(arr, k, x);

        // assert
        expect(result).toStrictEqual([8,10]);
    });
})
