# CRA (Chinese Region Address)

CRA is a Node.js and Vue.js compatible library that provides functionalities for generating and querying Chinese region addresses, including provinces, cities, 和 districts.

## Features

- **Get Address by Code or Name**: Retrieve the full address information by providing either the administrative code or name.
- **Random Address Generation**: Generate a random province, city, or district-level address.
- **Modular Design**: Easily extendable and maintainable codebase, following best practices.

## Installation

Install the package using npm:

```bash
npm install cra-z
```

## Usage

In a Node.js Project

```javascript
const cra = require('cra-z');

// Get address by code or name
console.log(cra.getAddress('330102')); // { name: '浙江省-杭州市-上城区', code: '330102' }

// Generate a random district-level address
console.log(cra.generateRandomAddress(3));
```

In a Vue.js Project

```javascript
import cra from 'cra-z';

// Get address by code or name
console.log(cra.getAddress('浙江省'));

// Generate a random city-level address
console.log(cra.generateRandomAddress(2));

```

## TypeScript Support
The library includes TypeScript type definitions. You can use it directly in a TypeScript project.

## Contributing
Contributions are welcome! Please follow the standard coding guidelines and ensure all tests pass before submitting a pull request.

## License
See the LICENSE file for details.
