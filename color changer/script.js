const boxes=document.querySelectorAll('.child')
const bg=document.querySelector('body')

boxes.forEach((box)=>{
    box.addEventListener('click', (e)=>{
        console.log(e);
        bg.style.backgroundColor=e.target.id;
    })
})