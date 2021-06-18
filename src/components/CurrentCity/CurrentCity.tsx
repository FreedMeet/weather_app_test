import React, {FC} from 'react'
import styles from './CurrentCity.module.css'
import {WeatherInfo} from "../WeatherInfo/WeatherInfo"
import {CityType} from "../../types/types"

type PropsType = {
    cityByCoords: CityType
}

const CurrentCity: FC<PropsType> = ({cityByCoords}) => {

    return (
        cityByCoords.error ?
            <div>{cityByCoords.error}</div> :
            <div className={styles.cityCard}>
                <div className={styles.cityCard_Header}>
                    <div>{cityByCoords.city}, {cityByCoords.country}</div>
                    <div className={styles.cityCard_HeaderInfo}>
                        <img src={`https://openweathermap.org/img/wn/${cityByCoords.icon}@2x.png`} alt=""/>
                        <div>{cityByCoords.description}</div>
                    </div>
                </div>
                <div className={styles.cityCard_InfoDate}>
                    <div>{cityByCoords.date}</div>
                </div>
                <div>
                    <WeatherInfo {...cityByCoords}/>
                </div>
            </div>
    )
}

export default CurrentCity;
