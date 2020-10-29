import { Punto } from "./punto";
import { Triangulo } from "./triangulo";

let unPunto:Punto = new Punto(2,2);
let dosPunto:Punto = new Punto(5,-2);
let tresPunto:Punto = new Punto(-5,1);
let cuartoPunto:Punto = new Punto(-3,-7);

console.log(unPunto.toString());
console.log("-------------");
console.log(unPunto.distanciaAlOrigen());
console.log("-------------");
console.log(unPunto.calcularDistancia(dosPunto));
console.log("-------------");
console.log(unPunto.calcularCuadrante());
console.log(dosPunto.calcularCuadrante());
console.log(tresPunto.calcularCuadrante());
console.log(cuartoPunto.calcularCuadrante());
console.log("-------------");

// Metodo para calcular el punto mas cercano al punto actual.

let puntos = [unPunto,dosPunto,tresPunto];
let otroPuntoMas:Punto = new Punto(3,4);
console.log(otroPuntoMas.calcularMasCercano(puntos));
console.log("-------------");

// Modificar el fichero para crear un objeto de la clase triangulo e invocar el metodo calcularLongitudLados.

let puntoA = new Punto(2,3);
let puntoB = new Punto(6,8);
let puntoC = new Punto(3,1);
let trian:Triangulo = new Triangulo(puntoA, puntoB, puntoC);
console.log(trian.calcularLongitudLados());



