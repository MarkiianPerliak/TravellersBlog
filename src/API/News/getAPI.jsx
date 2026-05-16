import axios from "axios"


export const getAPI = async (city = "Ukraine", page = "1") => {
    // export const ourName = city
    try {
        const apiKey = import.meta.env.VITE_newskey
        const data = await axios.get(`https://newsapi.org/v2/everything?q=${city}&sortBy=publishedAt&apiKey=${apiKey}&page=${page}&pageSize=4`)
        return data.data.articles

    } catch(error) {
        return error
    }
}