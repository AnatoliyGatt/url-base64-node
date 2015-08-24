# url-base64 for Node.js

Escape/Unescape URL characters within Base64 string.

[![NPM Package Version][npm-package-version-badge]][npm-package-url]
[![NPM Package License][npm-package-license-badge]][npm-package-license-url]
[![NPM Package Downloads][npm-package-downloads-badge]][npm-package-url]
[![Dependencies Status][dependencies-status-badge]][dependencies-status-page-url]
[![devDependencies Status][devDependencies-status-badge]][devDependencies-status-page-url]

[![Node Version][node-version-badge]][node-downloads-page-url]
[![Travis CI Build Status][travis-ci-build-status-badge]][travis-ci-build-status-page-url]
[![Code Climate Status][code-climate-status-badge]][code-climate-status-page-url]
[![Inch CI Documentation Coverage Status][inch-ci-documentation-coverage-status-badge]][inch-ci-documentation-coverage-status-page-url]

[![NPM Package Statistics][npm-package-statistics-badge]][npm-package-url]

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

[npm-package-url]: https://npmjs.org/package/url-base64-node

[npm-package-version-badge]: https://img.shields.io/npm/v/url-base64-node.svg?style=flat-square

[npm-package-license-badge]: https://img.shields.io/npm/l/url-base64-node.svg?style=flat-square
[npm-package-license-url]: http://opensource.org/licenses/MIT

[npm-package-downloads-badge]: https://img.shields.io/npm/dm/url-base64-node.svg?style=flat-square

[dependencies-status-badge]: https://david-dm.org/AnatoliyGatt/url-base64-node.svg?style=flat-square
[dependencies-status-page-url]: https://david-dm.org/AnatoliyGatt/url-base64-node#info=dependencies

[devDependencies-status-badge]: https://david-dm.org/AnatoliyGatt/url-base64-node/dev-status.svg?style=flat-square
[devDependencies-status-page-url]: https://david-dm.org/AnatoliyGatt/url-base64-node#info=devDependencies

[node-version-badge]: https://img.shields.io/node/v/url-base64-node.svg?style=flat-square
[node-downloads-page-url]: https://nodejs.org/download/

[travis-ci-build-status-badge]: https://img.shields.io/travis/AnatoliyGatt/url-base64-node.svg?style=flat-square
[travis-ci-build-status-page-url]: https://travis-ci.org/AnatoliyGatt/url-base64-node

[code-climate-status-badge]: https://img.shields.io/codeclimate/github/AnatoliyGatt/url-base64-node.svg?style=flat-square
[code-climate-status-page-url]: https://codeclimate.com/github/AnatoliyGatt/url-base64-node

[code-climate-test-coverage-status-badge]: https://img.shields.io/codeclimate/coverage/github/AnatoliyGatt/url-base64-node.svg?style=flat-square
[code-climate-test-coverage-status-page-url]: https://codeclimate.com/github/AnatoliyGatt/url-base64-node/coverage

[inch-ci-documentation-coverage-status-badge]: https://inch-ci.org/github/AnatoliyGatt/url-base64-node.svg?style=flat-square
[inch-ci-documentation-coverage-status-page-url]: https://inch-ci.org/github/AnatoliyGatt/url-base64-node

[npm-package-statistics-badge]: https://nodei.co/npm/url-base64-node.png?downloads=true&downloadRank=true&stars=true