import React from 'react'
import { getAPI } from "../../../../API/News/getAPI"
import style from "./News.module.css";
import { useState, useEffect, use } from 'react';

export const News = ({city}) => {

    const [news, setNews] = useState([])
    const [page, setPage] = useState(1)

        useEffect(() => {
            console.log(city)
            if (!city) {
                return
            } else {
                getAPI(city?.name, page).then(data =>  setNews(prev => [...prev, ...data]))
            }
            
        }, [city, page])
  return (
    <div className='News'>
        <h1 className={style.news__headline}></h1>

        <ul className={style.news__list}>

            {news?.map(item => {
                return             <li className={style.news__item}>
                <img className={style.news__image} src={item.urlToImage} alt="" />
                <h3 className={style.news__title}>{item.title}</h3>
            </li>
            })}

        </ul>

        <button onClick={() => setPage(prev => prev + 1)} className={style.news__more}>Більше</button>
    </div>
  )
}