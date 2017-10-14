'use strict'

module.exports = function(text) {
	var output = "";

	var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

	for (var i=0;i<text.length;i++) {
		var index = alphabet.indexOf(text[i]);

		if (index === -1) {
			throw new Error("Cipher algorithm only supports uppercase english letters.  Received '" + text[i] + "'");
		} else {
			var newIndex = (index + 13) % (alphabet.length);
			output += alphabet[newIndex];
		}
	}
	return output;
}