import { ReactNode, createContext, useState } from "react";
import { HandleAction } from "../types/types";

type FavoriteContextValue = {
    isFavorite: boolean;
    toggleFavorite: HandleAction;
}

type FavoriteContextProps = {
    children: ReactNode;
}

export const FavoriteContext = createContext<FavoriteContextValue | undefined>(undefined);

export const FavoriteContextProvider = ({ children }: FavoriteContextProps) => {
    const [isFavorite, setIsFavorite] = useState<boolean>(false);

    const toggleFavorite = () => {
        console.log(setIsFavorite);

    }

    return (
        <FavoriteContext.Provider value={{ isFavorite, toggleFavorite }}>
            {children}
        </FavoriteContext.Provider>
    )
}