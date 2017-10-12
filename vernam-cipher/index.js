'use strict'


module.exports.encrypt = encrypt;
module.exports.decrypt = decrypt;
module.exports.generateKey = generateKey;



function encrypt(plainText, key) {
	var cipherText = '';

	if (key.length !== plainText.length)
		throw new Error("Key and plain text are of different length.");
	
	for (var i=0;i<plainText.length;i++) {
		cipherText += xor(plainText.charCodeAt(i), key[i]);
	}
	return cipherText;
}


function decrypt(cipherText, key) {
	var plainText = '';

	if (key.length !== cipherText.length)
		throw new Error("Key and cipher text are of different lengths.");

	for (var i=0;i<cipherText.length;i++) {
		plainText += xor(cipherText.charCodeAt(i), key[i]);
	}
	return plainText;
}


function generateKey(len) {
	var key = '';
	for (var i=0;i<len;i++) {
		key += ~~((Math.random() * 10) - 1);
	}
	return key;
}





function xor(char, key) {
	return String.fromCharCode(char ^ key);
}