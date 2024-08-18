const data = require('../../data/data.json');

/**
 * Find addresses within a code range.
 * @param {string} startCode - The start of the code range.
 * @param {string} endCode - The end of the code range.
 * @returns {Array} - The list of addresses within the range.
 */
const findByCodeRange = (startCode, endCode) => {
    const results = [];

    const isInRange = (code) => code >= startCode && code <= endCode;

    data.forEach(province => {
        if (isInRange(province.code)) results.push({ name: province.province, code: province.code });

        province.citys.forEach(city => {
            if (isInRange(city.code)) results.push({ name: `${province.province}-${city.city}`, code: city.code });

            city.areas.forEach(area => {
                if (isInRange(area.code)) results.push({ name: `${province.province}-${city.city}-${area.area}`, code: area.code });
            });
        });
    });

    return results;
};

module.exports = {
    findByCodeRange,
};
