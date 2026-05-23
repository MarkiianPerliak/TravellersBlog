

export const getEmoji = (emoji) => {
    let mainWeather = emoji.weather[0].main;
    console.log(mainWeather)
    let emojicool = "🌈";

    if (mainWeather === "Rain")
        emojicool = "🌧️";
    else if (mainWeather === "Clouds")
        emojicool = "☁️";
    else if (mainWeather === "Clear")
        emojicool = "☀️";
    else if (mainWeather === "Snow")
        emojicool = "🌨️";
    else if (mainWeather === "Drizzle")
        emojicool = "🌦️";
    else if (mainWeather === "Thunderstorm")
        emojicool = "🌩️";
    else if (["Mist", "Fog", "Haze"].includes(mainWeather))
        emojicool = "🌫️";

    return emojicool
}

