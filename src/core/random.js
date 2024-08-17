const data = require('../../data/data.json');

/**
 * Get a random item from an array.
 * @param {Array} arr - The array to choose from.
 * @returns {*} - A random item from the array.
 */
function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

/**
 * Generate a random address.
 * @param {number} level - The level of the address (1: Province, 2: City, 3: District).
 * @returns {Object} - The generated address object.
 */
function getRandomAddress(level = 3) {
    const province = getRandomItem(data);

    if (level === 1) {
        return { name: province.province, code: province.code };
    }

    const city = getRandomItem(province.citys);
    if (level === 2) {
        return { name: `${province.province}-${city.city}`, code: city.code };
    }

    const area = getRandomItem(city.areas);
    return { name: `${province.province}-${city.city}-${area.area}`, code: area.code };
}

module.exports = {
    getRandomAddress,
};
