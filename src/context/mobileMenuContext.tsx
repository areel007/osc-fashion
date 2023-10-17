import {ReactNode, createContext, useState} from "react"
import { HandleAction } from "../types/types";

type MobileMenuProviderProps = {
  children: ReactNode;
}

interface MobileProviderValue {
  isMobileMenuOut: boolean;
  openMobileMenu: HandleAction;
  closeMobileMenu: HandleAction
}

export const MobileMenuContext = createContext<MobileProviderValue | undefined>(undefined);

export const MobileMenuProvider = ({children}: MobileMenuProviderProps) => {
  const [isMobileMenuOut, setIsMobileMenuOut] = useState<boolean>(false)

  const openMobileMenu = () => setIsMobileMenuOut(prev => !prev)

  const closeMobileMenu = () => setIsMobileMenuOut(false)
  
  return (
    <MobileMenuContext.Provider value={{isMobileMenuOut, openMobileMenu, closeMobileMenu}}>
      {children}
    </MobileMenuContext.Provider>
  )
}