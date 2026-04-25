import axios from "axios"

export const getAPI = async () => {
    try {
        const apiKey = import.meta.env.VITE_weatherkey
        
        const data = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${"kharkiv"}&units=metric&appid=${apiKey}`)
        return data.data
    } catch(error) {
        return error
    }
}
