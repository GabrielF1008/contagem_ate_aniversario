AOS.init();

const dataDoAniversario = new Date("Aug 10, 2024 00:00:00");
const timeStampDoAniversario = dataDoAniversario.getTime()

const contador = setInterval(function() {
    const agora = new Date()
    const timeStampAtual = agora.getTime()

    const tempoAteOAniversario = timeStampDoAniversario - timeStampAtual

    const diaEmMs = 1000 * 60 * 60 * 24
    const horaEmMs = 1000 * 60 * 60
    const minutoEmMs = 1000 * 60

    const diasAteOAniversario = Math.floor(tempoAteOAniversario / diaEmMs)
    const horasAteOAniversario = Math.floor((tempoAteOAniversario % diaEmMs) / horaEmMs)
    const minutosAteOAniversario = Math.floor((tempoAteOAniversario % horaEmMs) / minutoEmMs)
    const segundosAteOAniversario = Math.floor((tempoAteOAniversario % minutoEmMs) / 1000)

    document.getElementById('contador').innerHTML = `${diasAteOAniversario}d ${horasAteOAniversario}h ${minutosAteOAniversario}m ${segundosAteOAniversario}s`

    if(tempoAteOAniversario < 0) {
        clearInterval(contaAsHoras)
        document.getElementById('contador').innerHTML = 'Evento expirado'
    }
}, 1000)

