/*
    So far, we've been using `if` statements to return values.  But sometimes we want to do some code inside an
    `if` statement without returning right away.

    In these situations, we often also need an `else` statement, to control the behavior that happens when the `if`
    condition is not met.

    Here's an example:

    const yearsUntilBeers = (name, age) => {

        let yearsToWait;

        if (age >= 21) {
            yearsToWait = 0;
        } else {
            yearsToWait = 21 - age;
        }

        const outputMessage = (name + " will have to wait " + yearsToWait + " years until they can order a beer!");
        return outputMessage;
    }

    The above function takes a person's name (string) and age (number) and outputs a message about when they will be of
    legal age to purchase a beer.  If their age is equal to or greater than 21, they have to wait 0 years (they can
    buy a beer today). Otherwise, we set the number of `yearsToWait` equal to their current age subtracted from 21.

    For the below problem, we're going to make a very similar function.  But for this problem, we're going to pretend to
    be in a different universe.  In this parallel dimension, the drinking age is still 21 for most people....
    except for anyone named "David".  People named David get special privileges and can start drinking at 16.

    Lucky them.

    HINT:  You can put `if` statements inside other `if` statements (or inside `else` statements!).
 */
import generateTestFunc from '../test/generateTestFunc.js';


// TODO: Update this function!
const yearsUntilBeers = (name, age) => {

    //FIXME: update this function so that anyone named 'David' has a special lower drinking age of 16
    // names will be given as a single word with the first letter capitalized
    let yearsToWait;

    if (age >= 21) {
        yearsToWait = 0;
    } else {
        yearsToWait = 21 - age;
    }


    const outputMessage = (name + " will have to wait " + yearsToWait + " years until they can order a beer!");
    return outputMessage;
}

const problem10 = () => {
    // this function will test your code.
    // Do not modify this function, but you can look at it to see what it does!

    // It will throw an error if the function does not work correctly
    // It will output "Code ran successfully!" if the function does work correctly
    const { test, logResults } = generateTestFunc(yearsUntilBeers);

    test(['Bob', 18], "Bob will have to wait 3 years until they can order a beer!");
    test(['Janette', 34], "Janette will have to wait 0 years until they can order a beer!");
    test(['Karen', 69], "Karen will have to wait 0 years until they can order a beer!");
    test(['Gonzalo', 5], "Gonzalo will have to wait 16 years until they can order a beer!");
    test(['David', 15], "David will have to wait 1 years until they can order a beer!");
    test(['David', 17], "David will have to wait 0 years until they can order a beer!");

    logResults();
};

export default problem10;
