import React from 'react'
import style from "./More.module.css";
import { Container } from "../../../../components/Container/Container.jsx";
import { CloudDrizzle, Gauge, Heart, RotateCw, ThermometerSnowflake, ThermometerSun, Trash2, Wind } from 'lucide-react';
import { DailyForecast } from "../DailyForecast/DailyForecast.jsx";

export const More = ({visibility, selectedW}) => {

    
  return (
    <div className='More'>
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

            <DailyForecast selectedW={selectedW}/>
            </div>
  )
}
