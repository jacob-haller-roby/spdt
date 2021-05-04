/*
    This function is called `tripleEquals`.

    It accepts 3 input numbers.  It's job is to determine if all 3 of the numbers are equal to each other.

    If all 3 numbers are the same, it should output "All 3 are the same".
    If all 3 numbers are unique, it should output "All 3 numbers are unique".
    If any 2 of the numbers are the same, but the third is unique, it should output "2 are the same, but the third is unique".

    HINT:  You can use more than one logical operator (`&&` and `||`) inside a single `if` statement.

    Example:

    ```
    if (name === "David" || name === "Jake" || name === "Gonzalo" || name === "Noah" || name === "Jennifer") {
        console.log('get ready for dnd, nerd');
    }
    ```
    (Glad that you and Loftin have the same first name, that was getting to be a long line of code.)



    BONUS POINTS: It's possible to solve this problem using three `if` statements.  But there is a better way!

    Take a look at this example code;

    ```
    if (name === "David") {
        return "hi David!";
    }
    return "you're not David... go away."
    ```

    Because we gave a `return` inside of the `if` block, the only way to reach the last line is if the `name === "David"`
    condition was `false`.  That means we already know that `name !== "David"` for every line after that `if` block!

    And that means we didn't need to add an `if (name !== "David")` line.

    See if you can do something similar in order to write this function using only 2 `if` statements instead of 3.

 */
import generateTestFunc from '../test/generateTestFunc.js';


// TODO: Update this function!
const tripleEquals = (number1, number2, number3) => {

    //FIXME: add your code here!
    if (number1 === number2 && number1 === number3){
        return "All 3 are the same"
    }

    if (number1 === number2 || number1 === number3 || number2 === number3){
        return "2 are the same, but the third is unique"
    }
    return 'All 3 numbers are unique'

}

const problem4 = () => {
    // this function will test your code.
    // Do not modify this function, but you can look at it to see what it does!

    // It will throw an error if the function does not work correctly
    // It will output "Code ran successfully!" if the function does work correctly
    const randomNumber1 = Math.floor(Math.random() * 100);
    const randomNumber2 = Math.floor(Math.random() * 900) + 101;
    const randomNumber3 = Math.floor(Math.random() * 9000) + 1001;
    const { test, logResults } = generateTestFunc(tripleEquals);
    test([1,1,1], "All 3 are the same");
    test([993,993,993], "All 3 are the same");
    test([randomNumber1, randomNumber1, randomNumber1], "All 3 are the same");

    test([1,2,3], "All 3 numbers are unique");
    test([randomNumber1, randomNumber2, randomNumber3], "All 3 numbers are unique");

    test([1,1,2], "2 are the same, but the third is unique");
    test([2,1,2], "2 are the same, but the third is unique");
    test([1,3,3], "2 are the same, but the third is unique");

    test([randomNumber1,randomNumber1,randomNumber2], "2 are the same, but the third is unique");
    test([randomNumber1,randomNumber3,randomNumber1], "2 are the same, but the third is unique");
    test([randomNumber3,randomNumber2,randomNumber2], "2 are the same, but the third is unique");


    logResults();
};

export default problem4;
