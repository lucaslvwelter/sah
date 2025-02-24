function tempo()
{
    var data = new Date
    var ano_at = String(data.getFullYear())
    var mes_at = String(data.getMonth())
    var dia_at = String(data.getDate()).padStart(2, '0')
    var hora_at = String(data.getHours()).padStart(2, '0')
    var minuto_at = String(data.getMinutes()).padStart(2, '0')
    var segundo_at = String(data.getSeconds()).padStart(2, '0')
    var campo_tempo = document.getElementById('tempo')

    const ano = 2024
    const mes = 6
    const dia = 15  

    var anos = 0
    var meses = 0
    var dias = 0

    if (ano_at > ano) // Caso tenha uma diferença de anos, calcula quantos meses são
    {
        for (let j = 0; j < (ano_at - ano); j++)
        {
            let cont = 0
            for (let i = mes; i < 12; i++) 
            {
                if (j > 0 & cont == 0)
                {
                    i = 0
                    cont = 1
                }
                meses += 1
            }
        }
    }

    for (let i = 0; i <= mes_at; i++) // Pega quantos meses são do ano atual
    {
        if (i == mes_at & dia_at < dia)
        {
            break;
        }
        meses += 1;
    }

    while (meses >= 12)
    {
        meses = meses - 12
        anos += 1
    }

    if (dia_at < dia & mes_at == (mes - 1))
    {
        dias = dia_at
    }

    else
    {
        dias = Math.abs(dia - dia_at)
    }

    campo_tempo.innerHTML = `${anos} anos, ${meses} meses, ${dias} dias, ${hora_at} horas, ${minuto_at} minutos, ${segundo_at} segundos`
}
setInterval(tempo, 1000)