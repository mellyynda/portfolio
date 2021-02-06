import { useState, useEffect } from 'react';
import styled from 'styled-components';
// import Clear from './img/Clear.png';
// import Clouds from './img/Clouds.png';
// import MistFog from './img/Mist-Fog.png';
// import Rain from './img/Rain.png';
// import Snow from './img/Snow.png';
// import Haze from './img/Haze.png';
import { SectionScreen, SectionTitle, titlePadding, colorsObj } from './StyledComp';

const { white, yellow, pink, darkGreen, black } = colorsObj;

const StyledDiv = styled(SectionScreen)`
margin-bottom: 0;
h1 {
    transform: translateX(${titlePadding}px);
}
`

const Content = styled.section`
position: absolute;
top:0;
left: 0;
width: 50%;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

.nice-text {
    margin: 20px;
    p {
        margin-bottom: 18px;
    }
    p:first-child {
        border-top: 5px solid ${yellow};
        font-weight: 600;
        span:first-child{
            font-weight: 400;
            font-style: italic;
        }
    }
    p:nth-child(2){
        font-style: italic;
    }
    .weather {
        font-weight: 600;
        font-style: italic;
        color: ${pink};
    }
}
`
const WeatherCard = styled.section`
// position: absolute;
// bottom: 0;
margin: 20px 0 0;
padding: 15px;
background: #ebecf0;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
//border-radius: 5px;
max-width: 100%;

form>label {
    display: block;
    font-weight: 600;
}
.inp {
    width: 100%;
    input{
        padding: 10px;
        border: none;
        background-color: ${white};
        margin-top: 10px;
    }
    input[type='text'] {
        max-width: 100%;
        margin-right: -2px;
    }
    input[type='submit'] {
        color: ${white};
        background-color: ${darkGreen};
    }
}
`
const API_URL = 'https://api.openweathermap.org/data/2.5/weather?q=';
const API_KEY = '&appid=1f7c80d8a27983216c1e30554ff70078';
const SETTINGS = '&units=metric'

let mainInSthlm = '';

function Home() {

    const [weatherData, setWeatherData] = useState(null);
    const [userData, setUserData] = useState(null);
    const [city, setCity] = useState('Stockholm,SE');
    const messages = ["but that won't stop me from", "so i'll have fun by"];
    const [responseMessage , setResponseMessage] = useState('');
    const [openW, setOpenW] = useState(false);

    useEffect(() => {
        fetch(API_URL + 'Stockholm,SE' + API_KEY + SETTINGS)
            .then(response => response.json())
            .then(data => {
                setWeatherData(data);
              //  setUserData(data);
                // apiCallsNo++;
                // console.log(apiCallsNo);
                console.log(data);
                console.log('in effect');
            })
            .catch( err => { 
                console.log(err);
            })
    },[]);
    useEffect(() => {
        fetch(API_URL + city + API_KEY + SETTINGS)
            .then(response => response.json())
            .then(data => {
               // setWeatherData(data);
                setUserData(data);
                // apiCallsNo++;
                // console.log(apiCallsNo);
                console.log(data);
                console.log('in effect');
            })
            .catch( err => { 
                console.log(err);
            })
    }, [city])

    const setSthlmW = (main) => {
        console.log("in Sthlm", main);
        //console.log("insetSthlm:", weatherData.weather[0].main);
        let day = "new";
        let message = messages[1];
        switch(main) {
            case "Snow":
                day = 'snowy';
                message = messages[0];
                break;
            case "Clouds":
                day = 'cloudy';
                message = messages[0];
                break;
            case "Fog":
                day = 'foggy';
                message = messages[0];
                break;
            case "Rain":
                day = 'rainy';
                message = messages[0];
                break;
            case "Drizzle":
                day = 'drizzly';
                message = messages[0];
                break;
            case "Clear": {
                let time = new Date();
                if (time.getHours() > 7 && time.getHours() < 17) {
                    day = 'sunny';
                    break;
                } else {
                    day = 'clear sky';
                    break;
                }                
            }                
            case "Haze":
                day = 'hazy';
                message = messages[0];
                break;
            case "Mist":
                day = 'misty';
                message = messages[0];
                break;
        }
        
        return <span><span className="weather">{day}</span> day in Stockholm, <span className="weather">{message}</span></span>;
    }

    const getWeather = (e) => {
        e.preventDefault();
        let val = e.target.querySelector('input').value.trim();
        console.log(val);
        setCity(val);
        setResponseMessage(`${val.replace(/(^\w|\s\w)/g, m => m.toUpperCase())}`);
        console.log(responseMessage);
        setOpenW(true);
    }

    return (
        <section>
            <StyledDiv>
                <SectionTitle><span>WEL</span><span>COME<span>.</span></span></SectionTitle>
            </StyledDiv>
            <Content>
                {weatherData ? <div className="nice-text"><p>I am a <span>passionate</span> front-end web developer.</p><p><q>Today is a {setSthlmW(weatherData.weather[0].main)} gaining some new skills.</q></p> <p> Have a great day yourself!</p></div> : null}
                <WeatherCard>
                    <form onSubmit={getWeather}>
                        <label htmlFor='city'>Check the weather in your city:</label>
                        <div className="inp">
                            <input type='text' name='city' placeholder='enter a city'></input>
                            <input type='submit' value='Go'></input>
                        </div>
                    </form>
                    {userData && openW ? 
                        <div>
                            <h2>{responseMessage}</h2>
                            <p>Description: {userData.weather[0].description}</p>
                            <p>Temperature: {userData.main.temp}°C</p>
                            <p>Maximum: {userData.main.temp_max}°C</p>
                            <p>Min: {userData.main.temp_min}°C</p>
                            <p>Feels like: {userData.main.feels_like}°C</p>
                        </div> 
                        : null
                    }
                    {openW ?
                    <span onClick={() => setOpenW(!openW)} style={{display: "block" ,width: "100%", textAlign : "center", cursor : "pointer", color: pink}}>close △</span> :
                    null
                    }
                </WeatherCard>
            </Content>
        </section>
    );
}

export default Home;
