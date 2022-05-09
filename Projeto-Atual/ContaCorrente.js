export class ContaCorrente {
    cliente;
    agencia;


    _saldo = 0; //Underline antes da variável significa que o atributo é privado.
    

    sacar(valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            return valor;
        }
    }

    depositar(valor) {
        if (valor <= 0) {
            return;
        }
        this.saldo += valor;
    }
}