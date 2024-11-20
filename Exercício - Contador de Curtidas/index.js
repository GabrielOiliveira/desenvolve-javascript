const nome = document.getElementById('nome')
const curtida = document.getElementById('curtida')
const info = document.getElementById('info')

const curtidas = []

function infoAtualiza() {
    const total = curtidas.length

    if (total === 0) {
        info.textContent = 'Ninguém curtiu'
    }
    else if (total === 1) {
        info.textContent = `${curtidas[0]} curtiu`
    }
    else if (total === 2) {
        info.textContent = `${curtidas[0]} e ${curtidas[1]} curtiram`
    }
    else {
        info.textContent = `${curtidas[0]}, ${curtidas[1]} e mais ${total - 2} pessoas curtiram`
    }
}

curtida.addEventListener('click', () => {
    const nomeCurtida = nome.value.trim()

    if (nomeCurtida && !curtidas.includes(nomeCurtida)) {
        curtidas.push(nomeCurtida)
        infoAtualiza()
    }
    nome.value = ''
})