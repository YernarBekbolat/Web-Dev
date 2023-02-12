'use strict'

let calculator = {
    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    },

    read() {
        a = +prompt('Input a', '');
        b = +prompt('Input b', ''),
    }
};