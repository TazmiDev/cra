const { findByCode, findByName, getAllProvinces, getCitiesByProvince, getAreasByCity } = require('./core/address');
const { getRandomAddress } = require('./core/random');
const { findHierarchy } = require('./core/hierarchy');
const { findByCodeRange } = require('./core/rangeSearch');
const { fuzzyMatchByName } = require('./core/fuzzyMatch');
const { exportTreeByProvinceCode } = require('./core/exportTree');
const { isString, isNumber, getRandomItem } = require('./utils');

module.exports = {
    findByCode,
    findByName,
    getAllProvinces,
    getCitiesByProvince,
    getAreasByCity,
    getRandomAddress,
    isString,
    isNumber,
    getRandomItem,
    findHierarchy,
    findByCodeRange,
    fuzzyMatchByName,
    exportTreeByProvinceCode,
};
