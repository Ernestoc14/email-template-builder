import { Component } from "@/app/context/MasterJSONContext";
import { bannerAppHTML, bannerAppCSS } from "./variantsHTML/BannerApp";
import { bannerStopoverHTML, bannerStopoverCSS } from "./variantsHTML/BannerStopover"
import { bannerWidePromotionalHTML, bannerWidePromotionalCSS } from "./variantsHTML/BannerWidePromotional";

const getBannersHTML = (data: Component, lang: string) => {
    const variant = data.variant
    let html: string;
    let css: string;

    switch (variant){
        case "Banner del App":
            // @ts-expect-error doesn't exist title props
            html = bannerAppHTML(data[lang]);
            css = bannerAppCSS()
            break;
        
        case "Banner Stopover":
            // @ts-expect-error doesn't exist title props
            html = bannerStopoverHTML(data[lang]);
            css = bannerStopoverCSS()
            break;

        case "Banner Wide Promotional":
            // @ts-expect-error doesn't exist title props
            html = bannerWidePromotionalHTML(data[lang]);
            css = bannerWidePromotionalCSS()
            break;

        default:
            html = ''
            css = ''
        break;
    }
    return {html, css}
}

export {getBannersHTML}