import React from "react"

export const UiContext = React.createContext()

export const UiProvider = ({ children }) => {
  const [menuCollapsed, setMenuCollapsed] = React.useState(false)

  const showMenu = () => setMenuCollapsed(false)
  const hideMenu = () => setMenuCollapsed(true)
  return (
    <UiContext.Provider
      value={{
        menuCollapsed,
        showMenu,
        hideMenu,
      }}
    >
      {children}
    </UiContext.Provider>
  )
}
