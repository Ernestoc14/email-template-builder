import { Component } from "@/app/context/MasterJSONContext";
import { itineraryCardEarlyHTML, itineraryCardEarlyCSS } from "./variantsHTML/ItineraryCardEarly";
import { itineraryCardCancelledCSS, itineraryCardCancelledHTML } from "./variantsHTML/ItineraryCardCancelled";
import { itineraryCardDelayedHTML } from "./variantsHTML/ItineraryCardDelayed";
import { itineraryCardOnTimeCSS, itineraryCardOnTimeHTML } from "./variantsHTML/ItineraryCardOnTime";
import { itineraryCardChangesCSS, itineraryCardChangesHTML } from "./variantsHTML/ItineraryCardChanges";
import { getItineraryCardLayoverHTML } from "./variantsHTML/ItineraryCardLayover";
import { itineraryCardNoPillHTML } from "./variantsHTML/ItineraryCardNoPill";
import { itineraryCardProgrammedCSS, itineraryCardProgrammedHTML } from "./variantsHTML/ItineraryCardProgrammed";

const getItineraryCardsHTML = (data: Component, lang: string) => {
    const variant = data.variant;
    let html: string;
    let css: string;

    switch (variant) {
        case "Cancelled":
            // @ts-expect-error doesn't exist Itinerary props
            html = itineraryCardCancelledHTML(data[lang]);
            css = itineraryCardCancelledCSS();
        break;
        case "Changes":
            // @ts-expect-error doesn't exist Itinerary props
            html = itineraryCardChangesHTML(data[lang]);
            css = itineraryCardChangesCSS();
        break;
        case "Delayed":
            // @ts-expect-error doesn't exist Itinerary props
            html = itineraryCardDelayedHTML(data[lang]);
            css = itineraryCardCancelledCSS();
        break;
        case "Early":
            // @ts-expect-error doesn't exist Itinerary props
            html = itineraryCardEarlyHTML(data[lang]);
            css = itineraryCardEarlyCSS();
        break;
        case "Layover":
            // @ts-expect-error doesn't exist Itinerary props
            html = getItineraryCardLayoverHTML(data[lang]);
            css = itineraryCardChangesCSS();
        break;
        case "No Pill":
            // @ts-expect-error doesn't exist Itinerary props
            html = itineraryCardNoPillHTML(data[lang]);
            css = itineraryCardChangesCSS();
        break;
        case "On Time":
            // @ts-expect-error doesn't exist Itinerary props
            html = itineraryCardOnTimeHTML(data[lang]);
            css = itineraryCardOnTimeCSS();
        break;
        case "Programmed": 
            // @ts-expect-error doesn't exist Itinerary props
            html = itineraryCardProgrammedHTML(data[lang]);
            css = itineraryCardProgrammedCSS();
        break;
        default:
            html = '';
            css = '';
        break;
    }
    return { html, css };
}

export { getItineraryCardsHTML };