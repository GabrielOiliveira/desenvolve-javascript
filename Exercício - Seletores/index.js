const mudaTitulo = (novoTitulo) => {
    const titulo = document.getElementById('titulo-principal')
    titulo.innerText = novoTitulo
}

setTimeout(() => mudaTitulo('Título alterado!'), 3000)

const listaDeLi = document.getElementsByTagName('li')

const listaDeCores = ['#d60000', '#05f7ab', '#1fa91b']

const listaDeParagrafos = document.getElementsByTagName('p')

const botao = document.getElementsByTagName('button')[0]

setTimeout(() => {
    botao.innerText = 'Texto do botão alterado!'
}, 3000);

for(let paragrafo of listaDeParagrafos) {
    paragrafo.classList = 'paragrafo'
}

for(let li in listaDeLi) {
    listaDeLi[li].style.color = listaDeCores[li]
}