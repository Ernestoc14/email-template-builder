import { useLanguage } from "@/app/context/LanguageContext";
import { Component } from "@/app/context/MasterJSONContext";
import ItineraryCardEarly from "./variants/ItineraryCardEarly";
import ItineraryCardCancelled from "./variants/ItineraryCardCancelled";
import ItineraryCardChanges from "./variants/ItineraryCardChanges";
import ItineraryCardDelayed from "./variants/ItineraryCardDelayed";
import ItineraryCardOnTime from "./variants/ItineraryCardOnTime";
import ItineraryCardProgrammed from "./variants/ItineraryCardProgrammed";
import ItineraryCardNoPill from "./variants/ItineraryCardNoPill";
import ItineraryCardLayover from "./variants/ItineraryCardLayover";

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
    case "On Time":
      return (
        <ItineraryCardOnTime data={data} langProp={langProp} isResponsiveView={isResponsiveView} />
      )
    case "Changes":
      return (
        <ItineraryCardChanges data={data} langProp={langProp} isResponsiveView={isResponsiveView} />
      )
    case "Cancelled":
      return (
        <ItineraryCardCancelled data={data} langProp={langProp} isResponsiveView={isResponsiveView}/>
      )
    case "Delayed":
      return (
        <ItineraryCardDelayed data={data} langProp={langProp} isResponsiveView={isResponsiveView} />
      )
    case "Programmed":
      return (
        <ItineraryCardProgrammed data={data} langProp={langProp} isResponsiveView={isResponsiveView} />
      )
    case "No Pill":
      return (
        <ItineraryCardNoPill data={data} langProp={langProp} isResponsiveView={isResponsiveView} />
      )
    case "Layover":
      return (
        <ItineraryCardLayover data={data} langProp={langProp} isResponsiveView={isResponsiveView} />
      )
    default:
      return <div>Variant not found</div>;

  }
};

export default ItineraryCards;
