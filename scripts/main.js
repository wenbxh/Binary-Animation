"use strict";

function clearActive() {
    for (var a in elements) for (var b in elements[a].classList) "active" === elements[a].classList[b] && elements[a].classList.remove("active");
}

function addActive(a) {
    elements[a].classList.add("active");
}

function printSequence(a) {
    for (var b = sequence[a], c = 0; c < b.length; c++) "1" === b[c] && addActive(c);
}

function stepSequence() {
    clearActive(), counter >= sequence.length && (counter = 0), printSequence(counter), 
    document.getElementById("display").innerHTML = sequence[counter], counter++, setTimeout(stepSequence, frequency);
}

var frequency = 1e3, sequence = createAllCombinationOfSevenSegement(); 
var elements = document.getElementById("shape").getElementsByTagName("*"), counter = 0;


function createAllCombinationOfSevenSegement() {
    let allCombinationOfSevenSegement = [];
    let num = 0;
    // 0000 0000 0000 0001 
    // 2 ^ 7 = 128
    allCombinationOfSevenSegement.push("0000000");
    for(let i = 0; i < 127; i++) {
        num = binaryAdd(num, 1);
        let numString = num.toString(2);
        while(numString.length < 7) {
            numString = "0" + numString;
        }
        allCombinationOfSevenSegement.push(numString);
    }
    // console.log(allCombinationOfSevenSegement);
    return allCombinationOfSevenSegement;
}

function binaryAdd(a, b) {
    while (b != 0) {
        var c = (a ^ b);
        b = ((a & b) << 1);
        a = c;
    }

    return a;
};

window.onload = function() {
    stepSequence();
};

function main() {
    console.log(createAllCombinationOfSevenSegement());
}