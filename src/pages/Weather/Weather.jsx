import { Header } from '../../components/Header/Header.jsx';
import { Footer } from '../../components/Footer/Footer.jsx';
import { Container } from "../../components/Container/Container.jsx";
import style from "./Weather.module.css";
import { useState, useEffect } from 'react';
import {getAPI} from "../../API/Weather/getAPI.jsx"

export const Weather = () => {

    const [weather, setWeather] = useState({})
    
    useEffect(() => {
            console.log(getAPI().then(data => setWeather(data)))
    }, [])


    if (!weather) {
        return <div>Loading</div>
    }

    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDay();
    const fulldate = new Date(`${day}.${month}.${year}`).toDateString()
    const weekDay = date.getDay();
    console.log(weather)

    const ctemp = Math.round(weather?.main?.temp);

    const mainWeather = "Snow";

    let emojicool = "🌈";

    if (mainWeather === "Rain") 
        emojicool = "🌧️";
    else if (mainWeather === "Clouds") 
        emojicool = "☁️";
    else if (mainWeather === "Clear") 
        emojicool = "☀️";
    else if (mainWeather === "Snow") 
        emojicool = "🌨️";
    else if (mainWeather === "Drizzle") 
        emojicool = "🌦️";
    else if (mainWeather === "Thunderstorm") 
        emojicool = "🌩️";
    else if (["Mist", "Fog", "Haze"].includes(mainWeather)) 
        emojicool = "🌫️";


  return (
    <div className='Weather'>
        <li>
            <h3>{weather.name}</h3>
            <h3>{weather?.sys?.country}</h3>

            <p>{hours}:{minutes}</p>

            <p><span>{fulldate}</span> | <span>{weather.name}</span></p>

            <p>{emojicool}</p>
            <p>{ctemp}°C</p>

            <ul>
                <li><button type='button'></button></li>
                <li><button type='button'></button></li>
                <li><button type='button'>See more</button></li>
                <li><button type='button'></button></li>
            </ul>
        </li>
    </div>
  )
}