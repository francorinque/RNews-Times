import { createContext, useState } from "react"

export const MenuContext = createContext()

export const MenuProvider = ({ children }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  return (
    <MenuContext.Provider
      value={{
        isOpenMenu,
        setIsOpenMenu
      }}
    >
      {children}
    </MenuContext.Provider>
  )
}
