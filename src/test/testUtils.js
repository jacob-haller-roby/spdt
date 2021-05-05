export const RandomString = () => {
    let string = '';
    let length = Math.floor(Math.random() * 20);
    for(let i = 0; i < length; i++) {
        // ascii 65 - 122
        const charCode = Math.floor(Math.random() * (123-65)) + 65;
        string += String.fromCharCode(charCode);
    }
    return string;
}

export const RandomNumber = (min, max) => {
    const range = Math.abs(max - min);
    return Math.floor(Math.random() * range) + min;
}