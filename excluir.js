// excluirContato.js
const prompt = require('prompt-sync')();
const { excluirContato, listarContatos } = require('./contatos');

function excluir() {
  const id = parseInt(prompt('Digite o ID do contato que deseja excluir: '), 10);

  const contatoExcluido = excluirContato(id);

  if (contatoExcluido) {
    console.log('Contato excluído com sucesso!');
  } else {
    console.log('Contato não encontrado.');
  }

  console.log('Lista de contatos:');
  listarContatos().forEach(contato => {
    console.log(`ID: ${contato.id}, Nome: ${contato.nome}, Telefone: ${contato.telefone}, Email: ${contato.email}`);
  });
}

module.exports = excluir;



    
  