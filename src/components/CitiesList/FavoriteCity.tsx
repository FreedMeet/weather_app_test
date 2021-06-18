import {useDispatch} from "react-redux"
import {actions} from "../../redux/weatherReducer"
import {WeatherInfo} from "../WeatherInfo/WeatherInfo"
import styles from "./FavoriteCity.module.css"
import React, {FC} from "react"
import {CityType} from "../../types/types"

type PropsType = {
    city: CityType
    i: number
}

export const FavoriteCity: FC<PropsType> = ({city, i}) => {
    const dispatch = useDispatch()

    const deleteCity = () => {
        dispatch(actions.cityDelete(i))
    }

    return (
        <div className={styles.cityCard}>
            <div className={styles.cityCard_Header}>
                <div>{city.city}, {city.country}</div>
                <div className={styles.cityCard_HeaderInfo}>
                    <img src={`https://openweathermap.org/img/wn/${city.icon}@2x.png`} alt=""/>
                    <div>{city.description}</div>
                    <div className={styles.cityCard_HeaderInfo__delete} onClick={deleteCity}>
                        <span>X</span>
                    </div>
                </div>
            </div>
            <div className={styles.cityCard_InfoDate}>
                <div>{city.date}</div>
            </div>
            <div>
                <WeatherInfo i={i} {...city}/>
            </div>
        </div>
    )
}
