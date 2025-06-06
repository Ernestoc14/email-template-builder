import { Component } from "@/app/context/MasterJSONContext";
import { informativeBoxSimpleHTML } from "./variantsHTML/InformativeBoxSimple";

const getInformativeBoxHTML = (data: Component, lang: string) => {
    const variant = data.variant
    let html: string;
    let css: string;

    switch(variant){
        case "Simple": 
            // @ts-expect-error doesn't exist title props 
            html = informativeBoxSimpleHTML(data[lang])
            css = ""
        break;

        default:
            html = ''
            css = '' 
            break
    }
    return {html, css}
}

export default getInformativeBoxHTML