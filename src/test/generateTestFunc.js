const applyColorCode = (code) => (str) => `\x1b[${code}m${str}\x1b[39m`;

const color = {
    black: applyColorCode(30),
    red: applyColorCode(31),
    green: applyColorCode(32),
    yellow: applyColorCode(33),
    blue: applyColorCode(34),
    magenta: applyColorCode(35),
    cyan: applyColorCode(36),
    white: applyColorCode(37),
    grey: applyColorCode(90),
};

const generateTestFunc = (func) => {
    let failedTests = 0;
    let passedTests = 0;
    return {
        test: (inputs, expectedOutput, dontTransformInput) => {
            const inputArray = Array.isArray(inputs) || dontTransformInput ? inputs : [inputs];
            const output = func(...inputArray);
            const inputString = inputArray.map(input => `${typeof input} "${input}"`).join(', ');
            if (output !== expectedOutput) {
                failedTests++;
                console.error(
                    color.red(`\nTest Failed.`) +
                    `\ninputs: ${inputString}` +
                    `\noutput: Expected ${typeof expectedOutput} "${expectedOutput}" but got ${typeof output} "${output}"\n`
                );
                return;
            }
            passedTests++;
            console.log(
                color.green(`\nTest Passed!`) +
                `: \ninputs: ${inputString}. \noutput: ${typeof output} "${output}"\n`,
                );
            return;
        },
        logResults: () => {
            console.log(`${passedTests} passed out of ${passedTests + failedTests} total tests`);
            if (failedTests === 0) {
                console.log(color.green('Code passed all tests! :D'));
            } else {
                console.error(color.red(`${failedTests} tests failed! :(`));
            }
        },
    };
};

export default generateTestFunc;
