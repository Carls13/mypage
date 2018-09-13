//Gets elements
//Inputs
const rez1 = document.getElementById('rez1');
const rez2 = document.getElementById('rez2');
const rez = document.getElementById('rez');
const imz1 = document.getElementById('imz1');
const imz2 = document.getElementById('imz2');
const imz = document.getElementById('imz');
const modz = document.getElementById('modz');
const argz = document.getElementById('argz');

//Buttons
const sumBtn = document.getElementById('sum');
const subsBtn = document.getElementById('substraction');
const prodBtn = document.getElementById('product');
const divBtn = document.getElementById('division');
const clearBtn = document.getElementById('clear');
const binToFasBtn = document.getElementById('binToFasBtn');
const fasToBinBtn = document.getElementById('fasToBinBtn');

//h3 results
const binomicaH3 = document.getElementById('binomicaResult');
const fasorialH3 = document.getElementById('fasorialResult');
const fasorialTransH3 = document.getElementById('binTransResult');
const binomialTransH3 = document.getElementById('fasTransResult');

//Complex number
class Complex {
    constructor(real = null, imaginary = null, module = null, argument = null) {
        this.real = real ? real : null;
        this.imaginary = imaginary ? imaginary : null;
        this.module = module? module : Math.sqrt(Math.pow(real, 2) + Math.pow(imaginary, 2));
        //Argument in degrees
        this.argument = argument ? argument : toDegrees(Math.atan2(imaginary, real));
        
        if (!this.real){
            this.real = this.module*Math.cos(toRadians(this.argument));
        }
        if (!this.imaginary){
            this.imaginary = this.module*Math.sin(toRadians(this.argument));
        }
    }
    //prints in phasor form
    printPhasorForm(element) {
        var result = `Phasor form: ${Number(this.module).toFixed(2)} 
                        ∠${Number(this.argument).toFixed(2)}°`;

        element.innerHTML = result;

    }
    //prints in binomial form
    printFormaBinomica(element) {
        var result = "Binomial form: ";
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
            result = 'Binomial form: 0';
        }
        element.innerHTML = result;
    }
}


//transforms radians to degrees
function toDegrees(radians) {
    var degrees = radians * 180 / Math.PI;
    return degrees;
}
//transforms degrees to radians
function toRadians(degrees) {
    var radians = degrees * Math.PI/180;
    return radians;
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

//transforms from phasor to binomial
function toBin() {
    var z = new Complex(null,null, Number(modz.value), Number(argz.value));
    z.printFormaBinomica(binomialTransH3);
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

//Events
sumBtn.addEventListener("click", sum);
subsBtn.addEventListener("click", substract);
prodBtn.addEventListener("click", multiply);
divBtn.addEventListener("click", divide);
clearBtn.addEventListener("click", clear);
binToFasBtn.addEventListener("click", toFas);
fasToBinBtn.addEventListener("click", toBin);

