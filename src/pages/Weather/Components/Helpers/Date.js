

export const getDate = () => {
    const date = new Date();
    const fulldate = date.toLocaleDateString("uk-UA");
    return `${fulldate}`
}

export const getHM = (date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    let updMinutes = "";

    if (Math.abs(minutes).toString().length === 2) {
        updMinutes = minutes.toString();
    } else {
        updMinutes = "0" + minutes;
    }
    console.log(date, hours, updMinutes, minutes)
    return `${hours}:${updMinutes}`
}

export const getWeek = () => {
    const date = new Date();
    const weekDay = date.toLocaleDateString("uk-UA", { weekday: "long" });
    return `${weekDay}`
}
