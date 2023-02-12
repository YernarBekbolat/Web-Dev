function Calculator() {
    this.read = function() {
        this.a = +prompt('Input a', '');
        this.b = +prompt('Input b', '');
    }

    this.sum = function() {
        return this.a + this.b;
    }

    this.mul = function() {
        return this.a * this.b;
    }
}


let calculator = new Calculator();
calculator.read();

alert(calculator.sum());
alert(calculator.mul());