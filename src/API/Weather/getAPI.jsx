import axios from "axios"

export const getAPI = async (country) => {
    try {
        const apiKey = import.meta.env.VITE_weatherkey
        
        const data = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${country}&units=metric&appid=${apiKey}`)
        return data.data
    } catch(error) {
        return error
    }
}
