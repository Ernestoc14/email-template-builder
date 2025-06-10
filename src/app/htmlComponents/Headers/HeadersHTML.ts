import { Component } from "@/app/context/MasterJSONContext"
import { reservationCodeHeadersCSS, reservationCodeHeadersHTML } from "./variantsHTML/ReservationCodeHeaders";
import { pairLogosHeadersHTML, pairLogosHeaderCSS } from "./variantsHTML/PairLogosHeaders";
import { copaLogoHeadersCSS, copaLogoHeadersHTML } from "./variantsHTML/CopaLogoHeaders";

const getHeaderHTML = (data: Component, lang: string) => {
    const variant = data.variant
    let html: string;
    let css: string;

    switch (variant){
        case "Copa Logo":
            html = copaLogoHeadersHTML();
            css = copaLogoHeadersCSS()
            break;

        case "Pair Logos":
            // @ts-expect-error doesn't exist title props
            html = pairLogosHeadersHTML(data[lang])
            css = pairLogosHeaderCSS()
            break;

        case "Reservation Code":
            // @ts-expect-error doesn't exist title props
            html = reservationCodeHeadersHTML(data[lang])
            css = reservationCodeHeadersCSS()
            break;
        
        default:
            html = ''
            css = ''
        break;
    }
    return {html, css}
}

export {getHeaderHTML}