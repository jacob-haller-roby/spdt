import readInput from "./readInput";

const main = async () => {
    let name = await readInput("what's your name?");
    console.log("Your name is " + name);
};


await main();
process.exit();

