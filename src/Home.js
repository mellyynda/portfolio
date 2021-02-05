import { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import StyleContext from './StyleContext';
import {ReactComponent as ReactLogo} from './img/logo.svg';
import logo from './img/logo192.png';
// import Clear from './img/Clear.png';
// import Clouds from './img/Clouds.png';
// import MistFog from './img/Mist-Fog.png';
// import Rain from './img/Rain.png';
// import Snow from './img/Snow.png';
// import Haze from './img/Haze.png';
import line from './img/line.png';
import { SectionTitle } from './StyledComp';

const API_URL = 'https://api.openweathermap.org/data/2.5/weather?q=';
const API_KEY = '&appid=1f7c80d8a27983216c1e30554ff70078';
const SETTINGS = '&units=metric'

 let apiCallsNo = 0;

function Home() {

    const { white, yellow, pink, darkGreen, black } = useContext(StyleContext);

    const StyledDiv = styled.div`
    background: linear-gradient(to right, ${darkGreen} 0%, ${darkGreen} 50%, ${white} 50%, ${white} 100%);
    height:100vh;
    width:100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: 'Helvetica Neue', sans-serif;
    letter-spacing: -1px;
    img {
        width: 85px;
        margin-top: 20px;
    }
    svg {
        width: 25px;
        align-self:center;
        fill:${black};
    }
    `
    const Content = styled.section`
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
   
    img {
        width: 10%;
        padding: 50px 0;
    }
    h2 { 
        font-family: 'Open Sans', sans-serif; 
        font-size: 30px; 
        font-weight: 300; 
        line-height: 32px; 
        padding: 15px;
    }
    p { 
        font-family: 'Open Sans', sans-serif; 
        font-size: 1.1rem; 
        line-height: 24px; 
        padding: 0 0 0 15px; 
        text-align: justify; 
        text-justify: inter-word; 
    }
    p:first-child {
        font-family: 'Iowan Old Style', sans-serif;
        padding: 100px 20px 30px;
        font-weight: bold;
        background: url(${line}) no-repeat center center ; 
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
    }
    section {
        margin:0 20px 20px;
        padding: 15px;
        max-width: 320px;
        background: rgb(211,12,123);
        background: linear-gradient(239deg, rgba(211,12,123,1) 63%, rgba(227,181,5,1) 100%);
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
    }
    `

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
                <img src={logo}></img>
                <ReactLogo />
                <ReactLogo />
                <ReactLogo />
                <SectionTitle><span>WEL</span><span>COME<span>.</span></span></SectionTitle>
            </StyledDiv>
            <Content>
                {weatherData ? <><p>I am a passionate aspiring front-end web developer based in Stockholm and today is a {setSthlmW(weatherData.weather[0].main)} gaining new skills and hopefully creating something that matters. Hope you are having a great day yourself!</p></> : null}
                <section>
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
                </section>
            </Content>
        </section>
    );
}

export default Home;
