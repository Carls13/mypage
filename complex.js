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
        imaginaryPart: imaginary
    };
    return complex;
}

function printFormaBinomica(z3) {
    var result = "Forma binómica: ";
    if (z3.realPart !== 0) {
        result += z3.realPart + " ";
    }
    if (z3.imaginaryPart > 0) {
        if (z3.realPart !== 0) {
            result +=  '+'+z3.imaginaryPart + "j";
        } else {
            result += z3.imaginaryPart + "j";
        }
    } else if (z3.imaginaryPart < 0) {
        result += z3.imaginaryPart + "j";
    }
    binomicaH3.innerHTML = result;

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
    
    console.log(z3);

    //Prints result
    printFormaBinomica(z3);
}

sumBtn.addEventListener("click", sum);


