const notesContainer = document.querySelector(".notes-container");
const btn = document.querySelector(".btn");
let notes = document.querySelector('.input-box');


function updateStorage(){
    localStorage.setItem('notess', notesContainer.innerHTML);
}

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem('notess');
}


btn.addEventListener('click', ()=>{
    let inputBox = document.createElement('p');
    let img = document.createElement('img');
    inputBox.className = 'input-box';
    inputBox.setAttribute('contenteditable', 'true');
    img.src = 'img/delete.png';
    notesContainer.appendChild(inputBox).appendChild(img);
    console.log('ali Raza Khan');
    
});

notesContainer.addEventListener('click', (e)=>{
    if(e.target.tagName === 'IMG'){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === 'P'){
        notes = document.querySelectorAll('.input-box');
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }
        });
    }
})

document.addEventListener('keydown', event =>{
    if(event.key === 'Enter'){
        document.execCommand('insertLineBreak');
        event.preventDefault();
    }
})

showNotes();