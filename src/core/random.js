const { loadData } = require('./dataLoader');
const data = loadData('../../data/data.json'); // Adjust path as necessary
const { getRandomItem } = require('../utils');

/**
 * Generate a random address.
 * @param {number} level - The address level (1: Province, 2: City, 3: District).
 * @returns {Object} - The generated address object.
 */
const getRandomAddress = (level = 3) => {
    const province = getRandomItem(data);

    if (level === 1) {
        return { name: province.province, code: province.code };
    }

    const city = getRandomItem(province.citys);
    if (level === 2) {
        return { name: `${province.province} - ${city.city}`, code: city.code };
    }

    const area = getRandomItem(city.areas);
    return { name: `${province.province} - ${city.city} - ${area.area}`, code: area.code };
};

module.exports = {
    getRandomAddress,
};
