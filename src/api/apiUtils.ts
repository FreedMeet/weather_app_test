import {CityType, ResponseType} from "../types/types"

export const dataDestructuring = (weather: ResponseType): CityType => {
    let {
        name,
        main: {temp, feels_like, humidity, pressure},
        weather: {0: {description, icon}},
        wind: {speed},
        sys: {country},
        dt
    } = weather

    temp = Number(temp.toFixed(0))
    feels_like = Number(feels_like.toFixed(0))

    let date = new Date(dt * 1000);
    let updateTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`

    return {
        city: name,
        temp,
        icon,
        description,
        feels_like,
        pressure,
        humidity,
        country: country,
        date: updateTime,
        wind: speed
    }
}

