import { Component } from "@/app/context/MasterJSONContext";
import { useLanguage } from "@/app/context/LanguageContext";
import SocialFooters from "./variants/SocialFooters";
import TraditionalFooters from "./variants/TraditionalFooters";
import UnsubscribeFooter from "./variants/UnsubscribeFooter";

const Footers = ({ data }: { data: Component }) => {
  const { language } = useLanguage();

  const langProp: "esProps" | "enProps" | "ptProps" | "frProps" = `${
    language.toLowerCase() as "es" | "en" | "pt" | "fr"
  }Props`;

  switch (data.variant) {
    case "Social":
      return (
        <SocialFooters data={data} langProp={langProp}/>
      );

    case "Traditional":
      return (
        <TraditionalFooters data={data} langProp={langProp} />
      );

      case "Unsubscribe":
        return (
          <UnsubscribeFooter data={data} langProp={langProp} />
        )
  }
};

export default Footers;
