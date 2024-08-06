// contatos.js
const prompt = require('prompt-sync')();

let contatos = [
  { id: 1, nome: 'Alice', telefone: '1234-5678', email: 'alice@example.com' },
  { id: 2, nome: 'Bob', telefone: '8765-4321', email: 'bob@example.com' },
  { id: 3, nome: 'Carol', telefone: '5678-1234', email: 'carol@example.com' }
];

function listarContatos() {
    console.log('Lista de contatos:');
    contatos.forEach(contato => {
      console.log(`ID: ${contato.id}, Nome: ${contato.nome}, Telefone: ${contato.telefone}, Email: ${contato.email}`);
    });
}

function adicionarContato() {
  const nome = prompt('Digite o nome do contato: ');
  const telefone = prompt('Digite o telefone do contato: ');
  const email = prompt('Digite o email do contato: ');

  const novoContato = {
    id: contatos.length > 0 ? contatos[contatos.length - 1].id + 1 : 1,
    nome,
    telefone,
    email
  };

  contatos.push(novoContato);
  console.log('Contato adicionado com sucesso!');
}

function atualizarContato() {
  const id = parseInt(prompt('Digite o ID do contato a ser atualizado: '), 10);
  const contato = contatos.find(contato => contato.id === id);

  if (contato) {
    console.log('Deixe em branco se não quiser atualizar o campo.');
    const novoNome = prompt(`Digite o novo nome (atual: ${contato.nome}): `) || contato.nome;
    const novoTelefone = prompt(`Digite o novo telefone (atual: ${contato.telefone}): `) || contato.telefone;
    const novoEmail = prompt(`Digite o novo email (atual: ${contato.email}): `) || contato.email;

    contato.nome = novoNome;
    contato.telefone = novoTelefone;
    contato.email = novoEmail;

    console.log('Contato atualizado com sucesso!');
  } else {
    console.log('Contato não encontrado.');
  }
}

function excluirContato() {
  const id = parseInt(prompt('Digite o ID do contato a ser excluído: '), 10);
  const index = contatos.findIndex(contato => contato.id === id);

  if (index !== -1) {
    contatos.splice(index, 1);
    console.log('Contato excluído com sucesso!');
  } else {
    console.log('Contato não encontrado.');
  }
}

function main() {
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

module.exports = {
  listarContatos,
  adicionarContato,
  excluirContato
};
