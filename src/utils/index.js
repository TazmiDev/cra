/**
 * Utility function to check if a value is a string.
 * @param {*} value - The value to check.
 * @returns {boolean} - True if the value is a string, otherwise false.
 */
function isString(value) {
    return typeof value === 'string' || value instanceof String;
}

/**
 * Utility function to check if a value is a number.
 * @param {*} value - The value to check.
 * @returns {boolean} - True if the value is a number, otherwise false.
 */
function isNumber(value) {
    return typeof value === 'number' && isFinite(value);
}

module.exports = {
    isString,
    isNumber,
};
