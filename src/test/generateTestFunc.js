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
