import { Navigation } from './../types/types';
import { createContext } from "react";

export const NavigationContext = createContext<Navigation[] | undefined>(undefined)