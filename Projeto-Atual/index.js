import { Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

// a classe (class Cliente) é o molde. Os clientes são o Objeto.
// Ctrl + Alt você edita várias linhas de uma única vez.

//const cliente2 = new Cliente();
//cliente2.nome = "Kelly";
//cliente2.cpf = "88822233309";

const cliente1 = new Cliente("Renan", 11122233309);
const cliente2 = new Cliente("Kelly", 88822233309);
console.log(cliente2.cpf);

const contaCorrenteRenan = new ContaCorrente(1001, cliente1);

const conta2 = new ContaCorrente(102, cliente2);

let valor = 200;
contaCorrenteRenan.transferir(valor, conta2);

console.log(contaCorrenteRenan);

