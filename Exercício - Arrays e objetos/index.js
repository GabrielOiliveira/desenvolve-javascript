const estoque = [
    { titulo: 'Harry Potter e a Pedra Filosofal', autor: 'J. K. Rowling', quantidade: 9},
    { titulo: 'Harry Potter e a Câmara Secreta', autor: 'J. K. Rowling', quantidade: 12},
    { titulo: 'Harry Potter e o Prisioneiro de Azkaban', autor: 'J. K. Rowling', quantidade: 7},
    { titulo: 'Harry Potter e o Cálice de Fogo', autor: 'J. K. Rowling', quantidade: 15}
];

// Função para adicionar livro

const adicionarLivro = (titulo, autor, quantidade) => {
    estoque.push({
        titulo,
        autor,
        quantidade
    })
}

adicionarLivro('Harry Potter e a Ordem da Fênix', 'J. K. Rowling', 7)

// Função para remover livro

const removeLivro = (tituloDoLivro) => {
    const existeTituloNoEstoque = !!estoque.find(livro => livro.titulo === tituloDoLivro)
    if(existeTituloNoEstoque) {
        for(let indice = 0; indice < estoque.length; indice++){
            if(estoque[indice].titulo === tituloDoLivro) {
                console.log(`O livro "${tituloDoLivro}" foi removido.`)
                estoque.splice(indice, 1);
                break;
            }
        } 
    }
    else
    console.log(`O livro "${tituloDoLivro}" não foi encontrado.`)
}

removeLivro('Harry Potter e a Pedra Filosofal');

// Função para atualizar quantidade de um livro

const atualizaQuantidade = (tituloDoLivro, novaQuantidade) => {
    const existeTituloNoEstoque = !!estoque.find(livro => livro.titulo === tituloDoLivro)
    if(existeTituloNoEstoque) {
        for (let livro of estoque) {
            if(livro.titulo === tituloDoLivro) {
                livro.quantidade = novaQuantidade;
                console.log(`A quantidade do livro "${livro.titulo}" foi atualizada para ${novaQuantidade}.`)
                break;
            }
        }
    }
    else {
        console.log(`O livro "${livro.titulo}" não foi localizado no estoque.`)
    }
}

atualizaQuantidade('Harry Potter e o Prisioneiro de Azkaban', 22);

// Função para listar livros no estoque

const listarLivros = () => {
    if(estoque.length === 0) {
        console.log('O estoque está vazio.')
    }
    else {
        console.log(`O estoque possui ${estoque.length} títulos.`)
        for (let livro of estoque) {
            console.log(`
Livro: ${livro.titulo}
Autor: ${livro.autor}
Quantidade: ${livro.quantidade}`)
        }
    }
}

listarLivros();