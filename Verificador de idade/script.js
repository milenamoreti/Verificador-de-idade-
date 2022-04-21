function verificar() {
    var data = new Date()
    var ano = data.getFullYear() //full year ano completo e atual 
    var fano = document.getElementById('txtano') //tanto faz se selecionar desse jeito ou do jeito abaixo 
    var res = document.querySelector('div#res') 
    if (fano.value.length == 0 || Number(fano.value) > ano) {// se o valor do ano for igual a zero ou se o ano que ele digitar for maior que o ano atual, então eu vou enviar umma mensagem de erro 
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex') //aqui é pra eu ver onde ele vai clicar
        var idade = ano - Number(fano.value)                   // ano atual - o ano digitado que está na variavel fano 
        var gênero = ''
        var img = document.createElement('img') //aqui estamos criando a imagem interativa no js 
        img.setAttribute('id', 'foto') //aqui estou atribuindo uma identidade às imagens que vou colocar 
        if (fsex[0].checked) {//se ele marcar o zero, genero masculino 
       gênero = 'Homem'
       if (idade >=0 && idade < 10 ){// aqui eu abri um if dentro do if e encerrei com else e vou repetir o mesmo em mulher 
           //criança
           img.setAttribute('src', 'menino.png')
       } else if (idade < 21) { 
           //jovem
           img.setAttribute('src', 'adolescente-menino')
       } else if (idade < 50) { 
           //adulto 
           img.setAttribute('src', 'homem-adulto.png')
        } else {  
            //idoso 
            img.setAttribute('src', 'senhor.png')
        }
        } else if (fsex[1].checked){//se ela marcar feminino, vai acontecer isso 
       gênero = 'Mulher'
       if (idade >=0 && idade < 10 ) {
        //criança 
        img.setAttribute('src', 'menina.png')
    } else if (idade < 21){ 
        //jovem
        img.setAttribute('src', 'adolescente-menina.png')
    } else if (idade < 50) { 
        //adulto 
        img.setAttribute('src', 'adulta.png')
     } else { 
        img.setAttribute('src', 'senhora.png')
         //idoso 
     }
    }
    res.style.textAlign = 'center'// centralizando o resultado 
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`// escrevendo na tela pelo js 
    res.appendChild(img)// aqui eu terminei de criar a imagem no js 
}
}