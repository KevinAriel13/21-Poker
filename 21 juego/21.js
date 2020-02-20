class Carta {
    constructor(palos, numero = [], texto) {
        this.palos = palos;
        this.numero = numero;
        this.texto = texto;

    }
}

class Palo {
    constructor(figura) {
        this.figura = figura;
    }
}
var palos = [new Palo("trebol"), new Palo("Picas"), new Palo("Oro"), new Palo("Espadas")];
var letras = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
class Poker {
    mazo = [];
    Mezclado = [];
    elemento;
    crearBarajas() {
        palos.forEach(function(elementPalo) {
            letras.forEach(function(elementLetra, index) {
                if (index == 0) {
                    this.mazo.push(new Carta(elementPalo, [A, 11], elementLetra))
                } else if (index > 9) {
                    this.mazo.push(new Carta(elementPalo, numero[9], elementLetra))
                } else {
                    this.mazo.push(new Carta(elementPalo, numero[index], elementLetra))
                }
            }, this)
        }, this)

        mezclar() {
            while (this.Mezclado.length < 51) {
                let aleotorio = Math.floor(Math.random() * (51));
                this.elemento = this.Mezclado.find(element => element == aleatorio)
                let condicion = (this.elemento == undefined) ? this.Mezclado.push(aleatorio) : aleatorio;
            }

            for (let i = 0; i < this.mazo.length - 1; i++) {
                this.elemento = this.mazo[this.Mezclado[i]]
                this.mazo[this.Mezclado[i]] = this.mazo[i]
                this.mazo[i] = this.elemento;
            }
            return this.mazo
        }

    }



    class Juegar extends Poker {
        juegoPedido = []
        contador = 0;
        pedir() {
            this.juegoPedido.push(this.Mezclado[this.contador].numero);
            this.contador++;
            validar()
            return this.juegoPedido
        }