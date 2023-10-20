import { useContext } from "react";
import { SearchBoxContext } from "../context/searchContext";

export const useSearch = () => {
  return useContext(SearchBoxContext);
};
