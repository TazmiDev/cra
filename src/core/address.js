const { loadData } = require('./dataLoader');
const data = loadData('../../data/data.json'); // Adjust path as necessary

/**
 * Find address by code.
 * @param {string|string[]} code - The address code(s).
 * @returns {Object|Array|null} - The address object, array of objects if multiple matches, or null.
 */
const findByCode = (code, dataset = data, prefix = '') => {
    if (Array.isArray(code)) {
        return code.map(c => findByCode(c, dataset)).filter(Boolean);
    }

    for (const item of dataset) {
        const name = prefix ? `${prefix} - ${item.province || item.city || item.area}` : item.province || item.city || item.area;
        if (item.code === code) return { name, code: item.code };
        if (item.citys || item.areas) {
            const result = findByCode(code, item.citys || item.areas, name);
            if (result) return result;
        }
    }
    return null;
};


/**
 * Find address by name.
 * @param {string|string[]} name - The name(s) of the address.
 * @returns {Object|Array|null} - The address object, array of objects if multiple matches, or null.
 */
function findByName(name) {
    if (Array.isArray(name)) {
        return name.map(n => findByName(n)).filter(Boolean);
    }

    const results = [];

    data.forEach(province => {
        if (province.province.includes(name)) {
            results.push({ name: province.province, code: province.code });
        }

        province.citys.forEach(city => {
            if (city.city.includes(name)) {
                results.push({ name: `${province.province}-${city.city}`, code: city.code });
            }

            city.areas.forEach(area => {
                if (area.area.includes(name)) {
                    results.push({ name: `${province.province}-${city.city}-${area.area}`, code: area.code });
                }
            });
        });
    });

    return results.length === 0 ? null : (results.length === 1 ? results[0] : results);
}


/**
 * Get all provinces' names and codes.
 * @returns {Array} - Array of province objects.
 */
const getAllProvinces = () => {
    return data.map(province => ({
        name: province.province,
        code: province.code
    }));
};

/**
 * Get all cities of a specific province.
 * @param {string} provinceCode - The province code.
 * @returns {Array|null} - Array of city objects or null.
 */
const getCitiesByProvince = (provinceCode) => {
    const province = data.find(p => p.code === provinceCode);
    return province ? province.citys.map(city => ({
        name: city.city,
        code: city.code
    })) : null;
};

/**
 * Get all areas of a specific city.
 * @param {string} cityCode - The city code.
 * @returns {Array|null} - Array of area objects or null.
 */
const getAreasByCity = (cityCode) => {
    for (const province of data) {
        const city = province.citys.find(c => c.code === cityCode);
        if (city) {
            return city.areas.map(area => ({
                name: area.area,
                code: area.code
            }));
        }
    }
    return null;
};

module.exports = {
    findByCode,
    findByName,
    getAllProvinces,
    getCitiesByProvince,
    getAreasByCity,
};
