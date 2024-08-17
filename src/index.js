const { findByCode, findByName } = require('./core/address');
const { getRandomAddress } = require('./core/random');

/**
 * CRA-Z module with address lookup and random generation functionalities.
 */
const cra = {
    /**
     * Get address by query (code or name).
     * @param {string} query - The code or name of the address.
     * @returns {Object|Array|null} - The address object or array of objects, or null if not found.
     */
    getAddress(query) {
        if (/^\d+$/.test(query)) {
            return findByCode(query);
        } else {
            return findByName(query);
        }
    },

    /**
     * Generate a random address.
     * @param {number} [level=3] - The level of the address (1: Province, 2: City, 3: District).
     * @returns {Object} - The generated address object.
     */
    generateRandomAddress(level = 3) {
        return getRandomAddress(level);
    }
};

module.exports = cra;
