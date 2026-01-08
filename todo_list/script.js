let btn=document.querySelector("#add-btn")
let input=document.querySelector("#input-todo")
let list=document.querySelector("todo-list")


const saved=localStorage.getItem('todos');
const todos=saved? JSON.parse(saved):[];


function saveTodos(){
    localStorage.setItem('todos', JSON.stringify(todos) )
}


function createTodoNode(todo, index){
    const li=document.createElement('li');
    const checkbox=document.createElement('input');
    checkbox.type='checkbox';
    checkbox.checked=!!todo.completed;
    checkbox.addEventListener('change', ()=>{
        todo.completed=checkbox.checked;
        saveTodos();
    })
}

function render(){
    list.innerHTML="";

    todos.forEach((todo, index) => {
        const node=createTodoNode(todo, index)
        list.appendChild(node);
        
    });
}