import { useLanguage } from "@/app/context/LanguageContext";
import { Component } from "@/app/context/MasterJSONContext";
import ItineraryCardEarly from "./variants/ItineraryCardEarly";

const ItineraryCards = ({ data, isResponsiveView }: { data: Component, isResponsiveView?: boolean }) => {
  const { language } = useLanguage();

  const langProp: "esProps" | "enProps" | "ptProps" | "frProps" = `${
    language.toLowerCase() as "es" | "en" | "pt" | "fr"
  }Props`;

  switch (data.variant) {
    case "Early":
      return (
        <ItineraryCardEarly data={data} langProp={langProp} isResponsiveView={isResponsiveView}/>
      )
  }
};

export default ItineraryCards;
