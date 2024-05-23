const dataDoEvento=new Date("Dec 11, 2024 19:00:00")
const timeStampEvento= dataDoEvento.getTime()

const contaTempo=setInterval(function() {
    const agora=new Date()
    const timeStampAtual=agora.getTime()
    const tempoAteEvento=timeStampEvento-timeStampAtual

    const diaEmMs=24*60*60*1000
    const horaEmMs=60*60*1000
    const minutoEmMs=60*1000

    const diasAteEvento=Math.floor(tempoAteEvento/diaEmMs)
    const horasAteEvento=Math.floor(tempoAteEvento%diaEmMs/horaEmMs)
    const minutosAteEvento=Math.floor(tempoAteEvento%horaEmMs/minutoEmMs)
    const segundosAteEvento=Math.floor(tempoAteEvento%minutoEmMs/1000)

    document.getElementById('contador').innerHTML=`${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}s`

},1000)