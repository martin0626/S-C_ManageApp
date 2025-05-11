import { useEffect } from "react";
import { useAppSelector } from "../hooks/reduxHooks";

export const StateSyncer = () => {
  const selectedServices = useAppSelector((state) => state.services.selectedServices);

  useEffect(() => {
    localStorage.setItem("selectedServices", JSON.stringify(selectedServices));
  }, [selectedServices]);

  return null; 
};