import { useLanguage } from "@/app/context/LanguageContext";
import { Component } from "@/app/context/MasterJSONContext";
import TopicCardPair from "./variant/TopicCardPair";

const TopicCards = ({ data, isResponsiveView }: { data: Component, isResponsiveView?: boolean }) => {
  const { language } = useLanguage();

  const langProp: "esProps" | "enProps" | "ptProps" | "frProps" = `${
    language.toLowerCase() as "es" | "en" | "pt" | "fr"
  }Props`;

  switch (data.variant) {
    case "Pair Topic Cards":
      return (
        <TopicCardPair data={data} isResponsiveView={isResponsiveView} langProp={langProp} />
      );

  }
};

export default TopicCards;