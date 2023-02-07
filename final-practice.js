
// problem 1
// made a function with peraMeter and variable then also validation the type of.
function mindGame(number) {

    if (typeof number !== 'number') {
        return "provide valid input"
    }

    else {

        let math = (number * 3);
        result1 = math + 10;
        result2 = result1 / 2;
        mainResult = result2 - 5;

        return mainResult;

    }
}
const num1 = mindGame(5);
console.log(num1);
const num2 = mindGame(50);
console.log(num2);
const num3 = mindGame(33);
console.log(num3);



// problem 2
// for finding even or odd using function and also did validation.
function evenOdd(str) {
    if (typeof str !== 'string') {
        return "provide valid input"
    }
    else {

        if (str.length % 2 == 0) {
            return 'even';
        }
        else {
            return 'Odd';
        }
    }
}
const findOut1 = evenOdd('Phero');
console.log(findOut1);
const findOut2 = evenOdd('Batch7');
console.log(findOut2);
const findOut3 = evenOdd('chatgpt');
console.log(findOut3);



// problem 3
// for find a number which have peraMeter and did an operation.
function isLGSeven(numbers) {
    if (typeof numbers !== 'number') {
        return "provide valid input"
    }

    else {
        operation = numbers - 7;

        if (operation <= 7) {
            return operation;
        }
        else {
            return numbers * 2;
        }

    }

}
const InputNumber1 = isLGSeven(6)
console.log(InputNumber1);
const InputNumber2 = isLGSeven(-15)
console.log(InputNumber2);
const InputNumber3 = isLGSeven(15)
console.log(InputNumber3);



// problem 4
//  by separate all negative value to an array variable and using condition for making output bad and good data
function findingBadData(array) {
    if (typeof Array.isArray(array) === "false") {
        return " provide an array";
    }
    else {
        let Array = 0;
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            if (element < 0) {
                Array++;
            }
        }
        return Array;

    }
}
const BadData1 = findingBadData([1, 2, 5])
console.log(BadData1);
const BadData2 = findingBadData([2, -5, -7, -13])
console.log(BadData2);
const BadData3 = findingBadData([-4, -9, -5, -33, -55])
console.log(BadData3);



// problem 5

// taking peraMeter with variable and did the operation with if else and return. 
function gemsToDiamond(gem1, gem2, gem3) {

    if (typeof (gem1,gem2,gem3) !== 'number') {
        return "provide valid input"
    }
    else {

        const first = gem1 * 21;
        const second = gem2 * 32;
        const third = gem3 * 43;

        result = first + second + third;
        if (result > 1000 * 2) {
            let a = Math.abs(result - 2000);
            return a;
        }
        else {
            return result;
        }
    }

}
const friends1 = gemsToDiamond(1, 1, 1);
console.log(friends1);
const friends2 = gemsToDiamond(20, 200, 50);
console.log(friends2);
const friends3 = gemsToDiamond(100, 5, 1);
console.log(friends3);


