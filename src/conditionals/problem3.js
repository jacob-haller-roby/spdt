/*
    For this problem, we're going to import your answer to problem 2 and re-use your solution! Awesome! We've already
    done half of the work for this problem!

    This function is called `isAverageGreaterThan`.  It takes in 3 numbers as inputs.

    This function should take the average of the first two inputs (number1, number2) and find their average.

    Next, it should determine whether the average of those 2 inputs is greater than the third input (number3).

    If the average is greater than number3, this function should return the boolean `true.  Otherwise, it should
    return the boolean `false`.

    HINT:  There's a symbol or keyword that you'll need to use but that I didn't tell you about.
    Try to extrapolate what would make sense.  :)

 */
import generateTestFunc from '../test/generateTestFunc.js';
import { getAverage } from './problem2.js';


// TODO: Update this function!
const isAverageGreaterThan = (number1, number2, number3) => {
    const average = getAverage(number1, number2);
    //FIXME: Add your code here!
};

const problem3 = () => {
    // this function will test your code.
    // Do not modify this function, but you can look at it to see what it does!

    // It will throw an error if the function does not work correctly
    // It will output "Code ran successfully!" if the function does work correctly
    const { test, logResults } = generateTestFunc(isAverageGreaterThan);

    test([1,2,3], false);
    test([0,10, 6], false);
    test([100,200, 150], false);
    test([100,200, 149], true);
    test([0,-10, -6], true);

    logResults();
};

export default problem3;
