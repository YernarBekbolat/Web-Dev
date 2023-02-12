'use strict'

function Accumulator(startingValue) {
    this.value = startingValue;
    this.sum = function() {
        this.value += +prompt("Enter number", 0);
    };
}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value)