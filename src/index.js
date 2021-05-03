import readInput from "./readInput.js";

const readName = async () => {
    let name = await readInput("what's your name?");
    console.log("Your name is " + name);
};

const main = async () => {
    let number1 = Number(await readInput("give me a number!"));
    let number2 = Number(await readInput("give me another number!"));
    let number3 = number1 + number2;
    let number4 = number3 * 10



    console.log(number1 + "+" + number2 + "=" + number3);
    console.log("But" + " " + number4 + ", " + "is ten times as large")


}


await main();
process.exit(0);
