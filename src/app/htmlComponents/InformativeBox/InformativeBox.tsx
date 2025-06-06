import { Component } from "@/app/context/MasterJSONContext";
import InformativeBoxSimple from "./variants/InformativeBoxSimple";
import { useLanguage } from "@/app/context/LanguageContext";

const InformativeBox = ({ data }: { data: Component }) => {
    const { language } = useLanguage();
    const langProp: "esProps" | "enProps" | "ptProps" | "frProps" = `${
        language.toLowerCase() as "es" | "en" | "pt" | "fr"
    }Props`;

    switch (data.variant) {
        case "Simple":
            return <InformativeBoxSimple data={data} langProp={langProp}/>
            break
    }
}

export default InformativeBox