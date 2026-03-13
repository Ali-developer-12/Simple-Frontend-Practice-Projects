const apiKey = '1d582a21d8035bc143d767d44ccef098';
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";


const btn = document.querySelector('.search button');
const input = document.querySelector('.search input');
const weatherICon = document.querySelector('.weather-icon');



async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    if(response.status == 404){
        
        document.querySelector('.error').style.display = "block";
        document.querySelector('.weather').style.display = 'none';

    }
    else{
        
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp)/10 + '°C';
        document.querySelector('.humidity').innerHTML = data.main.humidity;
        document.querySelector('.wind').innerHTML = data.wind.speed + " km/h";

        if(data.weather[0].main === "Cloude"){
            weatherICon.src = 'img/clouds.png';
        }

        else if(data.weather[0].main === "Clear"){
            weatherICon.src = 'img/clear.png';
        }

        else if(data.weather[0].main === "Rain"){
            weatherICon.src = 'img/rain.png';
        }
        else if(data.weather[0].main === "Drizzle"){
            weatherICon.src = 'img/drizzle.png';
        }
        else if(data.weather[0].main === "Mist"){
            weatherICon.src = 'img/mist.png';
        }

        document.querySelector('.weather').style.display = 'block';
        document.querySelector('.error').style.display = "none";

    }
    
};

document.querySelector('.btn').addEventListener('click', ()=>{
    checkWeather(input.value);
    
});


