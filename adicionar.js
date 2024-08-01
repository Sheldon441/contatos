// adicionarContato.js
const prompt = require('prompt-sync')();
const { adicionarContato, listarContatos } = require('./contatos');

function adicionar() {
  const nome = prompt('Digite o nome do contato: ');
  const telefone = prompt('Digite o telefone do contato: ');
  const email = prompt('Digite o email do contato: ');

  const novoContato = adicionarContato({ nome, telefone, email });

  console.log('Contato adicionado com sucesso!');
  console.log('Lista de contatos:');
  listarContatos().forEach(contato => {
    console.log(`ID: ${contato.id}, Nome: ${contato.nome}, Telefone: ${contato.telefone}, Email: ${contato.email}`);
  });
}

module.exports = adicionar;