import {InferValueTypes} from "./store"
import {CityType, VocabularyType} from "../types/types"
import getLocalState from "./getLocalState"
import storeTemplate from "./storeTemplate"

export type InitialStateType = typeof initialState
type ActionsType = InferValueTypes<typeof actions>

const localState = getLocalState()
export const initialState = localState ? {...storeTemplate, ...localState} : storeTemplate

const weatherReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'ADD_CITY_TO_QUEUE': {
            const citiesQueue = [...state.citiesQueue]
            citiesQueue.push(action.city)
            return {
                ...state,
                citiesQueue
            }
        }
        case 'DELETE_CITY_FROM_QUEUE': {
            const citiesQueue = [...state.citiesQueue]
            citiesQueue.shift()
            return {
                ...state,
                citiesQueue
            }
        }
        case 'UPDATE_LOADING_STATUS':
            return {
                ...state,
                loading: action.loading
            }
        case 'DELETE_CITY': {
            const cities = [...state.cities]
            cities.splice(action.index, 1)
            return {
                ...state,
                cities
            }
        }
        case 'FETCH_CITY_REQUEST': {
            const cities = [...state.cities]
            // @ts-ignore
            cities.push({})
            return {
                ...state,
                cities
            }
        }
        case 'FETCH_CITY_ERROR': {
            const cities = [...state.cities]
            const i = cities.filter((item) =>
                (JSON.stringify(item) !== JSON.stringify({}))).length
            cities.splice(i, 1)
            return {
                ...state,
                cities
            }
        }
        case 'FETCH_CITY_SUCCESS': {
            const cities = [...state.cities]
            const i = cities.filter((item) =>
                (JSON.stringify(item) !== JSON.stringify({}))).length
            cities[i] = action.city
            return {
                ...state,
                cities
            }
        }
        case 'FETCH_GEOLOCATION_REQUEST':
            return {
                ...state,
                isGeoPosAvailable: action.isGeoPosAvailable,
                loading: true
            }
        case 'FETCH_GEOLOCATION_SUCCESS':
            return {
                ...state,
                isGeoPosAvailable: action.isGeoPosAvailable
            }
        case 'FETCH_GEOLOCATION_FAILURE':
            return {
                ...state,
                isGeoPosAvailable: action.isGeoPosAvailable
            }
        case 'FETCH_CITY_BY_COORDS_SUCCESS': {
            return {
                ...state,
                cityByCoords: action.city
            }
        }
        case 'ADD_ERROR_MESSAGE':
            return {
                ...state,
                errorMessage: action.message
            }
        case 'CLEAR_ERROR_MESSAGE':
            return {
                ...state,
                errorMessage: null
            }
        case 'CHANGE_LANG':
            return {
                ...state,
                language: action.language
            }
        default:
            return state
    }
}

export const actions = {
    updateLoadingStatus: (loading: boolean) => ({type: 'UPDATE_LOADING_STATUS', loading} as const),
    cityDelete: (index: number) => ({type: 'DELETE_CITY', index} as const),
    cityRequest: () => ({type: 'FETCH_CITY_REQUEST'} as const),
    cityLoaded: (city: CityType) => ({type: 'FETCH_CITY_SUCCESS', city} as const),
    cityError: (city = '') => ({type: 'FETCH_CITY_ERROR', city} as const),
    locRequested: () => ({type: 'FETCH_GEOLOCATION_REQUEST', isGeoPosAvailable: null} as const),
    locLoaded: () => ({type: 'FETCH_GEOLOCATION_SUCCESS', isGeoPosAvailable: true} as const),
    locError: () => ({type: 'FETCH_GEOLOCATION_FAILURE', isGeoPosAvailable: false} as const),
    cityByCoordsLoaded: (city: CityType) => ({type: 'FETCH_CITY_BY_COORDS_SUCCESS', city} as const),
    addCityToQueue: (city: string) => ({type: 'ADD_CITY_TO_QUEUE', city} as const),
    deleteCityFromQueue: () => ({type: 'DELETE_CITY_FROM_QUEUE'} as const),
    addErrorMessage: (message: string) => ({type: 'ADD_ERROR_MESSAGE', message} as const),
    clearErrorMessage: () => ({type: 'CLEAR_ERROR_MESSAGE'} as const),
    changeLang: (language: VocabularyType) => ({type: 'CHANGE_LANG', language} as const)
}

export default weatherReducer
