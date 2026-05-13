import axios from "axios"

export const getAPI = async (city = "Ukraine", page = "1") => {
    try {
        const apiKey = import.meta.env.VITE_newskey
        const data = await axios.get(`https://newsapi.org/v2/everything?q=${city}&from=2026-04-13&sortBy=publishedAt&apiKey=${apiKey}&page=${page}&pageSize=4`)
        return data.data.articles

    } catch(error) {
        return error
    }
}