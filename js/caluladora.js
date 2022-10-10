
let resultado =document.getElementById('contenedorResultado');

let resultadoDos = document.getElementById('valorDos');
console.log(resultadoDos)

let form = document.getElementById('calculadora');
console.log(form)

//operaciones con dos parametros
let varPorcentaje = false;
let varRaizN = false;
let varPotenciaN = false;
let entreAporcentaje = false;
let entreAraizN = false;
let entreApotenciaN = false;

let almacenar = '';

let igual = document.getElementById('igual');

function pantalla(num){
    if (varPorcentaje === true) {
        resultado.value = '';
        varPorcentaje = false;
        entreAporcentaje = true;
        resultado.value += num;     
    }
    else{
        if(varRaizN === true) {
            resultado.value = '';
            varRaizN =false;
            entreAraizN = true;
            resultado.value += num;
            }
            else{
                if(varPotenciaN === true) {
                    resultado.value = '';
                    varPotenciaN =false;
                    entreApotenciaN = true;
                    resultado.value += num;
                }
                else{
                    resultado.value += num;
                }
            }
       
    }
}

function FuncPorcentaje(num){
    varPorcentaje = true;
    almacenar = resultado.value;
    resultado.value += num;
}

function funcRaizN(num) {
    varRaizN = true;
    almacenar= resultado.value;
    resultado.value += num;
};

function potenciaN(num) {
    varPotenciaN = true;
    almacenar = resultado.value;
    resultado.value += num;
  };


function Calcular(){
    try{
        if (entreAporcentaje === true) {
            let calcPorcentaje = (resultado.value/100) * almacenar;
            resultado.value = eval(calcPorcentaje);
            entreAporcentaje = false;    
        }
        else{
            if(entreAraizN === true){
                let calcRaiz = Math.pow(almacenar, 1/resultado.value);
                resultado.value = eval(calcRaiz);
                entreAraizN = false;
            }
            else {
                if(entreApotenciaN === true){
                    let calcPotencia = Math.pow(almacenar, resultado.value);
                    resultado.value = eval(calcPotencia);
                    entreApotenciaN = false;
                }
                else{
                    resultado.value = eval(resultado.value);
                }
            }
           
        }
    }
    catch(err)
    {
            alert('ERROR DE CÁLCULO');
    }
}


function valorPi(num){
    resultado.value += num;
}

function potencia() {
  resultado.value =Math.pow(resultado.value, 2);
};

function potencia3() {
    resultado.value =Math.pow(resultado.value, 3);
};

function raizCuadrada() {
    resultado.value = Math.pow(resultado.value, 1/2);
};

function raizCubica() {
    resultado.value = Math.pow(resultado.value, 1/3);
};


function funcionCos() {
    resultado.value= Math.cos(resultado.value);
};

function funcionSin() {
    resultado.value =  Math.sin(resultado.value); 
};

function funciontg() {
    resultado.value =  Math.tan(resultado.value); 
};
function funcionlog() {
    resultado.value =  Math.log10(resultado.value);
};

function funcionE() {
    resultado.value =  Math.E
};

function funcionIn() {
    resultado.value =  Math.log(resultado.value)
};



function funcionMr() {
    let almacenar = resultado.value;
        resultado.value += almacenar;
    console.log('funciona'); 
    console.log(almacenar);
};

function funcionAc() {
    resultado.value = '' ;
    console.log('funciona');
    
};










    
   




