import { Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

// a classe (class Cliente) é o molde. Os clientes são o Objeto.
// Ctrl + Alt você edita várias linhas de uma única vez.



const cliente1 = new Cliente();
cliente1.nome = "Renan";
cliente1.cpf = "11122233309";

const cliente2 = new Cliente();
cliente2.nome = "Kelly";
cliente2.cpf = "88822233309";


const contaCorrenteRenan = new ContaCorrente();
contaCorrenteRenan.agencia = 1001;
contaCorrenteRenan.cliente =  cliente1;
contaCorrenteRenan.depositar(500);

const conta2 = new ContaCorrente()
conta2.cliente = cliente2;
conta2.agencia = 102;

contaCorrenteRenan.transferir(200, conta2);

console.log(conta2);
console.log(contaCorrenteRenan);