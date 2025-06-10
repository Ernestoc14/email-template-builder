import { Component } from "@/app/context/MasterJSONContext";
import { paxCardPairCSS, paxCardPairHTML } from "./variantHTML/PaxCardPair";

const getPaxCardsHTML = (data: Component, lang: string) => {
    const variant = data.variant
    let html: string;
    let css: string;

    switch (variant){
        case "Pair Pax Cards":
            // @ts-expect-error doesn't exist title props
            html = paxCardPairHTML(data[lang])
            css = paxCardPairCSS()
            break

        default: 
            html = ''
            css = ''
        break;
    }
    return { html, css }
} 

export {getPaxCardsHTML}