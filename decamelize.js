/**
 * Convert a camelized string into a lowercased one with a custom separator: unicornRainbow → unicorn_rainbow.
 * @param str
 * @param sep
 * @returns {string}
 */
module.exports = (str, sep = '-') => {
    if (typeof str !== 'string') {
        throw new TypeError('Exported a string')
    }
    return str
        .replace(/([a-z\d])([A-Z])/g, `$1${sep}$2`)
        .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, `$1${sep}$2`)
        .toLowerCase();
}