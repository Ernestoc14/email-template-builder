import { Component } from "@/app/context/MasterJSONContext"
import { reservationCodeHeadersCSS, reservationCodeHeadersHTML } from "./variantsHTML/ReservationCodeHeaders";
import { pairLogosHeadersHTML, pairLogosHeaderCSS } from "./variantsHTML/PairLogosHeaders";
import { copaLogoHeadersCSS, copaLogoHeadersHTML } from "./variantsHTML/CopaLogoHeaders";
import { noLineHeadersHTML, noLineHeadersCSS } from "./variantsHTML/NoLineHeaders";

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
            // @ts-expect-error doesn't exist header props
            html = pairLogosHeadersHTML(data[lang])
            css = pairLogosHeaderCSS()
            break;

        case "Reservation Code":
            // @ts-expect-error doesn't exist header props
            html = reservationCodeHeadersHTML(data[lang])
            css = reservationCodeHeadersCSS()
            break;
        
        case "No Line":
            html = noLineHeadersHTML()
            css = noLineHeadersCSS()
            break;
        default:
            html = ''
            css = ''
        break;
    }
    return {html, css}
}

export {getHeaderHTML}