"use strict";

const capitalized = function (sentence) {

    let str = sentence.split(" ");
    for (let i = 0; i < str.lenght; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].subString(1);
    }
    return str.join(" ");
}

console.log(capitalized("The Quick Brown Fox"));