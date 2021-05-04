/*
    This function is called `getDayName`.

    It takes an input called `dayIndex`.  This input should be a number between 1 and 7.

    This function should output one of the 7 days of the week, depending on which number it is given.
    1 = Sunday, 2 = Monday, etc.  Day names should all have a capital first letter.

    If the function receives a `dayIndex` input that is not a number, it should return "Invalid Input".

    If the function receives a `dayIndex` input that is a number, but is less than 1 or greater than 7, it should
    also return "Invalid Input".
 */
import generateTestFunc from '../test/generateTestFunc.js';
import {RandomString} from "../test/testUtils.js";


// TODO: Update this function!
const getDayName = (dayIndex) => {

    //FIXME: add your code here!
}

const problem6 = () => {
    // this function will test your code.
    // Do not modify this function, but you can look at it to see what it does!

    // It will throw an error if the function does not work correctly
    // It will output "Code ran successfully!" if the function does work correctly
    const { test, logResults } = generateTestFunc(getDayName);

    test(1, "Sunday");
    test(2, "Monday");
    test(3, "Tuesday");
    test(4, "Wednesday");
    test(5, "Thursday");
    test(6, "Friday");
    test(7, "Saturday");
    test(8, "Invalid Input");
    test(Math.floor(Math.random()*20) + 8, "Invalid Input");
    test(0, "Invalid Input");
    test(Math.floor(Math.random()*20) - 20, "Invalid Input");
    test(RandomString(), "Invalid Input");
    logResults();
};

export default problem6;
