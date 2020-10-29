import { Punto } from "./punto";

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

// Metodo para calcular el punto mas cercano al punto actual.

let puntos = [unPunto,dosPunto,tresPunto];
let otroPuntoMas:Punto = new Punto(3,4);
console.log(otroPuntoMas.calcularMasCercano(puntos));




