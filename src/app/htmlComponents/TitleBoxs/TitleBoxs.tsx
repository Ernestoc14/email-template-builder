import { Component } from "@/app/context/MasterJSONContext";
import { useLanguage } from "@/app/context/LanguageContext";
import TitleBoxTitle from "./variants/TitleBoxTitle";
import TitleBoxDescription from "./variants/TitleBoxDescription";

const TitleBoxs = ({ data, isResponsiveView }: { data: Component, isResponsiveView?: boolean }) => {
  const { language } = useLanguage();
  const langProp: "esProps" | "enProps" | "ptProps" | "frProps" = `${
    language.toLowerCase() as "es" | "en" | "pt" | "fr"
  }Props`;

  switch (data.variant) {
    case "Title Description":
      return (
        <TitleBoxDescription data={data} langProp={langProp} isResponsiveView={isResponsiveView}/>
      );
      case "Just Title":
        return (
        <TitleBoxTitle data={data} langProp={langProp} isResponsiveView={isResponsiveView}/>  
      );
  }
};
export default TitleBoxs;
