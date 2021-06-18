import React, {FC, useState} from "react"
import {actions} from "../../../redux/weatherReducer"
import {useDispatch} from "react-redux"
import styles from './Input.module.css'
import {VocabularyType} from "../../../types/types"

type PropsType = {
    lang: VocabularyType
}

export const Input: FC<PropsType> = ({lang}) => {

    const [inputValue, setInputValue] = useState('')
    const dispatch = useDispatch()

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
        setInputValue(event.target.value)

    const clickButton = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        setInputValue('')
        if (inputValue !== '')
            dispatch(actions.addCityToQueue(inputValue))
    }

    return (
        <div className={styles.searchForm}>
            <form>
                <input className={styles.searchForm_Input}
                       onChange={handleChange}
                       placeholder={lang.City_Name}
                       value={inputValue}/>
                <button className={styles.searchForm_Button} onClick={clickButton}>{lang.Add}</button>
            </form>
        </div>
    )
}
