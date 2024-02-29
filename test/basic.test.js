const calc = require("./src/basic")

describe('Add', () => {
var BVAdata = [
    [1, 2, 3],
    [4, 5, 9],
    [3, 12, 15],
    [4, 6, 10],

]

describe.each(BVAdata) ('BVA: add(%i, %i), Expected: %i', (a, b, expected) => {
    test (`returns ${calc.add(a, b)}`, () => {
    expect (calc.add(a, b)).toBe (expected);
    });
});


var DTdata = [
    [0, 89, 89],
    [-17, -35, -52],
    [65, -12, 53],
    [-78, 24, -54]
]
describe.each(DTdata) ('DT: add(%i, %i), Expected: %i', (a, b, expected) => {
    test(`returns ${calc.add(a, b)}`, () => {
    expect (calc.add(a, b)).toBe (expected);
    });
});

    // describe('Subtract', () => {
    //     var testData = [
    //     ];
    
    //     test.each(testData)('subtract(%i, %i) should return %i', (a, b, expected) => {
    //     expect(calc.subtract(a, b)).toBe(expected);
    //     });
    // });

    // var DTdata = [
    //     [0, 89, -89],
    //     [-17, -35, 18],
    //     [65, -12, 77],
    //     [-70, 24, -94]
    // ]
    // describe.each(DTdata) ('DT: add(%i, %i), Expected: %i', (a, b, expected) => {
    //     test(`returns ${calc.subtract(a, b)}`, () => {
    //     expect (calc.subtract(a, b)).toBe (expected);
    //     });
    // });



    
    describe('Multiply', () => {
        var testData = [
        [3, 2, 6],
        [4, 5, 20],
        [-3, 7, -21],
        [0, 10, 0],
        [8, 9, 72],    
        [-4, -6, 24] , 
        ];
    
        test.each(testData)('multiply(%i, %i) should return %i', (a, b, expected) => {
        expect(calc.multiply(a, b)).toBe(expected);
        });
    });


    var DTdata = [
        [0, 89, 0],
        [-1, -35, 35],
        [65, -2, -130],
        [-70, 4, -280]
    ]
    describe.each(DTdata) ('DT: add(%i, %i), Expected: %i', (a, b, expected) => {
        test(`returns ${calc.multiply(a, b)}`, () => {
        expect (calc.multiply(a, b)).toBe (expected);
        });
    });


    
    describe('Divide', () => {
        var testData = [
        [10, 2, 5],
        [15, 3, 5],
        [0, 5, 0],
        [20, 0, Infinity], 
        [100, 20, 5],     
        [-12, 4, -3],       
        ];
    
        test.each(testData)('divide(%i, %i) should return %i', (a, b, expected) => {
        expect(calc.divide(a, b)).toBe(expected);
        });
    });

    var DTdata = [
        [8, 2, 4],
        [ 6, 2, 3],
        [60, 10, 6],
        [80, 8, 10]
    ]
    describe.each(DTdata) ('DT: add(%i, %i), Expected: %i', (a, b, expected) => {
        test(`returns ${calc.divide(a, b)}`, () => {
        expect (calc.divide(a, b)).toBe (expected);
        });
    });


});
