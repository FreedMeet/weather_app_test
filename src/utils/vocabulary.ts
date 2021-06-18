import React from "react";
import {VocabularyType} from "../types/types";

export const vocabulary = [
    {
        City_Name: 'City name...',
        Add: 'Add',
        Wind: 'Wind',
        Humidity: 'Humidity',
        Pressure: 'Pressure',
        feels_like: 'feels like',
        reduction: 'EN'
    },
    {
        City_Name: 'Название города...',
        Add: 'Добавить',
        Wind: 'Ветер',
        Humidity: 'Влажность',
        Pressure: 'Давление',
        feels_like: 'ощущается',
        reduction: 'RU'
    },
    {
        City_Name: 'Назва міста...',
        Add: 'Додати',
        Wind: 'Вітер',
        Humidity: 'Вологість',
        Pressure: 'Тиск',
        feels_like: 'відчувається',
        reduction: 'UA'
    }
]

export const LangContext = React.createContext<VocabularyType[]>(vocabulary)
