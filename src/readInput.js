const readInput = async (prompt) => {
    return new Promise((res, rej) => {
        console.log(prompt);
        process.stdin.once('data', (chunk) => {
            res(chunk.toString());
        });
    });
};

export default readInput;
