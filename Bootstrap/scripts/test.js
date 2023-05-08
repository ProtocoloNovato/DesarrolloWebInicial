console.log("hola mundo");

let miPrimerVariable = "Hola";

let miNumero = 123;

console.log(typeof(miPrimerVariable));
console.log(typeof(miNumero));

alert("cuidado pagina para gente fanatica del manga de berserk");
let nombreVisitante = (prompt("cual es tu nombre persona de buen gusto?"));
alert("Gracias "+nombreVisitante + " por unirte!");
console.log(nombreVisitante + " demostro ser alguien de culto");

function sumarNumeros(num1, num2) {
    return num1 + num2;
  }
  
  // Ejemplo de uso
  let num1 = parseInt(prompt("Ingresa el primer número:"));
  let num2 = parseInt(prompt("Ingresa el segundo número:"));

  let resultado = sumarNumeros(num1, num2);
  
  alert(`La suma de ${num1} y ${num2} es ${resultado}`);

/*
function SumarNumeros(numeroUno,numeroDos){
    return numeroUno + numeroDos;
}
;

let numeroUno = parseInt(prompt("Hola que numero quieres sumar?"));
let numeroDos = parseInt(prompt("que otro numero queres sumarle?"));

let resultado = SumarNumeros("numeroUno","numeroDos");

alert(`La suma de ${numeroUno} y ${numeroDos} es ${resultado}`)

const niNombre = "Nicolas"; //constante
*/



