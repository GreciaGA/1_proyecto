const resp1 = prompt("Cuánto es la raiz cuadrada de 25 ?");
const resp2 = prompt("Cuánto es 200/5 ?");
const resp3 = prompt("Cuánto es 3x3 ?");
const rCorrecto = document.getElementById('rCorrecto');
const rIncorrecto = document.getElementById('rIncorrecto');

console.log("La respuesta 1 es: "+resp1);
console.log("La respuesta 2 es: "+resp2);
console.log("La respuesta 3 es: "+resp3);
let totalRespCorrectas = 0;
let totalRespIncorrectas = 0;

// Evaluando la pregunta1
if(resp1 == 5){
    totalRespCorrectas++;
}else{
    totalRespIncorrectas++;
}

// Evaluando la pregunta2
if(resp2 == 40){
    totalRespCorrectas++;
}else{
    totalRespIncorrectas++;
}

// Evaluando la pregunta3
if(resp3 == 9){
    totalRespCorrectas++;
}else{
    totalRespIncorrectas++;
}
console.log("Total resp Correctas: "+totalRespCorrectas);
console.log("Total resp Incorrectas: "+totalRespIncorrectas);

rCorrecto.innerHTML= `<div> Tienes ${totalRespCorrectas} aciertos correctos </div>`;
rIncorrecto.innerHTML= `<div> Tienes ${totalRespIncorrectas} aciertos incorrectos </div>`;


