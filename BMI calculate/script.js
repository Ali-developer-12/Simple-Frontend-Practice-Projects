const form = document.querySelector('form')

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const height=parseFloat(document.querySelector('#height').value);
    const weight=parseFloat(document.querySelector('#weight').value);
    const result=document.querySelector('#result');
    if(height<0 && weight<0){
        result.innerHTML=`Please Enter correct height and weight`;
    }
    else if(height<0){
        result.innerHTML=`Please Enter valid Height`;
    }
    else if(weight<0){
        result.innerHTML=`Please Enter valid weight`;
    }

    else{
        const bmi=(weight / ((height * height)/10000)).toFixed(2);
        if(bmi>24.9){
        result.innerHTML=`<span>Your BMI is = ${bmi}. it is over Weight</span>`
        }
        else if(bmi>18.6 && bmi<24.9){
        result.innerHTML=`<span>Your BMI is = ${bmi}. it is Normal</span>`
        }
        else if(bmi<18.6){
        result.innerHTML=`<span>Your BMI is = ${bmi}. it is Under Weight</span>`
        }
    }

    
})