let randomNum=parseInt(Math.random()*100 + 1);
const submit=document.querySelector("#subt");
const inputField=document.querySelector("#guessfield");
const gueses=document.querySelector(".guesesresult");
const remaning=document.querySelector(".lastResult");
const lowOrHi=document.querySelector('.lowOrHi');
const startOver=document.querySelector('.resultParas');

const p=document.createElement('p');

let prevGuess=[];
let numGuess=1;
let playGame=true;


if(playGame){
    submit.addEventListener('click', (e)=>{
        e.preventDefault();
        const guess=parseInt(inputField.value)
        // console.log(guess)
        validateGuess(guess);
    })
}


function validateGuess(guess){
    if(isNaN(guess)){
        alert("please Enter Valid number")
    }
    else if(guess<1){
        alert('Please Enter a number more than one');
    }
    else if(guess>100){
        alert('Please Enter a number Less then 100')
    }
    else{
        if(prevGuess.length===9){
            displayGuess(guess);
            displayMsg(`Game over random Number was ${randomNum}`);
            endGame();
        }
        else{
            prevGuess.push(guess);
            console.log(prevGuess);
            displayGuess(guess);
            checkGuess(guess);
        }
    }

}

function displayGuess(guess){
    inputField.value='';
    gueses.innerHTML += ` ${guess} `
    numGuess++;
    remaning.innerHTML=`Guess remaning:  ${11-numGuess}`

}

function displayMsg(message){
    lowOrHi.innerHTML=`<h3>${message}</h3>`;
}


function checkGuess(guess){
    if(guess===randomNum){
        displayMsg('You won the Game. Your Guess is right');
        endGame();
    }
    else if(guess<randomNum){
        displayMsg('Your Guess is low from actual number');
    }
    else if(guess>randomNum){
        displayMsg('Your Guess is High from actual number');
    }
}


function endGame(){
    inputField.value='';
    inputField.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML=`<h3 id='newGame'>Restart</h3>`;
    startOver.appendChild(p);
    playGame=false;
    newGame();
}


function newGame(){
    const newGameBtn=document.querySelector('#newGame');
    newGameBtn.addEventListener('click', ()=>{
        randomNum=parseInt(Math.random()*100 + 1);
        prevGuess=[];
        numGuess=1;
        remaning.innerHTML=`Guess remaning:  ${11-numGuess}`
        inputField.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame=true;
        lowOrHi.innerHTML='';

        

    })
}