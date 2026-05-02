import style from "./WeatherForm.module.css";
import React from 'react'
import { Container } from "../../../../components/Container/Container.jsx";
import { Search } from "lucide-react";



export const WeatherForm = ({sendData}) => {

const handleClick = (e) => {
    e.preventDefault()
    const city = e.target.city.value
    sendData(city);
  };

const d = new Date(),
o = n => (n%10===1 && n%100!==11 ? '-ше'
      : [2,3,4].includes(n%10) && ![12,13,14].includes(n%100) ? '-ге'
      : '-те');

  return (
    <section className={style.weather__formS}>
        <Container>
            <h1 className={style.weather__headline}>Погода</h1>
            <ul className={style.weather__list}>
                <li className={style.weather__item}><p className={style.weather__info}>Створіть свій особистий список улюблених міст і завжди будьте в курсі погоди.</p></li>
                <li className={style.weather__item}><div className={style.weather__line}></div></li>
                <li className={style.weather__item}><p className={style.weather__date}>{`${d.toLocaleString('uk-UA',{month:'long',year:'numeric'})}
${d.toLocaleString('uk-UA',{weekday:'long'})}, ${d.getDate()}${o(d.getDate())}`}</p></li>
            </ul>
            
            <form className={style.weather__form} onSubmit={handleClick} action="">
                <input className={style.weather__location} placeholder="Пошук лакації" name="city" type="text" />
                <button className={style.weather__submit} type="submit"><Search color="black" size={"25px"}/></button>
            </form>
        </Container>
    </section>
  )
}
