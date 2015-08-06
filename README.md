# url-base64 for Node.js

Escape/Unescape URL characters within Base64 string.

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![License][license]][license-url]
[![Travis Build][travis-image]][travis-url]

[![NPM Statistics][npm-statistics-image]][npm-url]

## Installation

`npm install url-base64-node`

## Usage Example

```javascript
var URLBase64 = require("url-base64-node");

console.log(URLBase64.escape("RXNjYXBlL1VuZXNjYXBlIFVSTCBjaGFyYWN0ZXJzIHdpdGhpbiBCYXNlNjQgc3RyaW5nLg=="));
console.log(URLBase64.unescape("RXNjYXBlL1VuZXNjYXBlIFVSTCBjaGFyYWN0ZXJzIHdpdGhpbiBCYXNlNjQgc3RyaW5nLg"));
```

***

```javascript
RXNjYXBlL1VuZXNjYXBlIFVSTCBjaGFyYWN0ZXJzIHdpdGhpbiBCYXNlNjQgc3RyaW5nLg
RXNjYXBlL1VuZXNjYXBlIFVSTCBjaGFyYWN0ZXJzIHdpdGhpbiBCYXNlNjQgc3RyaW5nLg==
```

## Tests

To run the test suite, first install the dependencies, then run `npm test`:

```bash
$ npm install
$ npm test
```

## License

Distributed under the [MIT License](LICENSE).

[npm-image]: https://img.shields.io/npm/v/url-base64-node.svg
[npm-url]: https://npmjs.org/package/url-base64-node
[downloads-image]: https://img.shields.io/npm/dm/url-base64-node.svg
[downloads-url]: https://npmjs.org/package/url-base64-node
[license]: https://img.shields.io/npm/l/url-base64-node.svg
[license-url]: https://github.com/AnatoliyGatt/url-base64-node/blob/master/LICENSE
[travis-image]: https://img.shields.io/travis/AnatoliyGatt/url-base64-node/master.svg
[travis-url]: https://travis-ci.org/AnatoliyGatt/url-base64-node
[npm-statistics-image]: https://nodei.co/npm/url-base64-node.png?downloads=true&downloadRank=true&stars=true