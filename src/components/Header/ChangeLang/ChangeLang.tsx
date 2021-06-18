import React from "react"
import {vocabulary} from "../../../utils/vocabulary"
import {useDispatch, useSelector} from "react-redux"
import {actions} from "../../../redux/weatherReducer"
import styles from './ChangeLang.module.css'
import {appStateType} from "../../../redux/store"

export const ChangeLang = () => {

    const language = useSelector((state: appStateType) => state.language)
    const dispatch = useDispatch()

    const changeLanguage = (e:  React.ChangeEvent<HTMLSelectElement>) => {
        switch (e.target.value) {
            case 'EN':
                return dispatch(actions.changeLang(vocabulary[0]))
            case 'RU':
                return dispatch(actions.changeLang(vocabulary[1]))
            case 'UA':
                return dispatch(actions.changeLang(vocabulary[2]))
            default:
                return language
        }
    }

    return (
        <>
            <select
                className={styles.changeLang_select}
                defaultValue={language.reduction}
                onChangeCapture={changeLanguage}
                name="lang"
                id="lang">
                <option value='EN'>EN</option>
                <option value='RU'>RU</option>
                <option value='UA'>UA</option>
            </select>
        </>
    )
}
