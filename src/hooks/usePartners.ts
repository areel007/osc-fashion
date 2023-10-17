import { useContext } from "react";
import { PartnersContext } from "../context/partnersContext";

export const usePartners = () => {
  return useContext(PartnersContext);
};
