const listaDeTarefas = []

const adicionar = document.getElementById('adicionar')
const tarefa = document.getElementById('tarefa')
const lista = document.getElementById('lista')

function atualizaLista() {
    lista.innerHTML = ''

    listaDeTarefas.forEach((tarefa, index) => {
        const li = document.createElement('li')
        const checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.checked = tarefa.status
        checkbox.addEventListener('change', () => {
            tarefa.status = !tarefa.status
            atualizaLista()
        })
        const descricao = document.createElement('span')
        descricao.textContent = tarefa.descricao
        if (tarefa.status) {
            descricao.classList.add('concluido')
        }
        li.appendChild(checkbox)
        li.appendChild(descricao)

        lista.appendChild(li)
    })
}

adicionar.addEventListener('click', () => {
    const descricaoTarefa = tarefa.value.trim()

    if (descricaoTarefa) {
        listaDeTarefas.push({descricao: descricaoTarefa, status: false})
        tarefa.value = ''
        atualizaLista()
    }
})