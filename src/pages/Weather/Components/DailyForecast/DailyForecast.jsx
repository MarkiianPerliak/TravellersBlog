import React from 'react'
import { getAPIN } from "../../../../API/Weather/getAPIN.jsx"
import { useState, useEffect, use } from 'react';
import style from "./DailyForecast.module.css";
import { Container } from "../../../../components/Container/Container.jsx";
import { Line } from 'react-chartjs-2';

export const DailyForecast = ({selectedW}) => {
    const [daily, setDaily] = useState([])
    useEffect(() => {
        getAPIN(selectedW.name).then(data => setDaily(data))
    }, [])

    useEffect(() => {
        console.log(daily.list)
    }, [daily])

  return (
    <section>
        <Container>
            {/* <Line
                datasetIdKey=""
                data={{
                    labels: ['3:00', '6:00', '9:00', '12:00', '15:00', '18:00', '21:00', '0:00'],
                    datasets: [daily.list]
                }}
                /> */}
        </Container>
    </section>
  )
}
