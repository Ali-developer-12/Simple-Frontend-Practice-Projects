const passwordBox =  document.querySelector('#password')
const btn= document.querySelector('#btn')
const length = 12;  //length for password

const upperCase='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase= 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '@!#$%^&*()_+~|}{[]<>/-=';
const allChracters = upperCase + lowerCase + numbers + symbols;
console.log(allChracters);


function createPassword(){

    let password='';

    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];
    while(length>password.length)
    {
        password += allChracters[Math.floor(Math.random() * allChracters.length)];

    }
    return password;
}

function copyPassword(){
    passwordBox.select();
    document.execCommand('copy')
}

btn.addEventListener('click', ()=>{
    passwordBox.value=createPassword();
})