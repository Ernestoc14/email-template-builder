import { Component } from "@/app/context/MasterJSONContext";
import { errorContentAlertCSS, errorContentALertHTML } from "./variantsHTML/Content/ErrorContentAlert";
import { infoContentAlertCSS, infoContentAlertHTML } from "./variantsHTML/Content/InfoContentAlert";
import { invertContentAlertCSS, invertContentAlertHTML } from "./variantsHTML/Content/InvertContentAlert";
import { warningContentAlertCSS, warningContentAlertHTML } from "./variantsHTML/Content/WarningContentAlert";
import { changesInlineAlertHTML } from "./variantsHTML/Inline/ChangesInlineAlert";
import { errorInlineAlertHTML } from "./variantsHTML/Inline/ErrorInlineAlert";
import { invertedInlineAlertHTML } from "./variantsHTML/Inline/InvertedInlineAlert";
import { mainInlineAlertHTML } from "./variantsHTML/Inline/MainInlineAlert";
import { successInlineAlertHTML } from "./variantsHTML/Inline/SuccessInlineAlert";
import { transparentInlineAlertHTML } from "./variantsHTML/Inline/TransparentInlineAlert";
import { warningInlineAlertHTML } from "./variantsHTML/Inline/WarningInlineAlert";

const getAlertHTML = (data: Component, lang: string) => {
    const variant = data.variant
    let html: string;
    let css: string;

    switch (variant) {
        case "Content Error":
            // @ts-expect-error doesn't exist title props
            html = errorContentALertHTML(data[lang])
            css = errorContentAlertCSS()
            break
        case "Content Info":
            // @ts-expect-error doesn't exist title props
            html = infoContentAlertHTML(data[lang])
            css = infoContentAlertCSS()
            break
        case "Content Invert":
            // @ts-expect-error doesn't exist title props
            html = invertContentAlertHTML(data[lang])
            css = invertContentAlertCSS()
            break
        case "Content Warning":
            // @ts-expect-error doesn't exist title props
            html = warningContentAlertHTML(data[lang])
            css = warningContentAlertCSS()
            break
        case "Inline Changes":
            // @ts-expect-error doesn't exist title props
            html = changesInlineAlertHTML(data[lang])
            css = ""
            break
        case "Inline Error":
            // @ts-expect-error doesn't exist title props
            html = errorInlineAlertHTML(data[lang])
            css = ""
            break
        case "Inline Inverted":
            // @ts-expect-error doesn't exist title props
            html = invertedInlineAlertHTML(data[lang])
            css = ""
            break
        case "Inline Main":
            // @ts-expect-error doesn't exist title props
            html = mainInlineAlertHTML(data[lang])
            css = ""
            break
        case "Inline Success":
            // @ts-expect-error doesn't exist title props
            html = successInlineAlertHTML(data[lang])
            css = ""
            break
        case "Inline Transparent":
            // @ts-expect-error doesn't exist title props
            html = transparentInlineAlertHTML(data[lang])
            css = ''
            break
        case "Inline Warning":
            // @ts-expect-error doesn't exist title props
            html = warningInlineAlertHTML(data[lang])
            css = ""
            break
        default:
            html = ''
            css = ''
            break
    }
    
    return {html, css}
}

export {getAlertHTML}