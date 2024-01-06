import React from "react"
import { UiContext } from "../context/UiContext"

export const useHideMenu = (hide) => {
  const { showMenu, hideMenu } = React.useContext(UiContext)

  React.useEffect(() => {
    if (hide) {
      hideMenu()
    } else {
      showMenu()
    }
  }, [hide, hideMenu, showMenu])
}
