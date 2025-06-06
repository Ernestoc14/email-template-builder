import { useLanguage } from "@/app/context/LanguageContext";
import { Component } from "@/app/context/MasterJSONContext";
import LightButton from "./variants/LightButton";
import LinkButton from "./variants/LinkButton";
import OutlineButton from "./variants/OutlineButton";
import MainButton from "./variants/MainButton";

const Buttons = ({ data}:{data: Component}) => {
  const { language} =useLanguage()
  const langProp: "esProps" | "enProps" | "ptProps" | "frProps" = `${
  language.toLowerCase() as "es" | "en" | "pt" | "fr"
  }Props`;

  switch (data.variant) {
    case "Light":
      return (
        <LightButton data={data} langProp={langProp}/>
      )
    case "Link":
      return (
        <LinkButton data={data} langProp={langProp}/>
      );
    case "Main":
      return(
        <MainButton data={data} langProp={langProp}/>
      )
    case "Outline":
      return(
        <OutlineButton data={data} langProp={langProp}/>
      )
  }
}

export default Buttons