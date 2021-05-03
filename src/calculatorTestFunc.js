import readInput from './readInput.js';

const calculatorTestFunc = async () => {
    let number1 = Number(await readInput('give me a number!'));
    let number2 = Number(await readInput('give me another number!'));
    let number3 = number1 + number2;
    let number4 = number3 * 10;

    console.log(number1 + '+' + number2 + '=' + number3);
    console.log('But' + ' ' + number4 + ', ' + 'is ten times as large');
};

export default calculatorTestFunc;
