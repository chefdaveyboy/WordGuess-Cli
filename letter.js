function Letter(char) {
    this.char = char;
    this.guessed = false;
    this.letterGuessed = function() {
        if (this.guessed === false) {
            return "_";
        }
        else if (this.char === " ") {
            return " ";
        }
        else {
            return this.char;
        }
    }
    this.check = function(userGuess) {
        if (userGuess === this.char) {
            this.guessed = true;
        }
        else {
            return false;
        }
    }
}




module.exports = Letter;
