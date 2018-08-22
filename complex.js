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


//initializes Complex object
function newComplex(real, imaginary) {
    var complex = {
        realPart: real,
        imaginaryPart: imaginary,
        module: Math.sqrt(Math.pow(real, 2) + Math.pow(imaginary, 2)),
        //Argument in radians
        argument: toDegrees(Math.atan2(imaginary, real))
    };
    return complex;
}

//prints in binomial form
function printFormaBinomica(z) {
    var result = "Forma binómica: ";
    if (z.realPart !== 0) {
        result += z.realPart + " ";
    }
    if (z.imaginaryPart > 0) {
        if (z.realPart !== 0) {
            result += '+' + z.imaginaryPart + "j";
        } else {
            result += z.imaginaryPart + "j";
        }
    } else if (z.imaginaryPart < 0) {
        result += z.imaginaryPart + "j";
    }
  if (z.realPart ===0 && z.imaginaryPart===0){
      result = 'Forma binómica: 0';
  }
    binomicaH3.innerHTML = result;

}

//prints in phasor form
function printPhasorForm(z) {
    var result = `Forma fasorial: ${Number(z.module).toFixed(2)} ∠${Number(z.argument).toFixed(2)}°`;

    fasorialH3.innerHTML = result;

}

//transforms radians to degrees
function toDegrees(radians) {
    var degrees = radians * 180 / Math.PI;
    return degrees;
}

//complex sum
function sum() {
    //Intitializes sumands
    var z1 = newComplex(Number(rez1.value), Number(imz1.value));
    var z2 = newComplex(Number(rez2.value), Number(imz2.value));

    //Gets new complex
    var rez3 = z1.realPart + z2.realPart;
    var imz3 = z1.imaginaryPart + z2.imaginaryPart;
    var z3 = newComplex(rez3, imz3);

    //Prints result
    printFormaBinomica(z3);
    printPhasorForm(z3);
}

//complex substraction
function substract() {
    //Intitializes sumands
    var z1 = newComplex(Number(rez1.value), Number(imz1.value));
    var z2 = newComplex(Number(rez2.value), Number(imz2.value));

    //Gets new complex
    var rez3 = z1.realPart - z2.realPart;
    var imz3 = z1.imaginaryPart - z2.imaginaryPart;
    var z3 = newComplex(rez3, imz3);


    //Prints result
    printFormaBinomica(z3);
    printPhasorForm(z3);

}

//complex product
function multiply() {
    //Intitializes sumands
    var z1 = newComplex(Number(rez1.value), Number(imz1.value));
    var z2 = newComplex(Number(rez2.value), Number(imz2.value));

    //Gets new complex
    var rez3 = (z1.realPart * z2.realPart) - (z1.imaginaryPart * z2.imaginaryPart);
    var imz3 = (z1.realPart * z2.imaginaryPart) + (z1.imaginaryPart * z2.realPart);
    var z3 = newComplex(rez3, imz3);


    //Prints result
    printFormaBinomica(z3);
    printPhasorForm(z3);

}

//complex division
function divide() {
    //Intitializes sumands
    var z1 = newComplex(Number(rez1.value), Number(imz1.value));
    var z2 = newComplex(Number(rez2.value), Number(imz2.value));

    try {//Checks division by null Complex
        if (z2.realPart === 0 && z2.imaginaryPart === 0) {
            throw('Cannot divide by zero');
        }

        //Gets new complex
        var rez3 = ((z1.realPart * z2.realPart) + (z1.imaginaryPart * z2.imaginaryPart)) /
                (Math.pow(z2.realPart, 2) + Math.pow(z2.imaginaryPart, 2));
        var imz3 = ((z1.imaginaryPart * z2.realPart) - (z1.realPart * z2.imaginaryPart)) /
                (Math.pow(z2.realPart, 2) + Math.pow(z2.imaginaryPart, 2));
        var z3 = newComplex(rez3, imz3);


        //Prints result
        printFormaBinomica(z3);
        printPhasorForm(z3);

    } catch (e) {
        alert(e);
    }
}

sumBtn.addEventListener("click", sum);
subsBtn.addEventListener("click", substract);
prodBtn.addEventListener("click", multiply);
divBtn.addEventListener("click", divide);


