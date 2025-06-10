import { Component } from "@/app/context/MasterJSONContext";
import { itineraryCardEarlyHTML, itineraryCardEarlyCSS } from "./variantsHTML/ItineraryCardEarly";

const getItineraryCardsHTML = (data: Component, lang: string) => {
    const variant = data.variant;
    let html: string;
    let css: string;

    switch (variant) {
        case "Early":
            // @ts-expect-error doesn't exist Itinerary props
            html = itineraryCardEarlyHTML(data[lang]);
            css = itineraryCardEarlyCSS();
            break;
        default:
            html = '';
            css = '';
        break;
    }
    return { html, css };
}

export { getItineraryCardsHTML };