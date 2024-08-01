// contatos.js
let contatos = [
  { id: 1, nome: 'Alice', telefone: '1234-5678', email: 'alice@example.com' },
  { id: 2, nome: 'Bob', telefone: '8765-4321', email: 'bob@example.com' },
  { id: 3, nome: 'Carol', telefone: '5678-1234', email: 'carol@example.com' }
];

function listarContatos() {
    console.log('Lista de contatos:');
    listarContatos().forEach(contato => {
      console.log(`ID: ${contato.id}, Nome: ${contato.nome}, Telefone: ${contato.telefone}, Email: ${contato.email}`);
    });
  return contatos;
}

function main() {
  const prompt = require('prompt-sync')();
  let sair = false;

  while (!sair) {
    const opcao = prompt('Digite "1" para adicionar um contato, Digite "2" para listar contatos, Digite "3" para excluir um contato ou Digite "4" para sair. ');

    switch (opcao) {
      case '1':
        adicionarContato();
        break;
      case '2':
        listarContatos();
        break;
      case '3':
        excluirContato();
        break;
      case '4':
        console.log('Saindo...');
        sair = true;
        break;
      default:
        console.log('Opção inválida.');
    }
  }
}

main();

function adicionarContato(contato) {
  const novoContato = {
    id: contatos.length > 0 ? contatos[contatos.length - 1].id + 1 : 1,
    ...contato
  };
  contatos.push(novoContato);
  return novoContato;
}

function excluirContato(id) {
  const index = contatos.findIndex(contato => contato.id === id);
  if (index !== -1) {
    return contatos.splice(index, 1)[0];
  }
  return null;
}

module.exports = {
  listarContatos,
  adicionarContato,
  excluirContato
};