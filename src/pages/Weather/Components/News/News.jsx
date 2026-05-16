import React, { use } from 'react'
import { getAPI } from "../../../../API/News/getAPI"
import style from "./News.module.css";
import { useState, useEffect, useRef } from 'react';
// import {ourName} from '../../../../API/News/getAPI'
import { Container } from "../../../../components/Container/Container.jsx";

export const News = ({ city }) => {

    const [news, setNews] = useState([])
    const [page, setPage] = useState(1)
    const firstRender = useRef(true);

    useEffect(() => {
        
        if (firstRender.current) {
            firstRender.current = false;
            return
        } 
        if (!city) {
            return
        } else {
            getAPI(city?.name, page).then(data => {
                setNews(prev => [...prev, ...data])
                console.log(data)
            })
        }

    }, [city, page])
    
    useEffect(() => {
        setNews([])
    }, [city])

    return (
        <div className={style.news}>
            <Container>
            <h1 className={style.news__headline}></h1>

            <ul className={style.news__list}>

                {news?.map(item => {
                    return <li className={style.news__item}>
                        <img className={style.news__image} src={item.urlToImage} alt="" />
                        <h3 style={{
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                        }} className={style.news__title}>{item.title}</h3>
                    </li>
                })}

            </ul>

            <button onClick={() => setPage(prev => prev + 1)} className={style.news__more}>Більше</button>
        </Container>
        </div>
    )
}

// setNews(prev => [...prev, ...data])

// const uniqueNews = data.filter(newItem => !oldNews.some(oldItem => oldItem.name === newItem.name));