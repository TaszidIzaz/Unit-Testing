    const calcu = require("./src/advanced")

    describe('Power', () => {
    var testData = [
        [2, 3, 8],
        [4, 2, 16],
        [5, 0, 1],
        [5, 2, 3],
        [20, 7, 6],
        [8, 2, 0],
        [10, 1, 10],
        [3, 4, 81],    
        [8, 2, 64]   
    ];

    test.each(testData)('pow(%i, %i) should return %i', (x, n, expected) => {
        expect(calcu.pow(x, n)).toBe(expected);
    });
    });

    var DTdata = [
        [3, 2, 9],
        [ 6, 2, 36],
        [6, 1, 6],
    ]
    describe.each(DTdata) ('DT: add(%i, %i), Expected: %i', (a, b, expected) => {
        test(`returns ${calcu.pow(a, b)}`, () => {
        expect (calcu.pow(a, b)).toBe (expected);
        });
    });


    describe('Modulus', () => {
    var testData = [
        [10, 3, 1],
        [15, 4, 3],
        [20, 7, 6],
        [8, 2, 0],
        [100, 20, 0], 
        [17, 5, 2],    
        [10, 1, 10],
        [3, 4, 81],    
        [8, 2, 64]  
    ];

    test.each(testData)('mod(%i, %i) should return %i', (a, b, expected) => {
        expect(calcu.mod(a, b)).toBe(expected);
        });
    });

    var DTdata = [
        [3, 2, 1],
        [ 6, 2, 4],
        [6, 4, 2],
    ]
    describe.each(DTdata) ('DT: add(%i, %i), Expected: %i', (a, b, expected) => {
        test(`returns ${calcu.mod(a, b)}`, () => {
        expect (calcu.mod(a, b)).toBe (expected);
        });
    });

    
