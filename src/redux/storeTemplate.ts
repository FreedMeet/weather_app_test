import {vocabulary} from "../utils/vocabulary"
import {CityType, VocabularyType} from "../types/types"

const storeTemplate = {
    apiKey: '4e7c06957bb3f3f07865de5758b17cb7',
    citiesQueue: [] as Array<string>,
    cities: [] as Array<CityType>,
    loading: true,
    isGeoPosAvailable: null as boolean | null,
    cityDefault: 'Kiev',
    cityByCoords: {} as CityType,
    errorMessage: null as string | null,
    language: vocabulary[0] as VocabularyType
}

export default storeTemplate
