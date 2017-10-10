'use strict'
var caesar = require('./caesar-cipher');




function performTest(openText, lib) {
	console.log("Open text: ", openText);
	var closedText = lib.encrypt(openText);
	var openText = lib.decrypt(closedText)

	console.log("Encrypted: ", closedText);
	console.log("Decrypted: ", openText);
}



performTest("This is a test string.", caesar);