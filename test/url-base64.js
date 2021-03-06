var assert = require('assert');
var URLBase64 = require('../lib/url-base64');

describe('url-base64', function () {
    describe('functions', function () {
        describe('#escape()', function () {
            it('should escape URL characters within Base64 string', function () {
                var escapedBase64String = URLBase64.escape('RXNjYXBlL1VuZXNjYXBlIFVSTCBjaGFyYWN0ZXJzIHdpdGhpbiBCYXNlNjQgc3RyaW5nLg==');
                var expectedEscapedBase64String = 'RXNjYXBlL1VuZXNjYXBlIFVSTCBjaGFyYWN0ZXJzIHdpdGhpbiBCYXNlNjQgc3RyaW5nLg';
                assert.equal(escapedBase64String, expectedEscapedBase64String, 'URL characters should be escaped within Base64 string');
            });
        });

        describe('#unescape()', function () {
            it('should unescape URL characters within Base64 string', function () {
                var unescapedBase64String = URLBase64.unescape('RXNjYXBlL1VuZXNjYXBlIFVSTCBjaGFyYWN0ZXJzIHdpdGhpbiBCYXNlNjQgc3RyaW5nLg');
                var expectedUnescapedBase64String = 'RXNjYXBlL1VuZXNjYXBlIFVSTCBjaGFyYWN0ZXJzIHdpdGhpbiBCYXNlNjQgc3RyaW5nLg==';
                assert.equal(unescapedBase64String, expectedUnescapedBase64String, 'URL characters should be unescaped within Base64 string');
            });
        });
    });
});