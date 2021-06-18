import React from 'react'
import {Header} from "./Header/Header"
import CurrentCity from "./CurrentCity/CurrentCity"
import {useSelector} from "react-redux"
import styles from './Page.module.css'
import {FavoriteCities} from "./CitiesList/FavoriteCities"
import {appStateType} from "../redux/store"

const Page = () => {

    const cityByCoords = useSelector((state: appStateType) => state.cityByCoords)
    const cities = useSelector((state: appStateType) => state.cities)

    return (
        <div>
            <Header />
            <div className={styles.cities}>
                <CurrentCity cityByCoords={cityByCoords}/>
                <FavoriteCities cities={cities}/>
            </div>
        </div>
    )
}

export default Page;
