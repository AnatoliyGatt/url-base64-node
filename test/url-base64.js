var assert = require("assert");
var URLBase64 = require("../lib/url-base64");

describe("url-base64", function() {
    describe("functions", function() {
        describe("#escape()", function() {
            it("should escape URL characters within Base64 string", function() {
                assert.equal(URLBase64.escape("RXNjYXBlL1VuZXNjYXBlIFVSTCBjaGFyYWN0ZXJzIHdpdGhpbiBCYXNlNjQgc3RyaW5nLg=="), "RXNjYXBlL1VuZXNjYXBlIFVSTCBjaGFyYWN0ZXJzIHdpdGhpbiBCYXNlNjQgc3RyaW5nLg", "URL characters should be escaped within Base64 string");
            });

            it("should not be overridden", function() {
                URLBase64.escape = function() {
                    return "#escape()";
                };

                assert.throws(function() {
                    assert.notEqual(URLBase64.escape(), "#escape()", "#escape() should not be overridden");
                }, Error);
            });
        });

        describe("#unescape()", function() {
            it("should unescape URL characters within Base64 string", function() {
                assert.equal(URLBase64.unescape("RXNjYXBlL1VuZXNjYXBlIFVSTCBjaGFyYWN0ZXJzIHdpdGhpbiBCYXNlNjQgc3RyaW5nLg"), "RXNjYXBlL1VuZXNjYXBlIFVSTCBjaGFyYWN0ZXJzIHdpdGhpbiBCYXNlNjQgc3RyaW5nLg==", "URL characters should be unescaped within Base64 string");
            });

            it("should not be overridden", function() {
                URLBase64.unescape = function() {
                    return "#unescape()";
                };

                assert.throws(function() {
                    assert.notEqual(URLBase64.unescape(), "#unescape()", "#unescape() should not be overridden");
                }, Error);
            });
        });
    });
});