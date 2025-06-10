import { ImagesProps } from "../types"

const ImageFullWidthCSS = () => {
    return `<style type="text/css">
                @media all and (max-width:360px) {
                    .header-banner-desktop{
                        display: none !important;
                    }
                    .header-banner-mobile{
                        display: block !important;
                    }        
                }
            </style>`
}

const ImageFullWidthHTML = (props: ImagesProps) => {
    return `<tr>
                <td class="header-banner-desktop">
                    <img height="auto" src="${props.desktopURL}" style="border: 0;display: block;outline: none;text-decoration: none;width: 100%;height: auto;line-height: 100%;" alt="${props.altText}" width="800">
                </td>
                <td class="header-banner-mobile" style="display: none;">
                    <img height="auto" src="${props.mobileURL}" style="border: 0;display: block;outline: none;text-decoration: none;width: 100%;height: auto;line-height: 100%;" alt="${props.altText}">
                </td>
            </tr>`
}

export { ImageFullWidthCSS, ImageFullWidthHTML }