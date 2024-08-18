const data = require('../../data/data.json');

/**
 * Export address tree structure for a given province code.
 * @param {string} provinceCode - The province code.
 * @returns {Object|null} - The tree structure or null.
 */
const exportTreeByProvinceCode = (provinceCode) => {
    const province = data.find(p => p.code === provinceCode);
    if (!province) return null;

    return {
        name: province.province,
        code: province.code,
        cities: province.citys.map(city => ({
            name: city.city,
            code: city.code,
            areas: city.areas.map(area => ({
                name: area.area,
                code: area.code,
            })),
        })),
    };
};

module.exports = {
    exportTreeByProvinceCode,
};
