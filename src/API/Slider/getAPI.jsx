import axios from "axios"

export const getAPI = async () => {
    try {
        const apiKey = import.meta.env.VITE_imgkey
        const params = new URLSearchParams({
            key: apiKey,
            q: "nature",
            category: "nature",
            per_page: "5"
        });
        
        const data = await axios.get(`https://pixabay.com/api/?${params}`)
        return data.data.hits

    } catch(error) {
        return error
    }
}