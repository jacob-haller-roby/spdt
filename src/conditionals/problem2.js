/*
    This function is called `getAverage` and is supposed to do exactly that!

    `getAverage` takes in 2 numbers as inputs and should return the average of those 2 numbers.

    E.g., calling `getAverage(2,5);` should return the average between 2 and 5, which is 3.5!

    If `getAverage` is called with inputs that are not numbers, it should return the string "Invalid Inputs".

    To test the input value types, you'll need to use the keyword `typeof`.  The function includes an example of how
    to use this keyword.
 */
import generateTestFunc from '../test/generateTestFunc.js';



// TODO: Update this function!
const getAverage = (number1, number2) => {
    // The existing code in this function is demonstration only.  Feel free to remove or comment it out if you like,
    // but it won't interfere with your work.

    // these are the four "primitive" types
    const exampleString = 'Hey sabrowski'; // this is a string
    const exampleNumber = 1; // this is a number!
    const exampleBoolean = true; // this is a boolean.  Booleans are just `true` or `false` values
    let exampleUndefined; // this variable is not set with any value!  It's type will be `undefined`.

    // Using the keyword `typeof` results in a string that names the type!
    const typeOfString = typeof exampleString; // "string"
    const typeOfNumber = typeof exampleNumber; // "number"
    const typeOfBoolean = typeof exampleBoolean; // "boolean"
    const typoeOfUndefined = typeof exampleUndefined; // "undefined"

    // console logs to demonstrate what the result of the `typeof` keyword looks like
    //console.log('type of exampleString is: ' + typeOfString);
    //console.log('type of exampleNumber is: ' + typeOfNumber);
    //console.log('type of exampleBoolean is: ' + typeOfBoolean);
    //console.log('type of exampleUndefined is: ' + typoeOfUndefined);

    // So now, your job is to use this `typeof` keyword to verify that the two inputs of this function (number1, number2)
    // are of the correct type.  You'll need more `if` statements for that, too!

    // Once you know that the inputs are the correct type, be sure to then return the average of the two inputs.

    //FIXME: Add your code here!

    if (("string" === typeof number1) || ('string' === typeof number2)){

        return ('Invalid Input')
    }

    if (('number' === typeof number1) || ('number' === typeof number2)){

        return ((number1 + number2) / 2 )
    }

};

const problem2 = () => {
    // this function will test your code.
    // Do not modify this function, but you can look at it to see what it does!

    // It will throw an error if the function does not work correctly
    // It will output "Code ran successfully!" if the function does work correctly
    const { test, logResults } = generateTestFunc(getAverage);

    test(['this is a string', 'another string'], 'Invalid Input');
    test([1, 'input 2 is a string'], 'Invalid Input');
    test(['input 1 is a string', 999], 'Invalid Input');
    test([1, 10], 5.5);
    test([100, 550], 325);
    test([0, 8], 4);
    test([-10, 10], 0);
    logResults();
};
export { getAverage };
export default problem2;
