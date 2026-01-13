let boxes = document.querySelectorAll(".box");   // Access all boxes
let reset = document.querySelector("#res-btn");  //Access Reset Button

let turnO = true;   //Player O Turn

let winPattern=[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];                  //This array is for checking the winner


boxes.forEach(box => {
    box.addEventListener('click', ()=>{
        // console.log('box was clicked');
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText='X';
            turnO = true;
        }
        box.disabled=true;
        checkWiner();
        
    })
});


function enableBox(){
    for(let box of boxes){
        box.disabled=false;
        box.innerText='';
        document.querySelector('.message').innerText='';
    }
}

function disabledBox(){
    for(let box of boxes){
        box.disabled=true;
    }
}


function resetGame(){
    turnO=true;
    enableBox();
}

function checkWiner(){
    for(let pattern of winPattern){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
        if(pos1Val!=='' && pos2Val!=='' && pos3Val!==''){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                document.querySelector('.message').innerText=`winner is ${pos1Val}`;
                disabledBox();
            }
        }
    }
};

reset.addEventListener('click',()=>{
    resetGame();
})