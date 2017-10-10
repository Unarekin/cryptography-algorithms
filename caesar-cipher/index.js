'use strict'

/**
 * 
 */
module.exports.encrypt = function(openText, distance) {
	return shift(openText, (distance ? distance : 3));
}

module.exports.decrypt = function(closedText, distance) {
	return shift(closedText, (-1 * (distance ? distance : 3)));
}


var lowercaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
var uppercaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericAlphabet = "0123456789";



function shift(text, distance) {
	var output = '', len = text.length;

	var alphabet = lowercaseAlphabet;


	for (let i=0;i<len;i++) {
		alphabet='';

		if (isNumeric(text[i]))
			alphabet = numericAlphabet;
		else if (isUpperCase(text[i]))
			alphabet = uppercaseAlphabet;
		else if (isLowerCase(text[i]))
			alphabet = lowercaseAlphabet;

		if (alphabet) {
			var index = alphabet.indexOf(text[i]);
			if (index === -1) {
				output += text[i];
			} else {
				index = (index + distance) % alphabet.length;
				output += alphabet[index];
			}
		} else {
			output += text[i];
		}
	}

	return output;
}




/**
 * Checks whether a given string contains numerical data or not
 * @param {String} num - The string to check
 * @returns {boolean}
 */
function isNumeric(num) {
	return !isNaN(num);
}


/**
 * Determines if a given string is lower case
 * @param {String} text - text to check
 * @returns {boolean} True if string is lower case
 */
function isLowerCase(text) {
	return (text === (text.toLowerCase()));
}

/**
 * Determines if a given string is upper case
 * @param {String} text - Text to check
 * @returns {boolean} True if string is upper case.
 */
function isUpperCase(text) {
	return (text === (text.toUpperCase()));
}