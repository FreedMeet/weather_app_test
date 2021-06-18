import styles from "./FavoriteCities.module.css"
import {FavoriteCity} from "./FavoriteCity"
import {CityType} from "../../types/types"
import {FC} from "react"

type PropsType = {
    cities: CityType[]
}

export const FavoriteCities: FC<PropsType> = ({cities}) => {

    return (
        <div className={styles.cityList}>
            {cities.map((city: CityType, i: number) => (<FavoriteCity city={city} key={i} i={i}/>))}
        </div>
    )
}
