'use strict'
var caesar = require('./caesar-cipher');
var vernam = require('./vernam-cipher');
var rot13 = require('./rot-13');



var sampleText = "TESTING";
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


console.log("ROT13");
encrypted = rot13(sampleText);
console.log("   Encrypted: ", encrypted);
console.log("   Decrypted: ", rot13(encrypted));