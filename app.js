const options = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

function randomMachine(array) {
    let randomOption = Math.floor(Math.random() * array.length);
    //console.log(array[randomOption]);
    return array[randomOption];
};
let pickByMachine = randomMachine(options);

//Accediendo a los elementos (botones) del html:
let rock = document.querySelector('#btn1');
let paper = document.querySelector('#btn2');
let scissors = document.querySelector('#btn3');
let lizard = document.querySelector('#btn4');
let spock = document.querySelector('#btn5');
let results= document.querySelector('#results');

const onRock= ()=>{
    if(pickByMachine==='rock') results.innerHTML= "Tie";
    else if(pickByMachine=== 'paper') results.innerHTML= "You Lose";
    else if(pickByMachine=== 'scissors') results.innerHTML= "You Win";
    else if(pickByMachine=== 'lizard') results.innerHTML= "You Win";
    else if(pickByMachine=== 'spock') results.innerHTML= 'You Lose';
};

const onPaper= ()=>{
    if(pickByMachine==='rock') results.innerHTML= "You Win";
    else if(pickByMachine=== 'paper') results.innerHTML= "Tie";
    else if(pickByMachine=== 'scissors') results.innerHTML= "You Lose";
    else if(pickByMachine=== 'lizard') results.innerHTML= "You Win";
    else if(pickByMachine=== 'spock') results.innerHTML= 'You Lose';
};
const onScissors= ()=>{
    if(pickByMachine==='rock') results.innerHTML= "You Lose";
    else if(pickByMachine=== 'paper') results.innerHTML= "You Win";
    else if(pickByMachine=== 'scissors') results.innerHTML= "Tie";
    else if(pickByMachine=== 'lizard') results.innerHTML= "You Lose";
    else if(pickByMachine=== 'spock') results.innerHTML= 'You Win';
};
const onLizard= ()=>{
    if(pickByMachine==='rock') results.innerHTML= "You Lose";
    else if(pickByMachine=== 'paper') results.innerHTML= "You Win";
    else if(pickByMachine=== 'scissors') results.innerHTML= "You Lose";
    else if(pickByMachine=== 'lizard') results.innerHTML= "Tie";
    else if(pickByMachine=== 'spock') results.innerHTML= 'You Win';
};
const onSpock= ()=>{
    if(pickByMachine==='rock') results.innerHTML= "You Win";
    else if(pickByMachine=== 'paper') results.innerHTML= "You Lose";
    else if(pickByMachine=== 'scissors') results.innerHTML= "You Win";
    else if(pickByMachine=== 'lizard') results.innerHTML= "You Lose";
    else if(pickByMachine=== 'spock') results.innerHTML= 'Tie';
};


/*        Reglas del juego:
tijeras > papel         tijeras > lagarto
papel > piedra          papel > spock
piedra > lagarto        piedra > tijeras
lagarto > spock         lagarto > papel
spock > tijeras         spock > piedra*/