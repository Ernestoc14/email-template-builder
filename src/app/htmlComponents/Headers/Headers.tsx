import { Component } from "@/app/context/MasterJSONContext";
import { useLanguage } from "@/app/context/LanguageContext";
import CopaLogoHeaders from "./variants/CopaLogoHeaders";
import ReservationCodeHeader from "./variants/ReservationCodeHeaders";
import PairLogosHeaders from "./variants/PairLogosHeaders";
import NoLineHeader from "./variants/NoLineHeaders";

const Headers = ({ data, isResponsiveView  }: { data: Component, isResponsiveView?: boolean }) => {
  const { language } = useLanguage();

  const langProp: "esProps" | "enProps" | "ptProps" | "frProps" = `${
    language.toLowerCase() as "es" | "en" | "pt" | "fr"
  }Props`;

  switch (data.variant) {
    case "Copa Logo":
      return (
        <CopaLogoHeaders isResponsiveView={isResponsiveView}/>
      );

    case "Pair Logos":
      return (
        <PairLogosHeaders data={data} langProp={langProp} isResponsiveView={isResponsiveView}/>
      );

    case "Reservation Code":
      return (
        <ReservationCodeHeader data={data} langProp={langProp} isResponsiveView={isResponsiveView}/>
      );

      case "No Line": 
        return (
          <NoLineHeader isResponsiveView={isResponsiveView} />
        )
  }
};

export default Headers;
