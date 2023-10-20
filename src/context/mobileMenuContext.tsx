import { ReactNode, createContext, useState, useEffect } from "react"
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

export const MobileMenuProvider = ({ children }: MobileMenuProviderProps) => {
  const [isMobileMenuOut, setIsMobileMenuOut] = useState<boolean>(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Function to update screenWidth
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);

      // Check if the screen width is greater than 768 pixels and close the mobile menu
      if (window.innerWidth > 768) {
        setIsMobileMenuOut(false);
      }
    };

    // Add an event listener for the resize event
    window.addEventListener("resize", updateScreenWidth);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateScreenWidth);
      console.log(screenWidth);

    };
  }, []);

  const openMobileMenu = () => setIsMobileMenuOut(prev => !prev)

  const closeMobileMenu = () => setIsMobileMenuOut(false)

  return (
    <MobileMenuContext.Provider value={{ isMobileMenuOut, openMobileMenu, closeMobileMenu }}>
      {children}
    </MobileMenuContext.Provider>
  )
}