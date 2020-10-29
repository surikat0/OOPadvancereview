export class Punto {
    private x:number;
    private y:number;

    constructor (x:number, y:number) {
        this.x = x;
        this.y = y;
    }
    public getX():number {
        return this.x;
    }
    public getY():number {
        return this.y;
    }
    public setX(x:number) {
        this.x = x;
    }
    public setY(y:number) {
        this.y = y;
    }
    public distanciaAlOrigen():number {
        let distancia = 0;
        distancia = Math.sqrt(Math.pow((this.x-0),2) + Math.pow((this.y-0),2));
        return distancia;
    }
    public calcularDistancia(otroPunto:Punto):number {
        let otroPuntoDistancia = 0;
        otroPuntoDistancia = Math.sqrt(Math.pow((this.x-otroPunto.x),2) + Math.pow((this.y-otroPunto.y),2));
        return otroPuntoDistancia;
    }

    public calcularCuadrante():number {
        if(this.x >= 0 && this.y >= 0) {
            return 1;
        } else if (this.x < 0 && this.y >= 0) {
            return 2;
        } else if (this.x < 0 && this.y < 0) {
            return 3;
        } else {
            return 4;
        }
    }
    public calcularMasCercano(puntos: Punto[]): Punto {
        let puntoCercano:number = Number.MAX_VALUE;
        let resultado:Punto;
        for (let i = 0; i < puntos.length; i++) {
            if (this.calcularDistancia(puntos[i]) < puntoCercano) {
                puntoCercano = this.calcularDistancia(puntos[i]);
                resultado = puntos[i];
            }
        }
        return resultado;
    }
    public toString():string {
        return "(" + this.x + "," + this.y + ")";
    }
}