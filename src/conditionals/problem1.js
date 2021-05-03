/*
 *   This function is named `convertStringToNumber`, and it's supposed to do exactly that!
 *
 *   It takes an input variable named `numberString` and should output a number representation of that string.
 *
 *   E.g., if you call `convertStringToNumber("one");` it should output the number `1`.
 *
 *   The function only needs to work for single digit numbers (0 - 9).
 *
 *   If the function receives an invalid `numberString`, it should return the string "Invalid Input".
 *
 *   To accomplish this, you'll need to use `if` statements.  An `if` statement allows you to test a variables value and
 *   only execute code when it's value matches certain criteria.  To get you started, a single `if` statement is provided
 *   (but it doesn't do the right thing!).
 *
 *   Inside the `if` statement, you'll want to use comparator symbols to test the value of a variable.
 *
 *   === means "is equal to".  It will run the code if the two values compared are exactly the same.
 *   !== means "is not equal to".  It will run the code if the two values are different.
 */
import generateTestFunc from '../test/generateTestFunc.js';



// TODO: Update this function!
const convertStringToNumber = (numberString) => {
    //FIXME: Add your code here!
    if (numberString === 'one') {
        // the return statement ends the function with a value.
        // Once you hit a `return`, nothing else in the function will matter!  But the value you give to `return` will
        // available outside the function.

        // Check the problem description to figure out what the return value should be.
        return "this is how we return a value from the function! but this long string probably isn't what we want to return here...";
    }

    return 'this value will be returned if the above condition is not met!';
};

const problem1 = () => {
    // this function will test your code.
    // Do not modify this function, but you can look at it to see what it does!

    // It will throw an error if the function does not work correctly
    // It will output "Code ran successfully!" if the function does work correctly

    const { test, logResults } = generateTestFunc(convertStringToNumber);
    test('one', 1);
    test('two', 2);
    test('three', 3);
    test('four', 4);
    test('five', 5);
    test('six', 6);
    test('seven', 7);
    test('eight', 8);
    test('nine', 9);
    test('zero', 0);
    test('wrong', 'Invalid Input');
    test(1, 'Invalid Input');
    test(undefined, 'Invalid Input');
    logResults();
};

export default problem1;
