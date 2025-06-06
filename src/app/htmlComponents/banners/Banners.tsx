import { useLanguage } from "@/app/context/LanguageContext";
import { Component } from "@/app/context/MasterJSONContext";
import BannerApp from "./variants/BannerApp";
import BannerStopover from "./variants/BannerStopover";
import BannerWidePromotional from "./variants/BannerWidePromotional"

const Banners = ({ data, isResponsiveView }: { data: Component, isResponsiveView?: boolean  }) => {
  const { language } = useLanguage();

  const langProp: "esProps" | "enProps" | "ptProps" | "frProps" = `${
    language.toLowerCase() as "es" | "en" | "pt" | "fr"
  }Props`;

  switch (data.variant) {
    case "Banner del App":
      return (
        <BannerApp data={data} langProp={langProp} isResponsiveView={isResponsiveView}/>
      );
    case "Banner Stopover":
      return (
        <BannerStopover data={data} langProp={langProp} isResponsiveView={isResponsiveView}/>
      )
    case "Banner Wide Promotional":
      return (
        <BannerWidePromotional data={data} langProp={langProp} isResponsiveView={isResponsiveView}/>
      )
  }
};
export default Banners;
