import {CityType, VocabularyType} from "../types/types"

export const saveToStorage = (cities: Array<CityType>, language: VocabularyType) => {
    const citiesList = cities.map((city) => ({city: city.city}))
    localStorage.setItem('state', JSON.stringify({cities: citiesList, language}))
}
