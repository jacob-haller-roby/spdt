const color = (function (colors) {
    const fn = (code, str) => `\x1b[${code}m${str}\x1b[39m`;
    const obj = { grey: fn.bind(null, 90) };
    for (let i = 0; i < colors.length; i++) obj[colors[i]] = fn.bind(null, 30 + i);
    return obj;
})(['black', 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white']);

const generateTestFunc = (func) => {
    let failedTests = 0;
    let passedTests = 0;
    return {
        test: (inputs, expectedOutput, dontTransformInput) => {
            const inputArray = Array.isArray(inputs) || dontTransformInput ? inputs : [inputs];
            const output = func(...inputArray);
            const inputString = inputArray.join(', ');
            if (output !== expectedOutput) {
                failedTests++;
                console.error(
                    color.red(`\nInvalid output with inputs: ${inputString}.`) +
                    `\nExpected ${typeof expectedOutput} "${expectedOutput}" but got ${typeof output} "${output}"\n`
                );
                return;
            }
            passedTests++;
            console.log(
                color.green(`\nCorrect output!`) +
                `: inputs: ${inputString}. output: ${output}\n`,
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
