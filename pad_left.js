module.exports = function padding(str, len, pre) {
    let result = str;
    if (typeof str !== 'string') {
        throw new TypeError('Please input string')
    }
    if (pre.toString().length !== 1) {
        throw new RangeError('Please input 1 length')
    }
    if (len === undefined) {
        throw new TypeError('Please input number')
    }
    if (str.toString().length >= len) {
        return str
    }
    for (let i = 0; i < (len - str.toString().length); i++) {
        result = `${pre}${result}`
    }
    return result;
}

