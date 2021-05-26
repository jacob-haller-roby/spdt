/*
    Sometimes we want to do a unique operation on distinct pieces of an input value.  Loops are good for this!

    To make this easier, javascript gives us some metadata about variables;

    One important piece of metadata is the length of a string.  To get this value, we simply do `variableName.length`.

    E.g.
    const someString = "abc 123";
    const someStringLength = someString.length;
    console.log(someStringLength); // outputs `7` because there are 7 characters in `"abc 123"` (including white space).

    We can also get the character at a specific index within a string.  To do this we do `variableName.charAt(index)`.
    The input argument of `index` here represents the position of a character.

    NOTE:  `index` starts at 0, not 1.  That can be a bit confusing.

    E.g.
    const someString = "abc 123";
    const firstCharacter = someString.charAt(0);
    console.log(firstCharacter); // outputs `"a"`, the first character of `someString`;

    const thirdCharacter = someString(2);
    console.log(thirdCharacter); // outputs `"c"`, the third character of `someString`;


    PROBLEM:
    The below function is called "noZs".  As the name suggestions, this function tries to remove the character "z"
    from the input string.

    To do this, you'll need to use a loop to check every character within the input string.  If it is a "z", you should
    discard it.  Otherwise, it should be used to generate a new output value.

    E.g.
    noZs("abczz zz123") should return "abc 123".

    if the input value is not a string, the function should return "Invalid Input".


 */



import generateTestFunc from '../test/generateTestFunc.js';
import {RandomNumber, RandomString} from "../test/testUtils.js";



// TODO: Update this function!
const noZs = (inputString) => {
    //FIXME: Add your code here!

};

const problem4 = () => {
    // this function will test your code.
    // Do not modify this function, but you can look at it to see what it does!

    // It will throw an error if the function does not work correctly
    // It will output "Code ran successfully!" if the function does work correctly

    const { test, logResults } = generateTestFunc(noZs);
    test(RandomNumber(-10,10), "Invalid Input");
    test(undefined, "Invalid Input");
    test("abczz zz123", "abc 123");
    test("tzhzizzsz zizszz zhzzzazrzdzz ztzozz zrzzezzazdz,z zizsznzz'zztz zizztz?z", "this is hard to read, isn't it?")
    logResults();
};

export default problem4;
