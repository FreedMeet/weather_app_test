import {CityType, VocabularyType} from "../types/types"

const getLocalState = () => {
    const state = JSON.parse(localStorage.getItem('state') as string)
    if (Object.keys(state).length === 0)
        return null;
    const citiesQueue = state.cities.map((city: CityType) => city.city) as Array<string>
    const language = state.language as VocabularyType
    return {citiesQueue, language}
};

export default getLocalState
