/*

 So far, we've been writing functions that execute linearly;  E.g., The code executes one line at a time, in order.

 But often, we want to repeat bits of code multiple times in order to get the result we want.  To do this, we use "loops".

 The first type of loop we are going to use is called a `while` loop.  Here is a simple example;

 ```
 let count = 0;
 while (count < 10) {
    console.log("loop #" + count);
    count = count + 1;
 }
 console.log("loop finished!");
 return;
 ```

 Let's walk through this example code;

 `let count = 0;` here we initialize a new variable named `count` and set it's initial value to the number 0.

 `while (count < 10) {`  This is the start of our loop.  `while` loops will repeat the code in their `{ ... }` brackets
 for as long as their condition is true.  E.g., when the code reaches the end of the `{ ... }`, it will check to see if
 `count < 10` is true.  If it is true, it will repeat the code within the brackets.  If it is false, it will leave the
 loop, and continue with the remaining code.

 `count = count + 1;`  here we are updating the value of `count`, increasing it by 1.  This is a critical step! If we
 don't update the `count` variable, then `count < 10` will remain true forever and the code will get stuck here in an
 infinite loop!  However, since we are incrementing `count` by 1 each time we go through the loop, it will eventually
 grow to a value above `10`, causing the `count < 10` conditional to be false, and thus allowing the code to continue.

 You can try it yourself, but as a quick explanation;  The above code will output the following:

 ```
 loop #0
 loop #1
 loop #2
 loop #3
 loop #4
 loop #5
 loop #6
 loop #7
 loop #8
 loop #9
 loop finished!
 ```

 PROBLEM DESCRIPTION

 For this first loop problem, write a simple `while` loop that causes the output to be the same as the 20 repetitions of the input.

 E.g. `repeat20Times("repeat ")` should return the string "repeat repeat repeat repeat repeat repeat repeat repeat repeat repeat repeat repeat repeat repeat repeat repeat repeat repeat repeat repeat ".

 Remember that you can combine strings using the `+` operator.
 E.g.
 ```
 let stringOne = "combine this ";
 let stringTwo = "and that";
 let stringThree = stringOne + stringTwo;
 console.log(stringThree); // "combine this and that";
 ```
 */



import generateTestFunc from '../test/generateTestFunc.js';



// TODO: Update this function!
const repeat20Times = () => {
    //FIXME: Add your code here!

};

const problem1 = () => {
    // this function will test your code.
    // Do not modify this function, but you can look at it to see what it does!

    // It will throw an error if the function does not work correctly
    // It will output "Code ran successfully!" if the function does work correctly

    const { test, logResults } = generateTestFunc(repeat20Times);
    test('repeat ', "repeat repeat repeat repeat repeat repeat repeat repeat repeat repeat repeat repeat repeat repeat repeat repeat repeat repeat repeat repeat ");
    test("hummina", "humminahumminahumminahumminahumminahumminahumminahumminahumminahumminahumminahumminahumminahumminahumminahumminahumminahumminahumminahummina")
    logResults();
};

export default problem1;
