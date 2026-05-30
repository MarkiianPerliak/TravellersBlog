import React from 'react'
import { getAPIN } from "../../../../API/Weather/getAPIN.jsx"
import { useState, useEffect, use } from 'react';
import style from "./DailyForecast.module.css";
import { Container } from "../../../../components/Container/Container.jsx";
import { Line } from 'react-chartjs-2';

export const DailyForecast = (selectedW) => {
    const [hourly, setHourly] = useState([])
    useEffect(() => {
        getAPIN(selectedW.name)
    }, [])

  return (
    <section>
        <Container>
            <Line
                // datasetIdKey=""
                data={{
                    labels: ['Jun', 'Jul', 'Aug', 'Jun', 'Jul', 'Aug', 'Jul', 'Aug'],
                    datasets: [
                    {
                        id: 1,
                        label: '',
                        data: [5, 6, 7],
                    },
                    {
                        id: 2,
                        label: '',
                        data: [3, 2, 1],
                    },
                    ],
                }}
                />
        </Container>
    </section>
  )
}
