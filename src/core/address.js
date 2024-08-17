const data = require('../../data/data.json');

/**
 * Find address by code.
 * @param {string} code - The code of the address.
 * @returns {Object|null} - The address object or null if not found.
 */
function findByCode(code) {
    for (const province of data) {
        if (province.code === code) return { name: province.province, code: province.code };

        for (const city of province.citys) {
            if (city.code === code) return { name: `${province.province}-${city.city}`, code: city.code };

            for (const area of city.areas) {
                if (area.code === code) {
                    return { name: `${province.province}-${city.city}-${area.area}`, code: area.code };
                }
            }
        }
    }
    return null;
}

/**
 * Find address by name.
 * @param {string} name - The name of the address.
 * @returns {Object|Array|null} - The address object, array of objects if multiple matches, or null if not found.
 */
function findByName(name) {
    let results = [];

    for (const province of data) {
        if (province.province.includes(name)) results.push({ name: province.province, code: province.code });

        for (const city of province.citys) {
            if (city.city.includes(name)) results.push({ name: `${province.province}-${city.city}`, code: city.code });

            for (const area of city.areas) {
                if (area.area.includes(name)) {
                    results.push({ name: `${province.province}-${city.city}-${area.area}`, code: area.code });
                }
            }
        }
    }
    return results.length === 1 ? results[0] : results.length > 1 ? results : null;
}

module.exports = {
    findByCode,
    findByName,
};
