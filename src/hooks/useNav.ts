import { useContext } from "react";
import { NavigationContext } from "../context/navigationContext";

export const useNav = () => {
  return useContext(NavigationContext);
};
