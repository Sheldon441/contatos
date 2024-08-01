// index.js
const adicionar = require('./adicionarContato');
const excluir = require('./excluirContato');
const  listar = require('./contatos');


  function main() {
    const prompt = require('prompt-sync')();
    const opcao = prompt('Digite "1" para adicionar um contato, Digite "2" para listar contatos, Digite "3" para excluir um contato ou Digite "4" para sair. ');
  
    if (opcao === '1') {
      adicionar();
    } else if (opcao === '2') {
      listar();
    } else if (opcao === '3') {
      excluir();
    } else if(opcao === '4') {
      sair();
    }else 
      console.log('Opção inválida.');
    }
//}
main();