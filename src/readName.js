import readInput from './readInput.js';

const readName = async () => {
    let name = await readInput("what's your name?");
    console.log('Your name is ' + name);
};

export default readName;
