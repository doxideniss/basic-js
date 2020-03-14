class VigenereCipheringMachine {
    constructor(isDirect) {
        this.isDirect = isDirect === undefined ? true : isDirect;
        this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    encrypt(message, key) {
        if (!message|| !key) {
            throw Error;
        }
        message = message.toUpperCase();
        key = key.toUpperCase();

        let result = "";
        for (let i = 0; i < message.length; i++) {
            if (this.alphabet.includes(message.charAt(i))) {
                result += this.alphabet.charAt(
                  (this.alphabet.indexOf(message.charAt(i)) +
                    this.alphabet.indexOf(key.charAt(i % key.length))) %
                  this.alphabet.length
                );
            } else {
                result += message.charAt(i);
                message = message.slice(0, i) + message.slice(i + 1);
                i--;
            }
        }
        result = this.isDirect
          ? result
          : result
            .split("")
            .reverse()
            .join("");

        return result;
    }

    decrypt(message, key) {
        if (!message|| !key) {
            throw Error;
        }

        message = message.toUpperCase();
        key = key.toUpperCase();

        let result = "";
        for (let i = 0; i < message.length; i++) {
            if (this.alphabet.includes(message.charAt(i))) {
                result += this.alphabet.charAt(
                  (this.alphabet.indexOf(message.charAt(i)) +
                    this.alphabet.length -
                    this.alphabet.indexOf(key.charAt(i % key.length))) %
                  this.alphabet.length
                );
            } else {
                result += message.charAt(i);
                message = message.slice(0, i) + message.slice(i + 1);
                i--;
            }
        }

        result = this.isDirect
          ? result
          : result
            .split("")
            .reverse()
            .join("");

        return result;
    }
}

module.exports = VigenereCipheringMachine;