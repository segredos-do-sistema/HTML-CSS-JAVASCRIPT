function azul(){
    var azul = document.body
    azul.style.background = 'blue'

    var cor_da_caixa = document.getElementsByTagName('button')[0]
    cor_da_caixa.style.background = 'blue'

    var neutro = document.getElementById('cor-amarelo')
    neutro.style.background = ''
    var neutro = document.getElementById('cor-vermelho')
    neutro.style.background = ''

    var cor = document.getElementById('cor')
    cor.innerText=('você mudou para a cor azul')
    cor.style.fontSize ='25px'
    cor.style.color = 'white'
    cor.style.background = 'rgb(71, 89, 245)'
    
}
function amarelo(){
    var amarelo = document.body
    amarelo.style.background = 'yellow'

    var cor_da_caixa = document.getElementsByTagName('button')[1]
    cor_da_caixa.style.background = 'yellow'

    var neutro = document.getElementById('cor-azul')
    neutro.style.background = ''
    var neutro = document.getElementById('cor-vermelho')
    neutro.style.background = ''

    var cor = document.getElementById('cor')
    cor.innerText=('você mudou para a cor amarelo')
    cor.style.fontSize ='25px'
    cor.style.color = 'white'
    cor.style.background = 'rgb(165, 184, 40,0.3)'
}
function vermelho(){
    var vermelho = document.body
    vermelho.style.background = 'red'

    var cor_da_caixa = document.getElementsByTagName('button')[2]
    cor_da_caixa.style.background = 'red'

    var neutro = document.getElementById('cor-amarelo')
    neutro.style.background = ''
    var neutro = document.getElementById('cor-azul')
    neutro.style.background = ''

    var cor = document.getElementById('cor')
    cor.innerText=('você mudou para a cor vermelho')
    cor.style.fontSize ='25px'
    cor.style.color = 'white'
    cor.style.background = 'rgb(255, 49, 49)'
}
function resetar(){
    window.location.reload();
}