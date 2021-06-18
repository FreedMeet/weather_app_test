export type CityType = {
    city: string
    temp: number
    icon: string
    description: string
    feels_like: number
    pressure: number
    humidity: number
    country: string
    date: string
    wind: number
    error?: string
}

export type VocabularyType = {
    City_Name: string
    Add: string
    Wind: string
    Humidity: string
    Pressure: string
    feels_like: string
    reduction: string
}

export type ResponseType = {
    coord: {
        lon: number
        lat: number
    }
    weather: [
        {
            id: number
            main: string
            description: string
            icon: string
        }
    ]
    base: string
    main: {
        temp: number
        feels_like: number
        temp_min: number
        temp_max: number
        pressure: number
        humidity: number
    }
    visibility: number
    wind: {
        speed: number
        deg: number
    }
    rain: {
        '1h': number
    }
    clouds: {
        all: number
    }
    dt: number
    sys: {
        type: number
        id: number
        country: string
        sunrise: number
        sunset: number
    }
    timezone: number
    id: number
    name: string
    cod: number
}
