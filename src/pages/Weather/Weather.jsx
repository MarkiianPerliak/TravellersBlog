import { Header } from '../../components/Header/Header.jsx';
import { Footer } from '../../components/Footer/Footer.jsx';
import { Container } from "../../components/Container/Container.jsx";
import style from "./Weather.module.css";
import { useState, useEffect } from 'react';
import { getAPI } from "../../API/Weather/getAPI.jsx"
import deleteSvg from './svg/delete.svg';
import refreshSvg from './svg/refresh.svg';
import heartSvg from './svg/heart.svg';

export const Weather = () => {

    const [weather, setWeather] = useState({})

    useEffect(() => {
        getAPI().then(data => setWeather(data))
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
    let updMinutes = "";

if (Math.abs(minutes).toString().length === 2) {
  updMinutes = minutes.toString();
} else {
  updMinutes = "0" + minutes;
}

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


    let visibility = weather.visibility;

    let visibilityText = "";
    let visibilityEmoji = "";

    if (visibility >= 10000) {
        visibilityText = "Unlimited";
        visibilityEmoji = "👁️";
    } else if (visibility < 500) {
        visibilityText = "Very Limited";
        visibilityEmoji = "🙈";
    } else if (visibility < 1000) {
        visibilityText = "Limited";
        visibilityEmoji = "😶‍🌫️";
    } else if (visibility < 5000) {
        visibilityText = "Average";
        visibilityEmoji = "🌫️";
    } else {
        visibilityText = "Good";
        visibilityEmoji = "👀";
    }




    return (
        <div className='Weather'>
            <Header />
            <section className={style.weather__cardSection}>
                <Container>
                    <ul className={style.weather__cards}>
                        <li className={style.weather__card}>
                            <div className={style.card__flexGap}>
                                <h3 className={style.weather__city}>{weather.name}</h3>
                                <h3 className={style.weather__country}>Ukraine</h3> {/* {weather?.sys?.country} */}
                            </div>
                            <p className={style.weather__time}>{hours}:{updMinutes}</p>

                            <p className={style.weather__additional}><span className={style.weather__date}>{fulldate}</span> | <span className={style.weather__weekday}>{weather.name}</span></p>

                            <p className={style.weather__emoji}>{emojicool}</p>
                            <p className={style.weather__temparature}>{ctemp}°C</p>

                            <ul className={style.weather__options}>
                                <li className={style.weather__option}><button className={style.weather__imgbutton} type='button'><img className={style.weather__btnsvg} src={refreshSvg} alt="refresh" /></button></li>
                                <li className={style.weather__option}><button className={style.weather__imgbutton} type='button'><img className={style.weather__btnsvg} src={heartSvg} alt="refresh" /></button></li>
                                <li className={style.weather__option}><button className={style.weather__button} type='button'>Більше</button></li>
                                <li className={style.weather__option}><button className={style.weather__imgbutton} type='button'><img className={style.weather__btnsvg} src={deleteSvg} alt="refresh" /></button></li>
                            </ul>
                        </li>
                    </ul>

                </Container>
            </section>


            <section className={style.weather__additionalSection}>
                <Container>
                    {weather === {} ? <p className={style.cards__nothing}>Введіть місто в пошук</p> : null}


                    <ul className={style.cards__infos}>
                        <li className={style.cards__info}>
                            <h3 className={style.cards__infoHeadline}>Відчувається як</h3>
                            <p className={style.cards__infoAnswear}>{Math.floor(weather?.main?.feels_like * 10) / 10}°C</p>
                        </li>
                        <li className={style.cards__info}>
                            <h3 className={style.cards__infoHeadline}>Мін {Math.floor(weather?.main?.temp_min * 10) / 10}°C</h3>
                            <p className={style.cards__infoAnswear}></p>
                            <h3 className={style.cards__infoHeadline}>Макс {Math.floor(weather?.main?.temp_max * 10) / 10}°C</h3>
                            <p className={style.cards__infoAnswear}></p>
                        </li>
                        <li className={style.cards__info}>
                            <h3 className={style.cards__infoHeadline}>Вологість</h3>
                            <p className={style.cards__infoAnswear}>{weather?.main?.humidity}%</p>
                        </li>
                        <li className={style.cards__info}>
                            <h3 className={style.cards__infoHeadline}>Тиск</h3>
                            <p className={style.cards__infoAnswear}>{weather?.main?.pressure} Па</p>
                        </li>
                        <li className={style.cards__info}>
                            <h3 className={style.cards__infoHeadline}>Швидкість вітру</h3>
                            <p className={style.cards__infoAnswear}>{weather?.wind?.speed} м/с</p>
                        </li>
                        <li className={style.cards__info}>
                            <h3 className={style.cards__infoHeadline}>Видимість</h3>
                            <p className={style.cards__infoAnswear}>{visibilityText}</p>
                            <p className={style.cards__infoEmoji}>{visibilityEmoji}</p>
                        </li>
                    </ul>
                </Container>
            </section>

            <Footer />
        </div>
    )
}

// className={style.travellers__sectionList}        className={style.weather__info-list}

<section className={style.weather__cards}>
    <Container>

    </Container>
</section>