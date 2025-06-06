import { useLanguage } from "@/app/context/LanguageContext";
import { Component } from "@/app/context/MasterJSONContext";
import SingleInfoBar from "./variants/SingleInfoBar";

const Infobars = ({ data, isResponsiveView }: { data: Component, isResponsiveView?: boolean }) => {
  const { language } = useLanguage();
  const langProp: "esProps" | "enProps" | "ptProps" | "frProps" = `${
    language.toLowerCase() as "es" | "en" | "pt" | "fr"
  }Props`;
  switch (data.variant) {
    case "Single Infobar":
      return (
        <SingleInfoBar data={data} langProp={langProp} isResponsiveView={isResponsiveView} />
      );
  }
};

export default Infobars;
