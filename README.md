# filterExpression2DbQuery
Translates filter expression suggested in [Microsoft REST API Guidelines](https://github.com/Microsoft/api-guidelines/blob/vNext/Guidelines.md) into db queries. Pelase refer section [9.7.1](https://github.com/Microsoft/api-guidelines/blob/vNext/Guidelines.md#97-filtering).
This module currently supports translation of filter operations to mongoDb query only.

## Installation

Using npm:
```shell
$ npm i -g npm
$ npm i --save filter2dbquery
```

In Node.js:
```js
var filter2dbquery = require('filter2dbquery');

// API url 
// GET https://api.contoso.com/v1.0/products?$filter=price gt 20
var filterQueryValue = 'price gt 20';
var mongoDbQuery = filter2DbQuery.parseFilterQuery(filterQueryValue);
console.log(dbQuery) // prints { price: { $gt: '20' } }
```
