var altura = 0
var largura = 0
var classe
tempo = 15

document.getElementById('cronometro').innerHTML = tempo

var divCoracoes = document.getElementById('coras')


function ajusteDeTela(){
    //Ajusta para a mosca não aparecer fora da tela
    altura = innerHeight
    largura = innerWidth
}
ajusteDeTela()

function positionRandomic(){ // aqui abre a positionrandomic 
  
    //cria a cada segundos que colocamos dentro de set interval
    

    var  posX = Math.floor(Math.random() * largura) -100
    var  posY =  Math.floor(Math.random() * altura) -100

    posX = posX < 0 ? 0 : posX
    posY = posY < 0 ? 0 : posY

//if para ver se tem a mosca na tela, se tiver ele apaga e gera o else em baixo 
if(document.getElementById(`mosquito${classe}`)){
    //Ve Se tem o mosquito e tira o coração cheio e coloca o vazio
    
    document.getElementById('cora').remove()
    var coraVazio = document.createElement('img')
    coraVazio.style.width ='40px'
    coraVazio.style.height ='40px'
    coraVazio.setAttribute('src' ,'coracao_vazio.png')
    divCoracoes.appendChild(coraVazio)
    document.getElementById(`mosquito${classe}`).remove()

}else if(!document.getElementById('cora')){
    //caso não tenha mais coraçoes cheios ele vai pra pagina de game over
   window.location.href = 'gameover.html'
    //caso tenha ele continua criando as moscas 
}else{
 
var imgMosca = document.createElement('img')
imgMosca.setAttribute('src' , 'mosca.png')
imgMosca.className = `${randomicSize() }`
imgMosca.id = `mosquito${classe}` //aqui adiciona a classe aleatoria criada em randomicSize()
imgMosca.style.position = 'absolute'
imgMosca.style.top = `${posY}px`
imgMosca.style.left = `${posX}px` 
imgMosca.addEventListener('click' , matarMosca)

document.body.appendChild(imgMosca)
}

}//aqui fecha a positionrandomic

//função de click para remover as moscas caso clicarmos em cima dela 
function matarMosca(){
    document.getElementById(`mosquito${classe}`).remove()
}

//determina a dificuldade
var nivel = window.location.search
var velocidadeDedificuldade = 1500
nivel = nivel.replace('?' , '')

if(nivel === 'facil'){
   velocidadeDedificuldade = 1500
}else if(nivel === 'medio' ){
   velocidadeDedificuldade = 1200
}else if(nivel === 'dificl'){
   velocidadeDedificuldade = 1000
}else if(nivel === 'super'){
   velocidadeDedificuldade = 500
}


//set interval com positionrandomic dentro, para cirar ela a cada segundos

setInterval(function(){
    positionRandomic()
      

}, velocidadeDedificuldade )

//função para criar uma string com números diferentes levando em considerção o math.random()
// então colocamos como classe no imgMosca, para quando ela recarregar ela obter um tamnho diferente 
function randomicSize(){

    var tamanho = Math.floor(Math.random() * 3)
    
switch(tamanho){

    case 0:
         classe = '1'
         break
    case 1:
        classe = '2'
        break
    case 2: 
         classe = '3'
         break
         
         
}


}


//função para criar o cronometro com set interval
setInterval( function(){

   if(tempo == 0){
     window.location.href = 'venceu.html'
    clearInterval()
   }else{
    tempo--
    var span = document.getElementById('cronometro') 
    span.innerHTML = tempo
   }


} , 1000)


