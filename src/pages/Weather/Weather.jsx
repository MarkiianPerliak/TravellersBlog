import { Header } from '../../components/Header/Header.jsx';
import { Footer } from '../../components/Footer/Footer.jsx';
import { Container } from "../../components/Container/Container.jsx";
import style from "./Weather.module.css";
import { useState, useEffect } from 'react';
import { getAPI } from "../../API/Weather/getAPI.jsx"

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
            <Header />

            <section className={style.weather__cards}>
                <Container>
                    <ul className={style.weather__cards}>
                        <li className={style.weather__card}>
                            <h3 className={style.weather__city}>{weather.name}</h3>
                            <h3 className={style.weather__country}>{weather?.sys?.country}</h3>

                            <p className={style.weather__time}>{hours}:{minutes}</p>

                            <p className={style.weather__additional}><span className={style.weather__date}>{fulldate}</span> | <span className={style.weather__weekday}>{weather.name}</span></p>

                            <p className={style.weather__emoji}>{emojicool}</p>
                            <p className={style.weather__temparature}>{ctemp}°C</p>

                            <ul className={style.weather__options}>
                                <li className={style.weather__option}><button className={style.weather__imgbutton} type='button'></button></li>
                                <li className={style.weather__option}><button className={style.weather__imgbutton} type='button'></button></li>
                                <li className={style.weather__option}><button className={style.weather__button} type='button'>Показати більше</button></li>
                                <li className={style.weather__option}><button className={style.weather__imgbutton} type='button'></button></li>
                            </ul>
                        </li>
                    </ul>

                </Container>
            </section>


            <section className={style.weather__cards}>
                <Container>
                    {weather === {} ? <p className={style.cards__nothing}>Введіть місто в пошук</p> : null}


                    <ul className={style.cards__infos}>
                        <li className={style.cards__info}>
                            <h3 className={style.cards__infoHeadline}>Відчувається як</h3>
                            <p className={style.cards__infoAnswear}></p>
                        </li>
                        <li className={style.cards__info}>
                            <h3 className={style.cards__infoHeadline}>Мін °C</h3>
                            <p className={style.cards__infoAnswear}></p>
                            <h3 className={style.cards__infoHeadline}>Макс °C</h3>
                            <p className={style.cards__infoAnswear}></p>
                        </li>
                        <li className={style.cards__info}>
                            <h3 className={style.cards__infoHeadline}>Вологість</h3>
                            <p className={style.cards__infoAnswear}></p>
                        </li>
                        <li className={style.cards__info}>
                            <h3 className={style.cards__infoHeadline}>Тиск</h3>
                            <p className={style.cards__infoAnswear}></p>
                        </li>
                        <li className={style.cards__info}>
                            <h3 className={style.cards__infoHeadline}>Швидкість вітру</h3>
                            <p className={style.cards__infoAnswear}></p>
                        </li>
                        <li className={style.cards__info}>
                            <h3 className={style.cards__infoHeadline}>Видимість</h3>
                            <p className={style.cards__infoAnswear}></p>
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