import axios from 'axios'
import {ResponseType} from "../types/types";

const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?'

export const getWeatherByCoord = (lat: number, lon: number, APIkey: string, lang: string) =>
    axios.get<ResponseType>(apiUrl, {
        params: {
            appid: APIkey,
            lat: lat,
            lon: lon,
            units: 'metric',
            lang: lang
        }
    })

export const getWeatherByCityName = (cityName: string, APIkey: string, lang: string) =>
    axios.get<ResponseType>(apiUrl, {
        params: {
            q: cityName,
            appid: APIkey,
            units: 'metric',
            lang: lang
        }
    })
