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
  return (
    <section className={style.weather__formSection}>
        <Container>
            <h1>Погода</h1>
            <p>Створіть свій особистий список улюблених міст і завжди будьте в курсі погоди.</p>
            <form onSubmit={handleClick} action="">
                <input name="city" type="text" />
                <button type="submit"><Search color="black" size={"25px"}/></button>
            </form>
        </Container>
    </section>
  )
}
