import React, { useMemo, useState } from 'react'
import Navigation, { navTitleType } from '../Navigation/Navigation'

export const ActiveContext = React.createContext({} as contextType)

type contextType = {
  setActiveTitle: (newTitle: navTitleType) => void
}

export type LayoutProps = { children: React.ReactNode }
export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [activeTitle, setActiveTitle] = useState<navTitleType>('Home')
  const nav = useMemo(
    () => ({
      setActiveTitle,
    }),
    []
  )
  return (
    <>
      <Navigation activeTitle={activeTitle} />
      <ActiveContext.Provider value={nav}>{children}</ActiveContext.Provider>
    </>
  )
}

export default Layout
