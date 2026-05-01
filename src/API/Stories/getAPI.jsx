export const getAPI = async () => {
    try {
        const apiKey = import.meta.env.VITE_mockapikey
        
        const data = await axios.get(`https://${apiKey}.mockapi.io/articles`)
        return data

    } catch(error) {
        return error
    }
}