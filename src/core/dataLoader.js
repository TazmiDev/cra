const fs = require('fs');
const path = require('path');

/**
 * Load JSON data from a file.
 * @param {string} filePath - Path to the JSON file.
 * @returns {Array} - The loaded data array.
 */
function loadData(filePath) {
    const fullPath = path.resolve(__dirname, filePath);
    const data = fs.readFileSync(fullPath, 'utf-8');
    return JSON.parse(data);
}

module.exports = {
    loadData,
};
