import React, {FC, useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {appStateType} from "./redux/store"
import {actions} from "./redux/weatherReducer"
import {getWeatherByCityName, getWeatherByCoord} from "./api/api"
import {dataDestructuring} from "./api/apiUtils"
import {getGeoPosition} from "./api/getGeoPosition"
import {saveToStorage} from "./redux/saveToStorage";
import Page from "./components/Page";
import {LangContext} from "./utils/vocabulary";

export const App: FC = () => {

    const dispatch = useDispatch()

    const cities = useSelector((state: appStateType) => state.cities)
    const apiKey = useSelector((state: appStateType) => state.apiKey)
    const cityDefault = useSelector((state: appStateType) => state.cityDefault)
    const isGeoPosAvailable = useSelector((state: appStateType) => state.isGeoPosAvailable)
    const cityByCoords = useSelector((state: appStateType) => state.cityByCoords)
    const citiesQueue = useSelector((state: appStateType) => state.citiesQueue)
    const language = useSelector((state: appStateType) => state.language)

    const successGeoLocCallback = (pos: {coords: {latitude: number, longitude: number}}) => {
        const lat = pos.coords.latitude
        const lon = pos.coords.longitude

        dispatch(actions.locLoaded())

        getWeatherByCoord(lat, lon, apiKey, language.reduction)
            .then((res) => {
                dispatch(actions.cityByCoordsLoaded(dataDestructuring(res.data)))
            })
            .catch((err) => {
                // @ts-ignore
                dispatch(actions.cityByCoordsLoaded({error: err.message}))
            })
    }

    const errorGeoLocCallback = () => {
        dispatch(actions.locError())

        getWeatherByCityName(cityDefault, apiKey, language.reduction)
            .then((res) => {
                dispatch(actions.cityByCoordsLoaded(dataDestructuring(res.data)))
            })
            .catch((err) => {
                // @ts-ignore
                dispatch(actions.cityByCoordsLoaded({error: err.message}))
            })
    }

    useEffect(() => {
        if (citiesQueue.length > 0) {

            dispatch(actions.cityRequest())

            getWeatherByCityName(citiesQueue[0], apiKey, language.reduction)
                .then((res) => {
                    dispatch(actions.cityLoaded(dataDestructuring(res.data)))
                    dispatch(actions.clearErrorMessage())
                })
                .catch((err) => {
                    dispatch(actions.cityError())
                    dispatch(actions.addErrorMessage(err.message))
                })

            dispatch(actions.deleteCityFromQueue())
        }
    })

    useEffect(() => {
        if (isGeoPosAvailable === null)
            getGeoPosition(successGeoLocCallback, errorGeoLocCallback)
    })

    useEffect(() => {
        if (cityByCoords && JSON.stringify(cityByCoords) !== '{}')
            dispatch(actions.updateLoadingStatus(false))
    }, [dispatch, cityByCoords])

    useEffect(() => {
        saveToStorage(cities, language)
    })

    return (
        // @ts-ignore
        <LangContext.Provider value={language}>
            <Page/>
        </LangContext.Provider>
    )
}
