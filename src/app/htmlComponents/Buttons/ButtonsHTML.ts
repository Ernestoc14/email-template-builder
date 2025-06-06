import { Component } from "@/app/context/MasterJSONContext";
import { lightButtonHTML } from "./variantsHTML/LightButton";
import { linkButtonHTML } from "./variantsHTML/LinkButton";
import { mainButtonHTML } from "./variantsHTML/MainButton";
import { outlineButtonHTML } from "./variantsHTML/OutlineButton";

const getButtonHTML = (data: Component, lang: string) => {
    const variant = data.variant
    let html: string;
    let css: string;

    switch (variant) {
        case "Light":
            // @ts-expect-error doesn't exist title props
            html = lightButtonHTML(data[lang])
            css = ''
            break
 
        case "Link":
            // @ts-expect-error doesn't exist title props
            html = linkButtonHTML(data[lang])
            css = ''
            break

        case "Main":
            // @ts-expect-error doesn't exist title props
            html = mainButtonHTML(data[lang])
            css = ''
            break

        case "Outline":
            // @ts-expect-error doesn't exist title props
            html = outlineButtonHTML(data[lang])
            css = ''
            break
        
        default:
            html = ''
            css = ''
            break
    }
    return {html, css}
}

export {getButtonHTML}