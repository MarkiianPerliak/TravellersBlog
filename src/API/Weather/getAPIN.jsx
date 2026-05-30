import axios from "axios"
import { getDate, getHM, getWeek } from '../../pages/Weather/Components/Helpers/Date.js';

export const getAPIN = async (city) => {
    try {
        const apiKey = import.meta.env.VITE_weatherkey
        
        const data = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`)
        const weatherDate = data.data
        return weatherDate
    } catch(error) {
        return error
    }
}
// {...data.data, currentDate: getHM(new Date())};