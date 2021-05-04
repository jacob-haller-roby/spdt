/*
    This function is called `getDaysInMonth`.

    Like previous questions, we want to first validate the input.  It needs to be a number, and be between 1 and 12.

    If it is not a number, or is a number out of range, the function should return "Invalid Input".

    For valid inputs, the function should return the number of days in that month.

    E.g., `getDaysInMonth(1)` should return the number `31` because January has 31 days.

    Assume that it is not a leap year when determining the day count for February.
 */
import generateTestFunc from '../test/generateTestFunc.js';
import {RandomString} from "../test/testUtils.js";


// TODO: Update this function!
const getDaysInMonth = (monthIndex) => {

    //FIXME: add your code here!
}

const problem7 = () => {
    // this function will test your code.
    // Do not modify this function, but you can look at it to see what it does!

    // It will throw an error if the function does not work correctly
    // It will output "Code ran successfully!" if the function does work correctly
    const { test, logResults } = generateTestFunc(getDaysInMonth);
    test(1,31);
    test(2,28);
    test(3,31);
    test(4, 30);
    test(5, 31);
    test(6, 30);
    test(7, 31);
    test(8, 31);
    test(9, 30);
    test(10, 31);
    test(11, 30);
    test(12, 31);

    test(0, "Invalid Input");
    test(13, "Invalid Input");
    test(Math.floor(Math.random() * 100) - 100, "Invalid Input");
    test(Math.floor(Math.random() * 100) + 13, "Invalid Input");
    test("string input", "Invalid Input");
    test(RandomString(), "Invalid Input");

    logResults();
};

export {getDaysInMonth};
export default problem7;
