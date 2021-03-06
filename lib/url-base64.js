/**
 * @module url-base64
 * @description Provides functions to escape/unescape URL characters within Base64 string.
 * @version 1.0.5
 * @author Anatoliy Gatt [anatoliy.gatt@aol.com]
 * @copyright Copyright (c) 2015-2016 Anatoliy Gatt
 * @license MIT
 */

'use strict';

/**
 * @public
 * @function escape
 * @description Escape URL characters within Base64 string.
 * @param {String} string - Base64 string within which to escape URL characters.
 * @returns {String} - Base64 string with escaped URL characters.
 */

function escape(string) {
    return string.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
}

/**
 * @public
 * @function unescape
 * @description Unescape URL characters within Base64 string.
 * @param {String} string - Base64 string within which to unescape URL characters.
 * @returns {String} - Base64 string with unescaped URL characters.
 */

function unescape(string) {
    var padding = new Array(5 - string.length % 4).join('=');
    return (string + padding).replace(/\-/g, '+').replace(/_/g, '/');
}

/**
 * @public
 * @description Expose object with functions to escape/unescape URL characters within Base64 string.
 * @returns {Object} - Object with functions to escape/unescape URL characters within Base64 string.
 */

module.exports = {
    escape: escape,
    unescape: unescape
};