import React, {FC, useContext, useState} from "react";
import styles from './WeatherInfo.module.css'
import {LangContext} from "../../utils/vocabulary";
import {VocabularyType} from "../../types/types";

type PropsType = {
    pressure: number
    wind: number
    humidity: number
    feels_like: number
    temp: number
    i?: number
}

export const WeatherInfo: FC<PropsType> = ({pressure, wind, humidity, feels_like, temp, i}) => {

    const [units, setUnits] = useState({i: i, unit: 'C'})
    const lang = useContext(LangContext) as unknown as VocabularyType;

    return (
        <div className={styles.cityCard_WeatherInfo}>
            <div className={styles.cityCard_WeatherInfo__temp}>
                <div>
                    {units.i === i
                        ? units.unit === 'C'
                            ? <span>{temp}°</span>
                            : <span>{(temp * 1.8 + 32).toFixed(0)}°</span>
                        : null
                    }
                    <p>
                        {units.unit === 'C'
                            ? <><span style={{color: "black"}} onClick={() => setUnits({i: i, unit: 'C'})}>C</span> |
                                <span onClick={() => setUnits({i: i, unit: 'F'})}>F</span></>
                            : <><span onClick={() => setUnits({i: i, unit: 'C'})}>C</span> |
                                <span style={{color: "black"}} onClick={() => setUnits({i: i, unit: 'F'})}>F</span></>
                        }
                    </p>
                </div>
                {units.i === i
                    ? units.unit === 'C'
                        ? <span>{lang.feels_like}: {feels_like}°</span>
                        : <span>{lang.feels_like}: {(feels_like * 1.8 + 32).toFixed(0)}°</span>
                    : null
                }`
            </div>
            <div className={styles.cityCard_WeatherInfo__another}>
                <div>{lang.Wind}: <span>{wind} m/s</span></div>
                <div>{lang.Humidity}: <span>{humidity}%</span></div>
                <div>{lang.Pressure}: <span>{pressure}Pa</span></div>
            </div>
        </div>
    );
};
