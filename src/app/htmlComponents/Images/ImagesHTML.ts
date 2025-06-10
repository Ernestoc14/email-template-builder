import { Component } from "@/app/context/MasterJSONContext";
import { ImageFullWidthCSS, ImageFullWidthHTML } from "./variantsHTML/ImageFullWidth";

const getImagesHTML = (data: Component, lang: string) => {
    const variant = data.variant
    let html: string;
    let css: string;

    switch (variant) {
        case "Full Width":
            // @ts-expect-error doesn't exist images props
            html = ImageFullWidthHTML(data[lang]);
            css = ImageFullWidthCSS()
        break;

        default:
            html = ''
            css = ''
        break;
    }
    return { html, css}
}

export { getImagesHTML}