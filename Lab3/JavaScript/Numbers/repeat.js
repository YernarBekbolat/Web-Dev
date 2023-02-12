'use strict'

function readNumber() {
    let num;

    do {
        num = prompt("Enter the number", '');
    } while (!isFinite(num));

    if (num == null || num == '') return null

    return +num;
}

alert(readNumber())