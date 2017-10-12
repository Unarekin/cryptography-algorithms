'use strict'
var caesar = require('./caesar-cipher');
var vernam = require('./vernam-cipher');



var sampleText = "This is a test string.";
var encrypted = "";

console.log("Beginning encryption samples.");
console.log("Text: \"" + sampleText + "\"");

console.log("Caesar cipher:");
encrypted = caesar.encrypt(sampleText, 3);
console.log("   Encrypted: ", encrypted);
console.log("   Decrypted: ", caesar.decrypt(encrypted, 3));

console.log("Vernam cipher")
var key = vernam.generateKey(sampleText.length);
encrypted = vernam.encrypt(sampleText, key);
console.log("   Key: ", key);
console.log("   Encrypted: ", encrypted);
console.log("   Decrypted: ", vernam.decrypt(encrypted, key));