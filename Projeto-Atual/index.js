class Cliente {
    nome;
    cpf;
    agencia;
    saldo;
    rg;
}
// a classe (class Cliente) é o molde. Os clientes são o Objeto.
// Ctrl + Alt você edita várias linhas de uma única vez.

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "Renan";
cliente1.cpf = "11122233309";
cliente1.agencia = "1001";
cliente1.saldo = 0;
cliente1.rg = "1.222-111";

cliente2.nome = "Alice";
cliente2.cpf = "88822233309";
cliente2.agencia = "1001";
cliente2.saldo = 0;


console.log(cliente1, cliente2);