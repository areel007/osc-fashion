import { useContext } from "react";
import { ProductsContext } from "../context/context";

export const useProducts = () => {
    return useContext(ProductsContext);
};
