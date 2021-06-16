//Generar las siguientes series, para ello Utilizar Formularios y Javascript
//1.- Fibonacci
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay');

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
}
function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
}

function factor() {
    var numero = document.getElementById("factorial");
    var num = parseInt(numero.value);
    var sum = 0;
    for (let index = 0; index <= num; index++) {
        if(index%2==0){
        const dato = index// Número del que queremos calcular el factorial
        let r = 1;
        for (let i = dato; i > 0; i--) {
            r *= i;
        }
        sum = sum + r;
        imprimir = document.createTextNode(r + "+");
        document.getElementById("modal-body1").appendChild(imprimir);
        }
        //console.log(r);   
    }
    suma = document.createTextNode("S = " + sum);
    document.getElementById("modal-body1").appendChild(suma);
}

//Generar Primos
function eratosthenes() {
    var numero = document.getElementById("primos");
    var n = parseInt(numero.value);
    var array = [],
      upperLimit = Math.sqrt(n), //(1)
      output = [];
  
    for (var i = 0; i < n; i++) { //(2)
      array.push(true);
    }
  
    for (var i = 2; i <= upperLimit; i++) {
      if (array[i]) {
        for (var j = i * i; j < n; j += i) {
          array[j] = false; //(3)
        }
      }
    }
  
    for (var i = 2; i < n; i++) {
      if (array[i]) {
        output.push(i); //(4)
      }
    }
  imprimir = document.createTextNode(output);
  document.getElementById("modal-body2").appendChild(imprimir);
  };

function Capicua(){
    String.prototype.reverse=function(){return this.split("").reverse().join("");}
    var numero = document.getElementById("capicua");
    var num = numero.value;
    var reverso = num.reverse();
    if(num == reverso){
        imprimir = document.createTextNode("Es Capicua");
        document.getElementById("modal-body6").appendChild(imprimir);
    }else{
        imprimir = document.createTextNode("No es Capicua");
        document.getElementById("modal-body4").appendChild(imprimir);
    }
}

function Rotacion() {
    var numero = document.getElementById("rotacion");
    var num = parseInt(numero.value);
    var ndgts = numero.value.length;
    if (ndgts > 6) {
        let digitos = String(num).split('');
        for (let i = 0; i < ndgts; i++) {
            digitos[i] = parseInt(digitos[i]);
            if(digitos[i]%2==0){
                let aux = digitos[i];
                digitos[i] = digitos[i+1];
                digitos[i+1] = aux; 
            }
            imprimir = document.createTextNode(digitos[i]);
            document.getElementById("modal-body5").appendChild(imprimir);
        }
    }
}



//Generar la serie Exponencial
function genExponencial(){
        var numero = document.getElementById("Factorialnormal");
        var num = parseInt(numero.value);
        for (let index = 0; index <= num; index++) {
            
            const dato = index// Número del que queremos calcular el factorial
            let r = 1;
            for (let i = dato; i > 0; i--) {
                r *= i;
            }
            imprimir = document.createTextNode(r+",");
            document.getElementById("modal-body6").appendChild(imprimir);
            //console.log(r);   
        }
    }
    


//Calculadora
 //Declaracion de variables
 var num1 = 0;
 var num2 = 0;
 var opera;

//Función que coloca el número presionado
function darNumero(numero){
 if(num1==0 && num1 !== '0.'){
     num1 = numero;
 }else{
     num1 += numero;
 }
 refrescar();
}

//Función que coloca la coma al presionar dicho botón
function darComa(){
 if(num1 == 0) {
     num1 = '0.';
 } else if(num1.indexOf('.') == -1) {
     num1 += '.';
 }
 refrescar();
}

//Función que coloca la C al presionar dicho botón
function darC(){
 num1 = 0;
 num2 = 0;
 refrescar();
}


//Esta función realiza las distintas operaciones aritméticas en función del botón pulsado
function operar(valor){
 if (num1 == 0){
     num1 = parseFloat(document.getElementById("valor_numero").value);
 }
 num2 = parseFloat(num1);
 num1= 0;
 opera = valor;
}

//Función para pulsar igual
 /*
 suma = 1
 resta = 2
 multiplicacion = 3
 division = 4
 potencia = 5
*/

function esIgual(){
 num1 = parseFloat(num1);
 switch (opera){
     case 1:
         num1 += num2;
     break;
     case 2:
         num1 = num2 - num1;
     break;
     case 3:
         num1 *= num2;
     break;
     case 4:
         num1 = num2 / num1;
     break;
     case 5:
         num1 = Math.pow(num2, num1);
     break;
 }
 refrescar();
 num2 = parseFloat(num1);
 num1 = 0;
}

function refrescar(){
 document.getElementById("valor_numero").value = num1;
}