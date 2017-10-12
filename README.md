# Cryptography Algorithms
 
This is a repository meant to hold some simple implementations of cryptography methods.
 
# Algorithms
## Caesar Cipher
A Caesar cipher (or shift cipher) is a simple substitution cipher, replacing every character of the open text with a character a fixed distance down the alphabet.  This implementation preserves capitalization, and will not cipher non-alphanumeric characters.
https://en.wikipedia.org/wiki/Caesar_cipher
## Vernam Cipher
A fairly simple encryption method that generates a random 'key' used to encrypt a bit of text.  The key is the same length as the text itself, and each character of the text is XORed against its corresponding number in the key.
https://en.wikipedia.org/wiki/Gilbert_Vernam#The_Vernam_cipher
## Affine Cipher
## ROT13
## Vigenère cipher
## Diffie-Hellman

## Testing
Tests are written in mocha and may require this library be installed.

ex:

```sh
sudo npm install -g mocha
```

Otherwise, ```npm run test ``` will execute the tests.

## History
 
Version 1.0 (2017-09-18) - Initial setup
 
## License
 
The MIT License (MIT)

Copyright (c) 2015 Chris Kibble

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
