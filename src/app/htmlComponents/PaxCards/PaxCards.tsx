import { useLanguage } from "@/app/context/LanguageContext";
import { Component } from "@/app/context/MasterJSONContext";
import PaxCardPair from "./variant/PaxCardPair";
import PaxCardWCI from "./variant/PaxCardWCI";

const PaxCards = ({ data, isResponsiveView }: { data: Component, isResponsiveView?: boolean }) => {
    const { language } = useLanguage();
    const langProp: "esProps" | "enProps" | "ptProps" | "frProps" = `${
        language.toLowerCase() as "es" | "en" | "pt" | "fr"
    }Props`;

    switch (data.variant) {
        case "Pair Pax Cards":
            return (
                <PaxCardPair data={data} langProp={langProp} isResponsiveView={isResponsiveView}/>
            );
        case "WCI Status Pax Card":
            return (
                <PaxCardWCI data={data} langProp={langProp} isResponsiveView={isResponsiveView} />
            );
    }
}

export default PaxCards