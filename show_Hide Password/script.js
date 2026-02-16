let eyeicon = document.getElementById('eyeicon');
let password = document.getElementById('password');

eyeicon.addEventListener('click', ()=>{
    if(password.type == 'text'){
        eyeicon.src='img/eye-close.png';
        password.type = 'password';
    }
    else{
        password.type = 'text';
        eyeicon.src='img/eye-open.png'; 
    }
})