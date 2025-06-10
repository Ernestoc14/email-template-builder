import { Component } from "@/app/context/MasterJSONContext";
import { socialFootersCSS, socialFootersHTML } from "./variantsHTML/SocialFooters";
import { TraditionalFootersCSS, TraditionalFootersHTML } from "./variantsHTML/TraditionalFooters";
import { unsubscribeCSS, unsubscribeHTML } from "./variantsHTML/UnsubscribeFooter"

const getFooterHTML = (data: Component, lang: string) => {
    const variant = data.variant
    let html: string;
    let css: string;

    switch (variant){
        case "Social":
            // @ts-expect-error doesn't exist title props
            html = socialFootersHTML(data[lang]);
            css = socialFootersCSS()
            break;

        case "Traditional":
            // @ts-expect-error doesn't exist title props
            html = TraditionalFootersHTML(data[lang])
            css = TraditionalFootersCSS()
            break;

        case "Unsubscribe":
            // @ts-expect-error doesnt exist footer props
            html = unsubscribeHTML(data[lang])
            css = unsubscribeCSS()
        default:
            html = ''
            css = ''
        break;
    }
    return {html, css}
}

export {getFooterHTML}