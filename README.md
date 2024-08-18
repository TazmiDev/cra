# CRA (Chinese Region Address)

CRA is a Node.js and Vue.js compatible library that provides functionalities for generating and querying Chinese region addresses, including provinces, cities, and districts.

[简体中文](README_zh.md)
## Features

- **Get Address by Code or Name**: Retrieve the full address information by providing either the administrative code or name.
- **Random Address Generation**: Generate a random province, city, or district-level address.
- **Hierarchy Lookup**: Find the hierarchical relationship of a region by its code or name, supporting both single and multiple queries.
- **Fuzzy Name Matching**: Perform fuzzy matching to find regions that closely match a given name.
- **Tree Structure Export**: Export the entire tree structure of provinces, cities, and districts based on a given province code.
- **Modular Design**: Easily extendable and maintainable codebase, following best practices.

## Installation

Install the package using npm:

```bash
npm install cra-z
```

## Usage

### In a Node.js Project

```javascript
const cra = require('cra-z');

// Get Address by Name
const addressByName = cra.findByName('北京市');
console.log('Address found by name:', addressByName);

// Get Hierarchy by Code
const hierarchyByCode = cra.findHierarchy('350200');
console.log('Hierarchy found by code:', hierarchyByCode);

// Fuzzy Match by Name
const fuzzyResults = cra.fuzzyMatchByName('柳州');
console.log('Fuzzy match results:', fuzzyResults);

// Export Tree by Province Code
const tree = cra.exportTreeByProvinceCode('350000');
console.log('Tree structure:', tree);
```

### In a Vue.js Project

```javascript
import cra from 'cra-z';

// Use similar methods as in Node.js
const addressByName = cra.findByName('厦门市');
console.log('Address found by name:', addressByName);
```

### TypeScript Support
The library includes TypeScript type definitions. You can use it directly in a TypeScript project.

## Contributing
Contributions are welcome! Please follow the standard coding guidelines and ensure all tests pass before submitting a pull request.

## License
See the LICENSE file for details.