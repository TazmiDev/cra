const data = require('../../data/data.json');

/**
 * Fuzzy match addresses by name.
 * @param {string} inputName - The partial or misspelled name.
 * @returns {Array} - The list of similar addresses.
 */
const fuzzyMatchByName = (inputName) => {
    const results = [];

    const includesIgnoreCase = (name, input) => name.toLowerCase().includes(input.toLowerCase());

    data.forEach(province => {
        if (includesIgnoreCase(province.province, inputName)) {
            results.push({ name: province.province, code: province.code });
        }

        province.citys.forEach(city => {
            if (includesIgnoreCase(city.city, inputName)) {
                results.push({ name: `${province.province}-${city.city}`, code: city.code });
            }

            city.areas.forEach(area => {
                if (includesIgnoreCase(area.area, inputName)) {
                    results.push({ name: `${province.province}-${city.city}-${area.area}`, code: area.code });
                }
            });
        });
    });

    return results;
};

module.exports = {
    fuzzyMatchByName,
};
