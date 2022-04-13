import { useContext } from "react"
import { createContext } from "react"
import CarStore from "./carStore"

interface Store {
    carStore: CarStore,
}

export const dark: Store = {
    carStore: new CarStore(),
}

export const Context = createContext(dark)

export function useDarkMode() {
    return useContext(Context)
}