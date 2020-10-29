"use strict";
exports.__esModule = true;
var punto_1 = require("./punto");
var unPunto = new punto_1.Punto(2, 2);
var dosPunto = new punto_1.Punto(5, -2);
var tresPunto = new punto_1.Punto(-5, 1);
var cuartoPunto = new punto_1.Punto(-3, -7);
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
var puntos = [unPunto, dosPunto, tresPunto];
var otroPuntoMas = new punto_1.Punto(3, 4);
console.log(otroPuntoMas.calcularMasCercano(puntos));
