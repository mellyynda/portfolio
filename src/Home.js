import logo192 from './img/logo192.png';
import { useState, useEffect } from 'react';

const API_URL = 'https://api.openweathermap.org/data/2.5/weather?q=';
const API_KEY = '&appid=1f7c80d8a27983216c1e30554ff70078';
const SETTINGS = '&units=metric'


function Home() {

    let [weatherData, setWeatherData] = useState([]);
    let [city, setCity] = useState('Stockholm');
    const messages = ["but that won't stop me from", "so i'll have fun by"];
    let [message, setMessage] = useState('');
    let [responseMessage , setResponseMessage] = useState('');
    let apiCallsNo = 0;
    let [weatherParam, setWeatherParam] = useState("new");

    useEffect(() => {
    fetch(API_URL + city + API_KEY + SETTINGS)
        .then(response => response.json())
        .then(data => {
            setWeatherData(data);
            if(apiCallsNo < 1) {
                setSthlmW();
            }
            apiCallsNo++;
            console.log(data);
            console.log('in effect');
        })
        .catch( error => { 
            weatherParam = "new";
            console.log(error);
        })
    }, [city])

    const setSthlmW = () => {
        switch(weatherData.weather[0].main) {
            case "Snow":
                setMessage(messages[0]);
                setWeatherParam('snowy');
                
                break;
            case "Clouds":
                setMessage(messages[0]);
                setWeatherParam('cloudy');
                
                break;
            case "Fog":
                setMessage(messages[0]);
                setWeatherParam('fogy');
                
                break;
            case "Rain":
                setMessage(messages[0]);
                setWeatherParam('rainy');
                
                break;
            case "Clear":
                setMessage(messages[1]);
                setWeatherParam('sunny');
                
                break;
            case "Haze":
                setMessage(messages[0]);
                setWeatherParam('hazy');
                
                break;
            case "Mist":
                setMessage(messages[0]);
                setWeatherParam('misty');
                
                break;
            default:
                setMessage(messages[1]);
                setWeatherParam('new');
        }
        console.log('called setSthlm:', weatherData.weather[0].main);
        // weatherData.weather[0].main
    }
    
    console.log(apiCallsNo);
    
    //console.log(weatherData.weather[0].main);
    console.log('in home');

    const getWeather = (e) => {
        e.preventDefault();
        setResponseMessage('The temperature is:');
        setCity(e.target.querySelector('input').value.trim());
        console.log(responseMessage);
    }

    return (
        <section>
            <div><img src={logo192} />@mellyynda</div>
            <h1>WEL<br />COME</h1>
            <div>.</div>
            <div>
                <p>I am a passionate aspiring front-end web developer based in Stockholm and today is a {weatherParam} day {message} gaining new skills and hopefully creating something that matters. Hope you are having a great day yourself!</p>
                <form onSubmit={getWeather}>
                <label htmlFor='city'>Check the weather in your city:</label>
                <input type='text' name='city' placeholder='enter a city'></input>
                <input type='submit' value='Submit'></input>
                </form>
                <p>{responseMessage ? <span>{responseMessage} {weatherParam}</span> : null }</p>
            </div>
            <br /><br />
            <div>
                <p>One of the most common problem people are experiencing with Prettier/ESLint is having conflicting warnings and lot of red lining errors.

                A good way to avoid this problem is using Prettier as a ESLint plugin.

                That’s why you have to install a special plugin called “eslint-plugin-prettier” ad dev dependency:
                One of the most common problem people are experiencing with Prettier/ESLint is having conflicting warnings and lot of red lining errors.

                A good way to avoid this problem is using Prettier as a ESLint plugin.

                That’s why you have to install a special plugin called “eslint-plugin-prettier” ad dev dependency:
                One of the most common problem people are experiencing with Prettier/ESLint is having conflicting warnings and lot of red lining errors.

                A good way to avoid this problem is using Prettier as a ESLint plugin.

                That’s why you have to install a special plugin called “eslint-plugin-prettier” ad dev dependency:</p>
            </div>

        </section>
    );
}

export default Home;