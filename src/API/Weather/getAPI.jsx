import axios from "axios"
import { getDate, getHM, getWeek } from '../../pages/Weather/Components/Helpers/Date.js';

export const getAPI = async (country) => {
    try {
        const apiKey = import.meta.env.VITE_weatherkey
        
        const data = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${country}&units=metric&appid=${apiKey}`)
        
        const weatherDate = {...data.data, currentDate: getHM(new Date())};
        return weatherDate
    } catch(error) {
        return error
    }
}
