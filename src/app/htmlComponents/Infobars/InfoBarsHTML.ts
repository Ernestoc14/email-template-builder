import { Component } from "@/app/context/MasterJSONContext";
import { singleInfoBarCSS, singleInfoBarHTML } from "./variantsHTML/SingleInfoBar";

const getInfoBarsHTML = (data: Component, lang: string) => {
    const variant = data.variant
    let html: string;
    let css: string;

    switch(variant){
        case "Single Infobar":
            // @ts-expect-error doesn't exist title props 
            html = singleInfoBarHTML(data[lang])
            css = singleInfoBarCSS()
            break

        default:
            html = ''
            css = '' 
            break
    }
    return {html, css}
}

export {getInfoBarsHTML}