import {applyMiddleware, createStore} from 'redux'
import thunkMiddleware from "redux-thunk"
import weatherReducer from "./weatherReducer"

const store = createStore(weatherReducer, applyMiddleware(thunkMiddleware))

type PropertiesTypes<T> = T extends {[key: string]: infer U} ? U : never
export type InferValueTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertiesTypes<T>>

type weatherReducerType = typeof weatherReducer
export type appStateType = ReturnType<weatherReducerType>

export default store
