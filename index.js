/**
 * @module index
 * @description Entry point for url-base64-node module.
 * @version 1.0.2
 * @author Anatoliy Gatt [anatoliy.gatt@aol.com]
 * @copyright Copyright (c) 2015 Anatoliy Gatt
 * @license MIT
 */

'use strict';

/**
 * @public
 * @description Expose unchangeable object with functions to escape/unescape URL characters within Base64 string.
 * @returns {Object} - Unchangeable object with functions to escape/unescape URL characters within Base64 string.
 */

module.exports = require('./lib/url-base64');
