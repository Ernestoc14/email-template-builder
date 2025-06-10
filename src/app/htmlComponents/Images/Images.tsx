import { Component } from "@/app/context/MasterJSONContext"
import { useLanguage } from "@/app/context/LanguageContext"
import ImageFullWidth from "./variants/ImageFullWidth"

const Images = ({data, isResponsiveView} : {data: Component, isResponsiveView?: boolean }) => {
    const { language } = useLanguage();

    const langProp: "esProps" | "enProps" | "ptProps" | "frProps" =`${
        language.toLowerCase() as "es" | "en" | "pt" | "fr"
    }Props`;
    
    switch (data.variant) {
        case "Full Width":
            return (
                <ImageFullWidth data={data} langProp={langProp} isResponsiveView={isResponsiveView} />
            )
        default:
    }
}

export default Images;