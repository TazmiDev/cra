/**
 * Check if a value is a string.
 * @param {*} value - The value to check.
 * @returns {boolean} - True if the value is a string.
 */
function isString(value) {
    return typeof value === 'string' || value instanceof String;
}

/**
 * Check if a value is a number.
 * @param {*} value - The value to check.
 * @returns {boolean} - True if the value is a number.
 */
function isNumber(value) {
    return typeof value === 'number' && isFinite(value);
}

/**
 * Get a random item from an array.
 * @param {Array} arr - The array to choose from.
 * @returns {*} - A random item from the array.
 */
function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

module.exports = {
    isString,
    isNumber,
    getRandomItem,
};
