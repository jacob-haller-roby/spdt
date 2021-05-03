import readInput from "./readInput.js";

const readName = async () => {
    let name = await readInput("what's your name?");
    console.log("Your name is " + name);
};

const main = async () => {
    let number1 = Number(await readInput("give me a number!"));
    let number2 = Number(await readInput("give me another number!"));
    let number3;
    // Do something here....

    console.log(number1 + "+" + number2 + "=" + number3);

}


await main();
process.exit(0);
