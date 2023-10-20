import { createContext, ReactNode } from "react";
import { Navigation } from "../types/types";
import { NAVIGATIONS } from "../../public/static";

type NavigationProviderProps = {
  children: ReactNode;
};

export const NavigationContext = createContext<Navigation[] | undefined>(undefined);

export const NavigationProvider = ({ children }: NavigationProviderProps) => (
  <NavigationContext.Provider value={NAVIGATIONS}>
    {children}
  </NavigationContext.Provider>
);



