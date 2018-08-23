//Gets elements
rez1 = document.getElementById('rez1');
rez2 = document.getElementById('rez2');
imz1 = document.getElementById('imz1');
imz2 = document.getElementById('imz2');
sumBtn = document.getElementById('sum');
subsBtn = document.getElementById('substraction');
prodBtn = document.getElementById('product');
divBtn = document.getElementById('division');
binomicaH3 = document.getElementById('binomicaResult');
fasorialH3 = document.getElementById('fasorialResult');

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
    printPhasorForm() {
        var result = `Forma fasorial: ${Number(this.module).toFixed(2)} 
                        ∠${Number(this.argument).toFixed(2)}°`;

        fasorialH3.innerHTML = result;

    }
    //prints in binomial form
    printFormaBinomica() {
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
        binomicaH3.innerHTML = result;
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
    z3.printFormaBinomica();
    z3.printPhasorForm();
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
    z3.printFormaBinomica();
    z3.printPhasorForm();

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
    z3.printFormaBinomica();
    z3.printPhasorForm();

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
        z3.printFormaBinomica();
        z3.printPhasorForm();


    } catch (e) {
        alert(e);
    }
}

sumBtn.addEventListener("click", sum);
subsBtn.addEventListener("click", substract);
prodBtn.addEventListener("click", multiply);
divBtn.addEventListener("click", divide);


