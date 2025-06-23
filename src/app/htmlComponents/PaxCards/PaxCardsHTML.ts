import { Component } from "@/app/context/MasterJSONContext";
import { paxCardPairCSS, paxCardPairHTML } from "./variantHTML/PaxCardPair";
import { paxCardWciCSS, paxCardWciHTML } from "./variantHTML/PaxCardWCI";

const getPaxCardsHTML = (data: Component, lang: string) => {
    const variant = data.variant
    let html: string;
    let css: string;

    switch (variant){
        case "Pair Pax Cards":
            // @ts-expect-error doesn't exist pax card props
            html = paxCardPairHTML(data[lang])
            css = paxCardPairCSS()
        break;
        case "WCI Status Pax Card":
            // @ts-expect-error doesn't exist pax card props
            html = paxCardWciHTML(data[lang])
            css = paxCardWciCSS()
        break;
        default: 
            html = ''
            css = ''
        break;
    }
    return { html, css }
} 

export {getPaxCardsHTML}