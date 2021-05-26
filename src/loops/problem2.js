/*
    Another typical use for loops is to do calculations for us that require repetitions.

    For this problem, use a while loop to calculate the `factorial` of the input.  In mathematics, a factorial is
    a number multipled by every positive number that is less than itself.

    E.g.
    3 factorial = 3*2*1 = 6
    5 factorial = 5*4*3*2*1 = 120
    10 factorial = 10*9*8*7*6*5*4*3*2*1 = 3628800

    As in other problems, this function should return "Invalid Input" if the value of factorial is either a non-positive
    number, or not a number at all.

    Hint: You're given a variable input named `factorial`, but you'll need at least 2 additional variables to complete
    this problem.  You can delcare a new variable by writing `let someName = initialValue`.  Where `someName` can be
    replaced by whatever name you want to give the variable and `initialValue` can be replaced by whatever you want the
    initial value of that variable to be.


 */



import generateTestFunc from '../test/generateTestFunc.js';
import {RandomString} from "../test/testUtils.js";



// TODO: Update this function!
const getFactorial = (factorial) => {
    //FIXME: Add your code here!

};

const problem2 = () => {
    // this function will test your code.
    // Do not modify this function, but you can look at it to see what it does!

    // It will throw an error if the function does not work correctly
    // It will output "Code ran successfully!" if the function does work correctly

    const { test, logResults } = generateTestFunc(getFactorial);
    test(0, "Invalid Input");
    test(RandomString(), "Invalid Input");
    test(undefined, "Invalid Input");
    test(1,1);
    test(2, 2);
    test(3, 6);
    test(4, 24);
    test(5, 120);
    test(6,720);
    test(10,3628800);
    logResults();
};

export default problem2;
