/*
    This function is called `getDayName`.  Again!

    This time, we want the function to work slightly differently.

    For `dayIndex` of values 1 through 7, it should behave exactly the same as in the previous problem.

    But this time, we also want it to output a day for values above 7. (values of 0 or lower, along with non-numbers should
    still result in "Invalid Input").

    If the value is above 7, we want the output to be equal to the remainder of the input when it is divided by 7.
    For example;
    1 = Sunday
    2 = Monday
    3 = Tuesday
    4 = Wednesday
    5 = Thursday
    6 = Friday
    7 = Saturday
    8 = Sunday // 8 divided by 7 has a remainder of 1
    9 = Monday // 9 divided by 7 has a remainder of 2
    10 = Tuesday // 10 divided by 7 has a remainder of 3
    ... etc.

    To accomplish this, you will need to use the "modulus" operator.  It's the percent sign: `%`.

    The modulus operator returns the remainder of a number divided by another number.  Here are some examples;

    const result = 3 % 2; // 3 divided by 2 has a remainder of 1.  `result`'s value will be set to `1`.
    const result = 34 % 5; // 34 divided by 5 has a remainder of 4.  `result`'s value will be set to `4`.

    Note: The tests include some randomized inputs, going as high as 7 million.  You won't be able to write 7 million
    if statements.  But that's where the modulus comes to the rescue.
 */
import generateTestFunc from '../test/generateTestFunc.js';
import {RandomString} from "../test/testUtils.js";


// TODO: Update this function!
const getDayName = (dayIndex) => {

    if (dayIndex % 7 === 1) {
        return ("Sunday")
    }

    if (dayIndex % 7 === 2) {
        return ('Monday')
    }

    if (dayIndex % 7 === 3) {
        return ('Tuesday')
    }

    if (dayIndex % 7 === 4) {
        return ('Wednesday')
    }

    if (dayIndex % 7 === 5) {
        return ('Thursday')
    }

    if (dayIndex % 7 === 6) {
        return ('Friday')
    }

    if (((dayIndex <= 0) % 7) +7 === 7) {
        return ('Saturday')
    }
    return 'Invalid Input'

    //FIXME: add your code here!
}

const problem5 = () => {
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
    test(71, "Sunday");
    test(7 * Math.floor(Math.random() * 20) + 2, "Monday");
    test(7 * Math.floor(Math.random() * 1000) + 6, "Friday");
    test(7 * Math.floor(Math.random() * 999999), "Saturday");
    test(0, "Invalid Input");
    test(Math.floor(Math.random()*20) - 20, "Invalid Input");
    test(RandomString(), "Invalid Input");
    logResults();
};

export default problem5;
