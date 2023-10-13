import { HandleAction, Navigation } from './../types/types';
import { createContext } from "react";

export const NavigationContext = createContext<Navigation[] | undefined>(undefined)
export const MobileMenuContext = createContext<boolean | undefined >(undefined)
export const HamburgerActionContext = createContext<HandleAction | undefined>(undefined)