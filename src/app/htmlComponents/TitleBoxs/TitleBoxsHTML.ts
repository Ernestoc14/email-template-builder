import { Component } from "@/app/context/MasterJSONContext";
import { titleBoxDescriptionCSS, titleBoxDescriptionHTML } from "./variantsHTML/TitleBoxDescription";
import { titleBoxTitleCSS, titleBoxTitleHTML } from "./variantsHTML/TitleBoxTitle";

const getTitleBoxsHTML = (data: Component, lang: string) => {
    const variant = data.variant
    let html: string;
    let css: string;

    switch (variant){
        case "Title Description":
            // @ts-expect-error doesn't exist title props
            html = titleBoxDescriptionHTML(data[lang])
            css = titleBoxDescriptionCSS()
            break
        case "Just Title":
            // @ts-expect-error doesn't exist title props    
            html = titleBoxTitleHTML(data[lang])
            css = titleBoxTitleCSS()
            break

        default: 
            html = ''
            css = ''
        break;
    }
    return { html, css }
} 

export {getTitleBoxsHTML}