// config dos times
const team1 = "FALLEN";
const team2 = "PATS";
let turn = team1;

// 0 - criar o mapPool dentro de um array / lista
let mapPool = ["Train", "Mirage", "Cache", "Inferno", "Cobblestone"];


// pega o elemento na tela que vai receber a msg
const turnText = document.querySelector("#turnText");

// define o valor inicial da msg
turnText.innerText=`É a vez da equipe ${turn} banir o mapa`;

// pega todos os elementos na tela que tem a class card e coloca numa lista chamapa maps
const maps = document.querySelectorAll(".card");

// cria uma função que será atribuida a cada card
function chooseMap(event) {
    if(turn == team1){
        turn=team2
    } else {
        turn=team1
    } 
    turnText.innerText=`É a vez da equipe ${turn} banir o mapa`;

    // 1 - dar a resposta visual que o card foi clicado
    event.currentTarget.classList.add("selected") 

    // 2 - remover o click para nao poder clicar novamente
    event.currentTarget.removeEventListener("click", chooseMap)

    // 3 - mudar o texto para Banned
    event.currentTarget.querySelector(".accept").innerText = "VETADO";

    // 4 - pegar o nome do mapa que foi clicado
    const clickedMap = event.currentTarget.querySelector(".map-name").innerText;

    // 5 - filtrar e retirar o mapa que foi clicado do mapPool
    mapPool = mapPool.filter(map => map != clickedMap)
    
    // 6 - quando sobrar apenas 1 mapa na lista, destacar esse card
    if (mapPool.length==1) {
    const decidedMap = document.querySelector(".card:not(.selected)");
    decidedMap.classList.add("picked");
    decidedMap.removeEventListener("click", chooseMap);
    decidedMap.classList.add("disable-hover");
    turnText.innerText=`O mapa do jogo será ${mapPool[0]}!`
    
    }
}

// estrutura de repetição para 'vincular' a função criada com o click em cada card(maps)
for (let index = 0; index < maps.length; index++){
    maps[index].addEventListener("click", chooseMap)
}