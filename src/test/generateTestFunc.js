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
                    `\nInvalid output with inputs: ${inputString}.  \nExpected ${typeof expectedOutput} "${expectedOutput}" but got ${typeof output} "${output}"\n`
                );
                return;
            }
            passedTests++;
            console.log(`\nCorrect output!: inputs: ${inputString}. output: ${output}\n`);
            return;
        },
        logResults: () => {
            console.log(`${passedTests} passed out of ${passedTests + failedTests} total tests`);
            if (failedTests === 0) {
                console.log('Code passed all tests! :D');
            } else {
                console.error(`${failedTests} tests failed! :(`);
            }
        },
    };
};

export default generateTestFunc;
