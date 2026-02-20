let pass = document.getElementById("password");
let message = document.getElementById("message");
let strenth = document.getElementById("strenth");


pass.addEventListener('input', ()=>{
    let char = 0;
    let num = 0;
    if(pass.value.length > 0){
        message.style.display = 'block';
    }
    else{
        message.style.display = 'none';
    }
    if(pass.value.length <4 ){
        strenth.innerHTML = 'weak';
        pass.style.borderColor = 'red'
        message.style.color = 'red'
    }
    else if(pass.value.length >4 && pass.value.length<8){
        strenth.innerHTML = 'medium';
        pass.style.borderColor = 'yellow'
        message.style.color = 'yellow'
    }
    else if(pass.value.length >= 8){
        strenth.innerHTML = 'strong';
        pass.style.borderColor = 'green'
        message.style.color = 'green'
    }
})