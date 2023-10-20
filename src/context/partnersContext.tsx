import { ReactNode, createContext } from "react";
import { PARTNERS } from "../../public/static";

type PartnersProviderType = {
  children: ReactNode;
}

export const PartnersContext = createContext<string[] | undefined>(undefined)

export const PartnersProvider = ({ children }: PartnersProviderType) => {
  return (
    <PartnersContext.Provider value={PARTNERS}>
      {children}
    </PartnersContext.Provider>
  )
}