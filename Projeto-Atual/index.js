class Cliente {
    nome;
    cpf;
}
// a classe (class Cliente) é o molde. Os clientes são o Objeto.
// Ctrl + Alt você edita várias linhas de uma única vez.

class ContaCorrente {
    agencia;
    saldo;

    sacar(valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
        }
    }
}
let valorSacado = 200;


const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "Renan";
cliente1.cpf = "11122233309";

cliente2.nome = "Kelly";
cliente2.cpf = "88822233309";

const contaCorrenteRenan = new ContaCorrente();

contaCorrenteRenan.saldo = 0;
contaCorrenteRenan.agencia = 1001;


console.log(contaCorrenteRenan.saldo);
contaCorrenteRenan.saldo = 100;
console.log(contaCorrenteRenan.saldo);
contaCorrenteRenan.sacar(200);




console.log(contaCorrenteRenan.saldo);
console.log(cliente1);
console.log(cliente2);
