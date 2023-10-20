import { ReactNode, createContext } from "react";
import { Product } from "../types/types";
import { PRODUCTS } from "../../public/static";

type ProdcutContextProps = {
    children: ReactNode
}

export const ProductsContext = createContext<Product[] | undefined>(undefined);

export const ProductContextProvider = ({ children }: ProdcutContextProps) => {
    return (
        <ProductsContext.Provider value={PRODUCTS}>
            {children}
        </ProductsContext.Provider>
    )
}