'use strict'
var assert = require('assert');
var caesar = require('../caesar-cipher');
var vernam = require('../vernam-cipher');



describe('Caesar cipher', function() {
	it("Encrypts 'test string' -> 'whvw vwulqj'", function() {
		assert.equal(caesar.encrypt("test string", 3), "whvw vwulqj");
	});

	it("Decrypts 'whvw vwulqj' -> 'test string'", function() {
		assert.equal(caesar.decrypt("whvw vwulqj", 3), "test string");
	});
});

describe('Vernam cipher', function() {
	it("Generates a key", function() {
		var key = vernam.generateKey(15);
		this.test.title = "Generates a key: " + key;
	});
	it("Encrypts 'test string' as 'rdsp swzmlg'", function() {
		var key = "61040038420";
		var encrypted = vernam.encrypt("test string", key);
		assert.equal(encrypted, "rdsp swzmlg");
	});

	it("Decrypts 'rdsp swzmlg' to 'test string'", function() {
		var key = "61040038420";
		var decrypted = vernam.decrypt("rdsp swzmlg", key);
		assert.equal(decrypted, "test string");
	});
});