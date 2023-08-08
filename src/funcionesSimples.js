//1. Crear una funcion que convierta pulgadas en centimetros.
//Recibe por parametros pulgadas y retorna su equivalente en cms

const pulgadaACentimetro = (pulgada) => {
  let centimetros = pulgada * 2.54
  return centimetros + "cm";
}
console.log(pulgadaACentimetro(3))

//2. Crear una función que recibe un string y lo convierte en una URL.
//Ej: “pepito” es devuelto como “http://www.pepito.com”

const turnSLUG = (str) => {
  return str
    .trim()
    .toLowerCase()
    .replace(/[\W_]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
console.log(turnSLUG("Determina un string y conviertelo"))

// 3.Crear una función que recibe un string y devuelve la misma frase pero con admiración.

function returnSameQuote(str) {
  return str + '!'
}
console.log(returnSameQuote("Adios"))

//4. Crear una función que calcule la edad de los perros, considerando que 1 año
//para nosotros son 7 de ellos.

const calcDogAge = (number) => {
  let dogAge = number * 7
  return dogAge
}
console.log(calcDogAge(9))

//5. Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu
//sueldo mensual como parámetro. PD: considerá que tu mes de trabajo tiene 40 horas.


const valuePerHour = (salary) => {
  const aMonthOfWork = 40;
  return salary /aMonthOfWork ;
}
console.log(valuePerHour(2000))

//6. Crear la función calculadorIMC() que reciba la altura en metros y el peso en
//kilogramos y calcule el IMC de una persona. Luego, ejecutar la función
//probando diferentes valores.

function calculadorIMC(altura, peso) {
  const imc = peso / (altura * altura);
  return imc;
}
console.log(calculadorIMC(2,150))


//EXTRA: Crear una función que recibe un parámetro y devuelve qué tipo de dato es ese parámetro.
//Pista: te servirá revisar qué hace la palabra reservada typeof.

const tipoDeDato = (dato) => {
  let result =  typeof dato  
  return result;
}
console.log(tipoDeDato(true))