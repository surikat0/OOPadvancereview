"use strict";
exports.__esModule = true;
exports.Triangulo = void 0;
var Triangulo = /** @class */ (function () {
    function Triangulo(vertice1, vertice2, vertice3) {
        this.vertice1 = vertice1;
        this.vertice2 = vertice2;
        this.vertice3 = vertice3;
    }
    Triangulo.prototype.calcularLongitudLados = function () {
        var a = this.vertice1.calcularDistancia(this.vertice2);
        var b = this.vertice2.calcularDistancia(this.vertice3);
        var c = this.vertice3.calcularDistancia(this.vertice1);
        var pitagoras = [a, b, c];
        return pitagoras;
    };
    return Triangulo;
}());
exports.Triangulo = Triangulo;
