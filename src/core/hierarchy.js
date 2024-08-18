const data = require('../../data/data.json');

/**
 * Find the hierarchy of an address by its code or name.
 * @param {string|Array<string>} query - The code or name of the address, or an array of them.
 * @returns {Object|Array<Object>|null} - The hierarchy object, an array of objects if multiple matches, or null.
 */
const findHierarchy = (query) => {
    const results = [];

    const findHierarchyBySingleCodeOrName = (input) => {
        for (const province of data) {
            if (province.code === input || province.province.includes(input)) {
                return { province: province.province, city: null, area: null };
            }
            for (const city of province.citys) {
                if (city.code === input || city.city.includes(input)) {
                    return { province: province.province, city: city.city, area: null };
                }
                for (const area of city.areas) {
                    if (area.code === input || area.area.includes(input)) {
                        return {
                            province: province.province,
                            city: city.city,
                            area: area.area,
                        };
                    }
                }
            }
        }
        return null;
    };

    if (Array.isArray(query)) {
        query.forEach(input => {
            const result = findHierarchyBySingleCodeOrName(input);
            if (result) results.push(result);
        });
        return results.length === 1 ? results[0] : (results.length > 0 ? results : null);
    } else {
        return findHierarchyBySingleCodeOrName(query);
    }
};

module.exports = {
    findHierarchy,
};
