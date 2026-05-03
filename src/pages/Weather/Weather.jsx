import { Header } from '../../components/Header/Header.jsx';
import { Footer } from '../../components/Footer/Footer.jsx';
import { Container } from "../../components/Container/Container.jsx";
import style from "./Weather.module.css";
import { useState, useEffect, use } from 'react';
import { getAPI } from "../../API/Weather/getAPI.jsx"
import { CloudDrizzle, Gauge, Heart, RotateCw, ThermometerSnowflake, ThermometerSun, Trash2, Wind } from 'lucide-react';
import { WeatherForm } from "./Components/WeatherForm/WeatherForm.jsx"
import { CountryName } from './Components/CountryName/CountryName.jsx';

export const Weather = () => {

    const [weather, setWeather] = useState([])
    const [favourite, setFavourite] = useState([])
    const [selectedW, setSelectedW] = useState({})
    const [visibility, setVisibility] = useState(false)
    const [input, setInput] = useState("")


useEffect(() => {
    if (localStorage.getItem("Favourites") === null) {
        localStorage.setItem("Favourites", JSON.stringify([]));
    } else {
    const stored = JSON.parse(localStorage.getItem("Favourites"));

    stored.forEach(weather => {
        getAPI(weather).then(data => {
            setFavourites(data);
        });
    });
    }
}, []);


useEffect(() => {
    console.log(weather)
}, [weather])




    useEffect(() => {
        if (!input) return;
        getAPI(input).then(data => addCard(data))
    }, [input])

    const startAPI = (value) => {
        setInput(value);
    };





const addCard = (newWeather) => {
    setWeather(prev => {
        const filtered = prev.filter(city => city.id !== newWeather.id);
        return [...filtered, newWeather];
    });
};



    const setFavourites = (newFavourite) => {
        setFavourite(prev => {
            const exists = prev.some(city => city.id === newFavourite.id);
            if (exists) return prev;
            return [...prev, newFavourite];
        });
    };




    const reloadInfo = (data) => {
        const name = city.name;
        getAPI(name).then(data => addCard(data))
    }



    const favouriteCard = (data, text) => {
    const existing = JSON.parse(localStorage.getItem("Favourites")) || [];

    if (text === "favourite") {
        const updated = existing.filter(item => item.id !== data.id);

        localStorage.setItem("Favourites", JSON.stringify(updated));

        setFavourite(prev =>
            prev.filter(item => item.id !== data.id)
        );

        return;
    }

    const exists = existing.some(item => item.id === data.id);

    if (!exists) {
        const updated = [...existing, data];
        localStorage.setItem("Favourites", JSON.stringify(updated));
    }
    }



    const deleteCard = (data, text) => {
        setWeather(prev => prev.filter(weathero => weathero.id !== data));
    }



    const seeMore = (data, text, emoji) => {
        setVisibility(true)
        setSelectedW({
            ...data,
            text: text,
            emoji: emoji
        });
    }




    if (!weather) {
        return <div>Loading</div>
    }

    console.log(weather)

    // const date = new Date();
    // const fulldate = date.toLocaleDateString("uk-UA");
    // const hours = date.getHours();
    // const minutes = date.getMinutes();
    // const weekDay = date.toLocaleDateString("uk-UA", {weekday:"long"});
    // console.log(weather)
    // let updMinutes = "";

    // if (Math.abs(minutes).toString().length === 2) {
    //     updMinutes = minutes.toString();
    // } else {
    //     updMinutes = "0" + minutes;
    // }

    // // const ctemp = Math.round(weather?.main?.temp);

    // const mainWeather = "Clear";

    // let emojicool = "🌈";

    // if (mainWeather === "Rain")
    //     emojicool = "🌧️";
    // else if (mainWeather === "Clouds")
    //     emojicool = "☁️";
    // else if (mainWeather === "Clear")
    //     emojicool = "☀️";
    // else if (mainWeather === "Snow")
    //     emojicool = "🌨️";
    // else if (mainWeather === "Drizzle")
    //     emojicool = "🌦️";
    // else if (mainWeather === "Thunderstorm")
    //     emojicool = "🌩️";
    // else if (["Mist", "Fog", "Haze"].includes(mainWeather))
    //     emojicool = "🌫️";


    // let visibility = weather.visibility;

    // let visibilityText = "";
    // let visibilityEmoji = "";

    // if (visibility >= 10000) {
    //     visibilityText = "Необмежена";
    //     visibilityEmoji = "👁️";
    // } else if (visibility < 500) {
    //     visibilityText = "Дуже обмежена";
    //     visibilityEmoji = "🙈";
    // } else if (visibility < 1000) {
    //     visibilityText = "Обмежена";
    //     visibilityEmoji = "😶‍🌫️";
    // } else if (visibility < 5000) {
    //     visibilityText = "Середня";
    //     visibilityEmoji = "🌫️";
    // } else {
    //     visibilityText = "Добра";
    //     visibilityEmoji = "👀";
    // }




    return (
        <div className='Weather'>
            <Header />
            <WeatherForm sendData={startAPI} />

            <section className={style.weather__fcardSection}>
                <Container>
                    
                    <h1>Saved cards:</h1>
                            {favourite.length === 0 ? (
                                <h2 style={{ marginTop: "20px" }}>Ви не маєте ніяких улюблених карток</h2>
                            ) : (
                        <ul className={style.weather__cards}>
                        {favourite.map(city => {
                            const date = new Date();
                            const fulldate = date.toLocaleDateString("uk-UA");
                            const hours = date.getHours();
                            const minutes = date.getMinutes();
                            const weekDay = date.toLocaleDateString("uk-UA", { weekday: "long" });
                            console.log(weather)
                            let updMinutes = "";

                            if (Math.abs(minutes).toString().length === 2) {
                                updMinutes = minutes.toString();
                            } else {
                                updMinutes = "0" + minutes;
                            }


                            const mainWeather = "Clear";

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


                            let visibility = city.visibility;

                            let visibilityText = "";
                            let visibilityEmoji = "";

                            if (visibility >= 10000) {
                                visibilityText = "Необмежена";
                                visibilityEmoji = "👁️";
                            } else if (visibility < 500) {
                                visibilityText = "Дуже обмежена";
                                visibilityEmoji = "🙈";
                            } else if (visibility < 1000) {
                                visibilityText = "Обмежена";
                                visibilityEmoji = "😶‍🌫️";
                            } else if (visibility < 5000) {
                                visibilityText = "Середня";
                                visibilityEmoji = "🌫️";
                            } else {
                                visibilityText = "Добра";
                                visibilityEmoji = "👀";
                            }


                            const ctemp = Math.round(city?.main?.temp);

                            return <li className={style.weather__card}>
                                <div className={style.card__flexGap}>
                                    <h3 className={style.weather__city}>{city.name}</h3>
                                    <CountryName countrycode={city?.sys?.country}></CountryName>
                                </div>
                                <p className={style.weather__time}>{hours}:{updMinutes}</p>

                                <p className={style.weather__additional}><span className={style.weather__date}>{fulldate}</span> | <span className={style.weather__weekday}>{weekDay}</span></p>

                                <p className={style.weather__emoji}>{emojicool}</p>
                                <p className={style.weather__temparature}>{ctemp}°C</p>

                                <ul className={style.weather__options}>
                                    <li className={style.weather__option}><button onClick={() => reloadInfo(city)} className={style.weather__imgbutton} type='button'><RotateCw size={"30px"} /></button></li>
                                    <li className={style.weather__option}><button onClick={() => favouriteCard(city.name, "favourite")} className={style.weather__imgbutton} type='button'><Heart color='red' size={"30px"} /></button></li>
                                    <li className={style.weather__option}><button onClick={() => seeMore(city, visibilityText, visibilityEmoji)} className={style.weather__buttonf} type='button'>Більше</button></li>
                                    {/* <li className={style.weather__option}><button onClick={() => deleteCard(city.id, "favourite")} className={style.weather__imgbutton} type='button'><Trash2 size={"30px"} /></button></li> */}
                                </ul>
                            </li>
                        })}
                    </ul>
                            )}

                </Container>
            </section>


            <section className={style.weather__cardSection}>
                <Container>

                    <h1>New cards:</h1>
                    <ul className={style.weather__cards}>
                        {weather.map(city => {
                            const date = new Date();
                            const fulldate = date.toLocaleDateString("uk-UA");
                            const hours = date.getHours();
                            const minutes = date.getMinutes();
                            const weekDay = date.toLocaleDateString("uk-UA", { weekday: "long" });
                            console.log(weather)
                            let updMinutes = "";

                            if (Math.abs(minutes).toString().length === 2) {
                                updMinutes = minutes.toString();
                            } else {
                                updMinutes = "0" + minutes;
                            }


                            const mainWeather = "Clear";

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


                            let visibility = city.visibility;

                            let visibilityText = "";
                            let visibilityEmoji = "";

                            if (visibility >= 10000) {
                                visibilityText = "Необмежена";
                                visibilityEmoji = "👁️";
                            } else if (visibility < 500) {
                                visibilityText = "Дуже обмежена";
                                visibilityEmoji = "🙈";
                            } else if (visibility < 1000) {
                                visibilityText = "Обмежена";
                                visibilityEmoji = "😶‍🌫️";
                            } else if (visibility < 5000) {
                                visibilityText = "Середня";
                                visibilityEmoji = "🌫️";
                            } else {
                                visibilityText = "Добра";
                                visibilityEmoji = "👀";
                            }


                            const ctemp = Math.round(city?.main?.temp);

                            return <li className={style.weather__card}>
                                <div className={style.card__flexGap}>
                                    <h3 className={style.weather__city}>{city.name}</h3>
                                    <CountryName countrycode={city?.sys?.country}></CountryName>
                                </div>
                                <p className={style.weather__time}>{hours}:{updMinutes}</p>

                                <p className={style.weather__additional}><span className={style.weather__date}>{fulldate}</span> | <span className={style.weather__weekday}>{weekDay}</span></p>

                                <p className={style.weather__emoji}>{emojicool}</p>
                                <p className={style.weather__temparature}>{ctemp}°C</p>

                                <ul className={style.weather__options}>
                                    <li className={style.weather__option}><button onClick={() => reloadInfo(city)} className={style.weather__imgbutton} type='button'><RotateCw size={"30px"} /></button></li>
                                    <li className={style.weather__option}><button onClick={() => favouriteCard(city.name)} className={style.weather__imgbutton} type='button'><Heart color='red' size={"30px"} /></button></li>
                                    <li className={style.weather__option}><button onClick={() => seeMore(city, visibilityText, visibilityEmoji)} className={style.weather__button} type='button'>Більше</button></li>
                                    <li className={style.weather__option}><button onClick={() => deleteCard(city.id)} className={style.weather__imgbutton} type='button'><Trash2 size={"30px"} /></button></li>
                                </ul>
                            </li>
                        })}
                        {/* <li className={style.weather__card}>
                            <div className={style.card__flexGap}>
                                <h3 className={style.weather__city}>{weather.name}</h3>
                                <CountryName countrycode={weather?.sys?.country}></CountryName>
                            </div>
                            <p className={style.weather__time}>{hours}:{updMinutes}</p>

                            <p className={style.weather__additional}><span className={style.weather__date}>{fulldate}</span> | <span className={style.weather__weekday}>{weekDay}</span></p>

                            <p className={style.weather__emoji}>{emojicool}</p>
                            <p className={style.weather__temparature}>{ctemp}°C</p>

                            <ul className={style.weather__options}>
                                <li className={style.weather__option}><button className={style.weather__imgbutton} type='button'><RotateCw size={"30px"}/></button></li>
                                <li className={style.weather__option}><button className={style.weather__imgbutton} type='button'><Heart color='red' size={"30px"}/></button></li>
                                <li className={style.weather__option}><button className={style.weather__button} type='button'>Більше</button></li>
                                <li className={style.weather__option}><button className={style.weather__imgbutton} type='button'><Trash2 size={"30px"}/></button></li>
                            </ul>
                        </li> */}
                    </ul>

                </Container>
            </section>

            <section className={style.weather__additionalSection}>
                <Container>
                    <ul className={style.cards__infos}>
                        {visibility === false ? (
                            <li><h1 className={style.cards__bigHeadline}>Створіть та натисніть "Більше" на погодній карточці</h1></li>
                        ) : (
                        <>
                        <li className={style.cards__info}>
                            <h3 className={style.cards__infoHeadline}>Відчувається як</h3>
                            <p className={style.cards__infoAnswear}>{Math.floor(selectedW?.main?.feels_like * 10) / 10}°C</p>
                            {selectedW?.main?.feels_like > 15 ? (
                                <ThermometerSun color='white' size={"85px"}/>
                            ) : (
                                <ThermometerSnowflake  color='white' size={"85px"}/>
                            )}
                        </li>
                        <li className={style.cards__info}>
                            <h3 className={style.cards__infoHeadline}>Мін °C</h3>
                            <p className={style.cards__infoAnswear}>{Math.floor(selectedW?.main?.temp_min * 10) / 10}</p>
                            <h3 className={style.cards__infoHeadline}>Макс °C</h3>
                            <p className={style.cards__infoAnswear}>{Math.floor(selectedW?.main?.temp_max * 10) / 10}</p>
                        </li>
                        <li className={style.cards__info}>
                            <h3 className={style.cards__infoHeadline}>Вологість</h3>
                            <p className={style.cards__infoAnswear}>{selectedW?.main?.humidity}%</p>
                            <CloudDrizzle color='white' size={"85px"}/>
                        </li>
                        <li className={style.cards__info}>
                            <h3 className={style.cards__infoHeadline}>Тиск</h3>
                            <p className={style.cards__infoAnswear}>{selectedW?.main?.pressure} Па</p>
                            <Gauge color='white' size={"85px"}/>
                        </li>
                        <li className={style.cards__info}>
                            <h3 className={style.cards__infoHeadline}>Швидкість вітру</h3>
                            <p className={style.cards__infoAnswear}>{selectedW?.wind?.speed} м/с</p>
                            <Wind  color='white' size={"85px"}/>
                        </li>
                        <li className={style.cards__info}>
                            <h3 className={style.cards__infoHeadline}>Видимість</h3>
                            <p className={style.cards__infoAnswearSpecial}>{selectedW.text}</p>
                            <p className={style.cards__infoEmoji}>{selectedW.emoji}</p>
                        </li>
                        </>
                        )}

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