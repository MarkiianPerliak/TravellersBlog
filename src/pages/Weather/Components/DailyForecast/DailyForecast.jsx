import React from 'react'
import { getAPIN } from "../../../../API/Weather/getAPIN.jsx"
import { useState, useEffect, use } from 'react';
import style from "./DailyForecast.module.css";
import { Container } from "../../../../components/Container/Container.jsx";
import { Line } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
            display: false
        },
        title: {
            display: false,
            text: 'Погода на день',
        },
    },
    scales: { x: { position: 'top', }, },
};

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    scales,
} from 'chart.js';

export const DailyForecast = ({ selectedW }) => {
    const [daily, setDaily] = useState([])
    const [rdyarray, setRdyarray] = useState([])
    useEffect(() => {
        getAPIN(selectedW.name).then(data => setDaily(data.list.slice(0, 8)))
    }, [])
    useEffect(() => {
        console.log(daily.map(temp => { return temp.main.temp }))
        console.log(daily.map(temp => {
                            return {
                                label: Math.round(temp.main.temp),
                                data: temp.dt_txt.split(` `)[1],
                                borderColor: 'rgb(255, 187, 0)',
                                backgroundColor: 'rgb(255, 187, 0)',
                            }
                    }))
    }, [daily])


    return (
        <section className={style.dailyForecast}>
            <Container>
                <Line
                    options={options}
                    datasetIdKey="id"
                    data={{
                        labels: daily.map(obj => {
                            return`${obj.dt_txt.split(` `)[1].split(':')[0]}:00`
                        }),
                        datasets: [{
                            label: "Температура",
                            data: daily.map(obj => {return Math.round(obj.main.temp)}),
                            borderColor: 'rgb(255, 187, 0)',
                            backgroundColor: 'rgb(255, 187, 0)',
                        }]
                    }}
                />
            </Container>
        </section>
    )
}
// temp.dt_txt.split(` `)[1]

// daily.map(temp => {
//                             return {
//                                 label: Math.round(temp.main.temp),
//                                 data: temp.dt_txt.split(` `)[1],
//                                 borderColor: 'rgb(255, 0, 55)',
//                                 backgroundColor: 'rgba(255, 99, 132, 0.5)',
//                             }
//                     })