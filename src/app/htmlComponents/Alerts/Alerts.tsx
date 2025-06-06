import { Component } from "@/app/context/MasterJSONContext";
import { useLanguage } from "@/app/context/LanguageContext";
import ErrorContentAlert from "./variants/Content/ErrorContentAlert";
import InfoContentAlert from "./variants/Content/InfoContentAlert";
import InvertAlertContent from "./variants/Content/InvertAlertContent";
import WarningContentAlert from "./variants/Content/WarningContentAlert";
import ChangesInlineAlert from "./variants/Inline/ChangesInlineAlert";
import ErrorInlineAlert from "./variants/Inline/ErrorInlineAlert";
import InvertedInlineAlert from "./variants/Inline/InvertedInlineAlert";
import MainInlineAlert from "./variants/Inline/MainInlineAlert";
import SuccessInlineAlert from "./variants/Inline/SuccessInlineAlert";
import TransparentInlineAlert from "./variants/Inline/TransparentInlineAlert";
import WarningInlineAlert from "./variants/Inline/WarningInlineAlert";

const Alerts = ({ data }: { data: Component }) => {
  const { language } = useLanguage();
  const langProp: "esProps" | "enProps" | "ptProps" | "frProps" = `${
    language.toLowerCase() as "es" | "en" | "pt" | "fr"
  }Props`;

  switch (data.variant) {
    case "Content Error":
      return (
        <ErrorContentAlert data={data} langProp={langProp}/>
      );
    case "Content Info":
      return (
        <InfoContentAlert data={data} langProp={langProp}/>
      );
    case "Content Invert":
      return (
        <InvertAlertContent data={data} langProp={langProp}/>
      );
    case "Content Warning":
      return (
        <WarningContentAlert data={data} langProp={langProp}/>
      );
    case "Inline Changes":
      return (
        <ChangesInlineAlert data={data} langProp={langProp}/>
      );
    case "Inline Error":
      return (
        <ErrorInlineAlert data={data} langProp={langProp}/>
      );
    case "Inline Inverted":
      return (
        <InvertedInlineAlert data={data} langProp={langProp}/>
      );
    case "Inline Main":
      return (
        <MainInlineAlert data={data} langProp={langProp}/>
      );
    case "Inline Success":
      return (
        <SuccessInlineAlert data={data} langProp={langProp}/>
      );
    case "Inline Transparent":
      return (
        <TransparentInlineAlert data={data} langProp={langProp}/>
      );
    case "Inline Warning":
      return (
        <WarningInlineAlert data={data} langProp={langProp}/>
      );
  }
};
export default Alerts;
