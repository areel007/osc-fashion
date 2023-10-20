import { useContext } from "react";
import { FavoriteContext } from "../context/favoriteContext";

export const useFavorite = () => {
    return useContext(FavoriteContext);
};
