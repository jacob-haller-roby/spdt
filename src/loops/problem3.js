/*
    Let's try another loop.

    This function is called `getSummation`, and is meant to work very similarly to `getFactorial`.  Except this time,
    we want the SUM of all numbers between 1 and n (the input value).  E.g.

    getSummation(5) should return 1+2+3+4+5 = 15
 */



import generateTestFunc from '../test/generateTestFunc.js';
import {RandomString} from "../test/testUtils.js";



// TODO: Update this function!
const getSummation = (n) => {
    //FIXME: Add your code here!

};

const problem3 = () => {
    // this function will test your code.
    // Do not modify this function, but you can look at it to see what it does!

    // It will throw an error if the function does not work correctly
    // It will output "Code ran successfully!" if the function does work correctly

    const { test, logResults } = generateTestFunc(getSummation);
    test(0, "Invalid Input");
    test(RandomString(), "Invalid Input");
    test(undefined, "Invalid Input");
    test(1,1);
    test(2, 3);
    test(3, 6);
    test(4, 10);
    test(5, 15);
    test(6,21);
    test(7,28);
    test(8,36);
    test(9,45);
    test(10,55);
    logResults();
};

export default problem3;
