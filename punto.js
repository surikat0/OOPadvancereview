"use strict";
exports.__esModule = true;
exports.Punto = void 0;
var Punto = /** @class */ (function () {
    function Punto(x, y) {
        this.x = x;
        this.y = y;
    }
    Punto.prototype.getX = function () {
        return this.x;
    };
    Punto.prototype.getY = function () {
        return this.y;
    };
    Punto.prototype.setX = function (x) {
        this.x = x;
    };
    Punto.prototype.setY = function (y) {
        this.y = y;
    };
    Punto.prototype.distanciaAlOrigen = function () {
        var distancia = 0;
        distancia = Math.sqrt(Math.pow((this.x - 0), 2) + Math.pow((this.y - 0), 2));
        return distancia;
    };
    Punto.prototype.calcularDistancia = function (otroPunto) {
        var otroPuntoDistancia = 0;
        otroPuntoDistancia = Math.sqrt(Math.pow((this.x - otroPunto.x), 2) + Math.pow((this.y - otroPunto.y), 2));
        return otroPuntoDistancia;
    };
    Punto.prototype.calcularCuadrante = function () {
        if (this.x >= 0 && this.y >= 0) {
            return 1;
        }
        else if (this.x < 0 && this.y >= 0) {
            return 2;
        }
        else if (this.x < 0 && this.y < 0) {
            return 3;
        }
        else {
            return 4;
        }
    };
    Punto.prototype.calcularMasCercano = function (puntos) {
        var puntoCercano = Number.MAX_VALUE;
        var resultado;
        for (var i = 0; i < puntos.length; i++) {
            if (this.calcularDistancia(puntos[i]) < puntoCercano) {
                puntoCercano = this.calcularDistancia(puntos[i]);
                resultado = puntos[i];
            }
        }
        return resultado;
    };
    Punto.prototype.toString = function () {
        return "(" + this.x + "," + this.y + ")";
    };
    return Punto;
}());
exports.Punto = Punto;
