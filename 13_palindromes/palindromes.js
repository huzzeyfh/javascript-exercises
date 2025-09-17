const palindromes = function (str) {
    const cleanedStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    const reversedStr = cleanedStr.split('').reverse().join('');

    const check = (cleanedStr === reversedStr) ? true : false;
    return check;
};

// Do not edit below this line
module.exports = palindromes;

