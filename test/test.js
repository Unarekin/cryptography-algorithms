'use strict'
var assert = require('assert');
var caesar = require('../caesar-cipher');



describe('Caesar cipher', function() {
	it("Encrypts 'test string' -> 'whvw vwulqj'", function() {
		assert.equal(caesar.encrypt("test string", 3), "whvw vwulqj");
	});

	it("Decrypts 'whvw vwulqj' -> 'test string'", function() {
		assert.equal(caesar.decrypt("whvw vwulqj", 3), "test string");
	});
});