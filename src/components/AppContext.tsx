import { createContext, useEffect, useState } from "react"
import { getAllLocalStorage } from "../services/storage"
import { UserData } from "../pages/Conta"

interface IAppContext {
    userData?: UserData,
    userId?: number,
    isLoggedIn: boolean,
    setIsLoggedIn: (isLoggedIn: boolean) => void
    setUserData: (userData: UserData) => void
}
  
export const AppContext = createContext({} as IAppContext)
  
export const AppContextProvider = ({ children }: any) => {
    const [ isLoggedIn, setIsLoggedIn ] = useState<boolean>(false)
    const [ userData, setUserData ] = useState<UserData|any>()

    const storage = getAllLocalStorage()

    useEffect(() => {
      if(storage){
        const { login } = JSON.parse(storage)
        setIsLoggedIn(login)
      }
    }, [])

    return (
      <AppContext.Provider value={{ userData, setUserData, isLoggedIn, setIsLoggedIn }}>
        { children }
      </AppContext.Provider>
    )
}
