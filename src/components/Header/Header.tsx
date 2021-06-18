import {Input} from "./Input/Input"
import {ChangeLang} from "./ChangeLang/ChangeLang"
import styles from './Header.module.css'
import {FC, useContext} from "react"
import {LangContext} from "../../utils/vocabulary"
import {VocabularyType} from "../../types/types"

export const Header: FC = () => {
    const lang = useContext(LangContext) as unknown as VocabularyType


    return (
        <div className={styles.header}>
            <Input lang={lang} />
            <ChangeLang />
        </div>
    )
}
