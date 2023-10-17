import { HandleAction, Product } from "./../types/types";
import { createContext } from "react";

// export const NavigationContext = createContext<Navigation[] | undefined>(
//   undefined
// );
// export const MobileMenuContext = createContext<boolean | undefined>(undefined);

export const HamburgerActionContext = createContext<HandleAction | undefined>(
  undefined
);

export const CloseMobileMenuContext = createContext<HandleAction | undefined>(
  undefined
);

export const IsFavoriteContext = createContext<boolean | undefined>(undefined);

export const HandleToggleFavoriteContext = createContext<
  HandleAction | undefined
>(undefined);

export const ProductsContext = createContext<Product[] | undefined>(undefined);
