    // Variaveis criadas para manipulação.
    let altura = 0;
    let largura = 0;
    let vidas = 1;
    let tempo = 15;

    let criaMoscaTempo = 1500;

    let nivel = window.location.search; // Parametro "search" diferente da função "href", retorna tudo apos a "?" inclusive a interrogação.

    nivel = nivel.replace('?',''); // Faz com que o retorno pelo search venha apenas o parametro da dificuldade selecionada.

// Modificar o tempo do aparecimento de moscas com base na dificuldade selecionada.
if(nivel === 'normal'){
    criaMoscaTempo = 1500;

} else if (nivel === 'dificil'){
    criaMoscaTempo = 1000;

} else if (nivel === 'master'){
    criaMoscaTempo = 750;
}

// Função criada para atribuir os valores de redirecionamento da pagina e atribuir as variaveis altura e largura. 
function ajustaPalcoJogo(){   
    altura = window.innerHeight;
    largura = window.innerWidth;
}

ajustaPalcoJogo();

//Faz com  que o cronometro decrimente a cada segundo, começando pelo tempo estimado na declaração de variavel acima (let tempo = 15;).
let cronometro = setInterval(function(){ 
    
    tempo -= 1;

    if(tempo < 0 ){

        clearInterval(cronometro);
        clearInterval(criaMosca);
        window.location.href = 'vitoria.html'

    } else{
        document.getElementById('cronometro').innerHTML = tempo;
    }

}, 1000);

// Faz com que a mosca apareça aleatoriamente dentro do limite do tamanho da tela, alem de criar o elemento html.
function posicaoRandomica(){ 

//Remover o mosquisto anterior (caso exista)
    if(document.getElementById('mosca')){
        document.getElementById('mosca').remove();

        if(vidas > 3){
            
            window.location.href = 'fim_de_jogo.html'
        
        }else{
            document.getElementById('v' + vidas).src ='imagens/coracao_vazio.png';
            vidas++
        }

    };

// pega a posição calculada pelo "Matt" e atribuido a "largura e altura" e repassa para as variaveis "posiçãoX e posiçãoY". 
    let posicaoX = Math.floor(Math.random() * largura) - 90;
    let posicaoY = Math.floor(Math.random() * altura) - 90;

    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;


// Criar o elemento html 
    let mosca = document.createElement('img');
    mosca.src = 'imagens/mosca.png';
    mosca.className = tamanhoAleatorio() + ' ' + ladoAleatorio();
    mosca.style.left = posicaoX + 'px';
    mosca.style.top = posicaoY + 'px';
    mosca.style.position = 'absolute';
    mosca.id = 'mosca';
// Apos a ação do click do mouse remove a mosca.
    mosca.onclick = function(){ 
        this.remove()
    };

    document.body.appendChild(mosca);

}

// Define um tamanho aleatorio para as moscas
function tamanhoAleatorio(){
    let classe = Math.floor(Math.random() * 3);

    switch (classe){
        case 0:
            return 'mosca1';
        
        case 1:
            return 'mosca2';

        case 2:
            return 'mosca3';
    
    };
};

//Faz com que as moscas apareça olhando para lados diferente aleatoriamente.
function ladoAleatorio(){
    let classe = Math.floor(Math.random() * 2);

    switch (classe){
        case 0:
            return 'ladoA';
        
        case 1:
            return 'ladoB';
    
    };
};