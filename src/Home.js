import { useState, useEffect } from 'react';
import styled from 'styled-components';
// import Clear from './img/Clear.png';
// import Clouds from './img/Clouds.png';
// import MistFog from './img/Mist-Fog.png';
// import Rain from './img/Rain.png';
// import Snow from './img/Snow.png';
// import Haze from './img/Haze.png';
import line from './img/line.png';
import { SectionScreen, SectionTitle, titlePadding, colorsObj } from './StyledComp';

const { white, yellow, pink, darkGreen, black } = colorsObj;

const StyledDiv = styled(SectionScreen)`
h1 {
    transform: translateX(${titlePadding}px);
}
`

const Content = styled.section`
width: 100%;
max-width: 800px;
margin: 0 auto;
.nice-text {
    padding: 20px;
}
`
const WeatherCard = styled.section`
margin:0 20px 20px;
padding: 15px;
max-width: 320px;
background: rgb(211,12,123);
background: linear-gradient(139deg, ${pink} 63%, ${yellow} 100%);
border-radius: 5px;
form>label {
    display: block;
}
*{
    color: ${white};
}
input{
    color:${black};
    font-size: 1rem;
    padding: 10px;
    border-radius: 0.2rem;
    border: none;
    margin-top: 5px;
}
input[type='text'] {
    background-color: ${white};
    width: 100%;
    max-width: 220px;
}
label[for='city'] {
    font-size: 1.3rem;
}
`
const API_URL = 'https://api.openweathermap.org/data/2.5/weather?q=';
const API_KEY = '&appid=1f7c80d8a27983216c1e30554ff70078';
const SETTINGS = '&units=metric'

let apiCallsNo = 0;

function Home() {

    const [weatherData, setWeatherData] = useState(null);
    const [userData, setUserData] = useState(null);
    const [city, setCity] = useState('Stockholm,SE');
    const messages = ["but that won't stop me from", "so i'll have fun by"];
    const [responseMessage , setResponseMessage] = useState('');

    useEffect(() => {
    fetch(API_URL + city + API_KEY + SETTINGS)
        .then(response => response.json())
        .then(data => {
            
            if(apiCallsNo < 1) {
               setWeatherData(data);
            } else {
                setUserData(data);
            } 
            apiCallsNo++;
            console.log(apiCallsNo);
            console.log(data);
            console.log('in effect');
        })
        // .catch( error => { 
        //     setWeatherParam("new");
        //     console.log(error);
        // })
    }, [city])

    const setSthlmW = (main) => {
        console.log("in Sthlm", main);
        //console.log("insetSthlm:", weatherData.weather[0].main);
        switch(main) {
            case "Snow":
                return <span>{'snowy'} day {messages[0]}</span>;
            case "Clouds":
                return <span>{'cloudy'} day {messages[0]}</span>;
            case "Fog":
                return <span>{'foggy'} day {messages[0]}</span>;
            case "Rain":
                return <span>{'rainy'} day {messages[0]}</span>;
            case "Clear":
                return <span>{'sunny'} day {messages[1]}</span>;
            case "Haze":
                return <span>{'hazy'} day {messages[0]}</span>;
            case "Mist":
                return <span>{'misty'} day {messages[0]}</span>;
            default:
                <span>{'new'} day {messages[1]}</span>;
        }
    }

    const getWeather = (e) => {
        e.preventDefault();
        let val = e.target.querySelector('input').value.trim();
        console.log(val);
        setCity(val);
        setResponseMessage(`${val.replace(/(^\w|\s\w)/g, m => m.toUpperCase())}`);
        console.log(responseMessage);
    }

    return (
        <section>
            <StyledDiv>
                <SectionTitle><span>WEL</span><span>COME<span>.</span></span></SectionTitle>
            </StyledDiv>
            <Content>
                {weatherData ? <div className="nice-text"><p >I am a passionate aspiring front-end web developer based in Stockholm and today is a {setSthlmW(weatherData.weather[0].main)} gaining new skills and hopefully creating something that matters.</p> <p> Hope you are having a great day yourself!</p></div> : null}
                <WeatherCard>
                    <form onSubmit={getWeather}>
                    <label htmlFor='city'>Check the weather in your city:</label>
                    <input type='text' name='city' placeholder='enter a city'></input>
                    <input type='submit' value='Go'></input>
                    </form>
                    {userData ? 
                    <div>
                        <h2>{responseMessage}</h2>
                        <p>Description: {userData.weather[0].description}</p>
                        <p>Temperature: {userData.main.temp}°C</p>
                        <p>Maximum: {userData.main.temp_max}°C</p>
                        <p>Min: {userData.main.temp_min}°C</p>
                        <p>Feels like: {userData.main.feels_like}°C</p>
                    </div> 
                    : null}
                </WeatherCard>
            </Content>
        </section>
    );
}

export default Home;
