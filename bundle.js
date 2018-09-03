(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
//Gets elements
const rez1 = document.getElementById('rez1');
const rez2 = document.getElementById('rez2');
const rez = document.getElementById('rez');
const imz1 = document.getElementById('imz1');
const imz2 = document.getElementById('imz2');
const imz = document.getElementById('imz');
const sumBtn = document.getElementById('sum');
const subsBtn = document.getElementById('substraction');
const prodBtn = document.getElementById('product');
const divBtn = document.getElementById('division');
const clearBtn = document.getElementById('clear');
const binToFasBtn = document.getElementById('binToFasBtn');
const binomicaH3 = document.getElementById('binomicaResult');
const fasorialH3 = document.getElementById('fasorialResult');
const fasorialTransH3 = document.getElementById('binTransResult');

//Complex number
class Complex {
    constructor(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
        this.module = Math.sqrt(Math.pow(real, 2) + Math.pow(imaginary, 2));
        //Argument in degrees
        this.argument = toDegrees(Math.atan2(imaginary, real));
    }
    //prints in phasor form
    printPhasorForm(element) {
        var result = `Forma fasorial: ${Number(this.module).toFixed(2)} 
                        ∠${Number(this.argument).toFixed(2)}°`;

        element.innerHTML = result;

    }
    //prints in binomial form
    printFormaBinomica(element) {
        var result = "Forma binómica: ";
        if (this.real !== 0) {
            result += (this.real).toFixed(2) + " ";
        }
        if (this.imaginary > 0) {
            if (this.real !== 0) {
                result += '+' + (this.imaginary).toFixed(2) + "j";
            } else {
                result += (this.imaginary).toFixed(2) + "j";
            }
        } else if (this.imaginary < 0) {
            result += (this.imaginary).toFixed(2) + "j";
        }
        if (this.real === 0 && this.imaginary === 0) {
            result = 'Forma binómica: 0';
        }
        element.innerHTML = result;
    }
}

//transforms radians to degrees
function toDegrees(radians) {
    var degrees = radians * 180 / Math.PI;
    return degrees;
}

//complex sum
function sum() {
    //Intitializes sumands
    var z1 = new Complex(Number(rez1.value), Number(imz1.value));
    var z2 = new Complex(Number(rez2.value), Number(imz2.value));

    //Gets new complex
    var rez3 = z1.real + z2.real;
    var imz3 = z1.imaginary + z2.imaginary;
    var z3 = new Complex(rez3, imz3);

    //Prints result
    z3.printFormaBinomica(binomicaH3);
    z3.printPhasorForm(fasorialH3);
}

//complex substraction
function substract() {
    //Intitializes sumands
    var z1 = new Complex(Number(rez1.value), Number(imz1.value));
    var z2 = new Complex(Number(rez2.value), Number(imz2.value));

    //Gets new complex
    var rez3 = z1.real - z2.real;
    var imz3 = z1.imaginary - z2.imaginary;
    var z3 = new Complex(rez3, imz3);

    //Prints result
    z3.printFormaBinomica(binomicaH3);
    z3.printPhasorForm(fasorialH3);

}

//complex product
function multiply() {
    //Intitializes sumands
    var z1 = new Complex(Number(rez1.value), Number(imz1.value));
    var z2 = new Complex(Number(rez2.value), Number(imz2.value));

    //Gets new complex
    var rez3 = (z1.real * z2.real) - (z1.imaginary * z2.imaginary);
    var imz3 = (z1.real * z2.imaginary) + (z1.imaginary * z2.real);
    var z3 = new Complex(rez3, imz3);

    //Prints result
    z3.printFormaBinomica(binomicaH3);
    z3.printPhasorForm(fasorialH3);

}

//complex division
function divide() {
    //Intitializes sumands
    var z1 = new Complex(Number(rez1.value), Number(imz1.value));
    var z2 = new Complex(Number(rez2.value), Number(imz2.value));

    try {//Checks division by null Complex
        if (z2.real === 0 && z2.imaginary === 0) {
            throw('Cannot divide by zero');
        }

        //Gets new complex
        var rez3 = ((z1.real * z2.real) + (z1.imaginary * z2.imaginary)) /
                (Math.pow(z2.real, 2) + Math.pow(z2.imaginary, 2));
        var imz3 = ((z1.imaginary * z2.real) - (z1.real * z2.imaginary)) /
                (Math.pow(z2.real, 2) + Math.pow(z2.imaginary, 2));
        var z3 = new Complex(rez3, imz3);

        //Prints result
        z3.printFormaBinomica(binomicaH3);
        z3.printPhasorForm(fasorialH3);


    } catch (e) {
        alert(e);
    }
}

//transforms from binomial to phasor
function toFas() {
    var z = new Complex(Number(rez.value), Number(imz.value));
    z.printPhasorForm(fasorialTransH3);

}

//clears results and inputs
function clear() {
    binomicaH3.innerHTML = '';
    fasorialH3.innerHTML = '';

    rez1.value = '';
    rez2.value = '';
    imz1.value = '';
    imz2.value = '';

}

sumBtn.addEventListener("click", sum);
subsBtn.addEventListener("click", substract);
prodBtn.addEventListener("click", multiply);
divBtn.addEventListener("click", divide);
clearBtn.addEventListener("click", clear);
binToFasBtn.addEventListener("click", toFas);



},{}]},{},[1]);
