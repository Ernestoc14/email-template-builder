import { HeadersProps } from "../types"

const pairLogosHeaderCSS = () => {
    return `<style type="text/css">
                @media all and (max-width: 719px) {
                    .copa-logo-width {
                        margin-right: 0 !important;
                        width: 116px !important;
                    }

                    .connectmiles-logo-width {
                        margin-right: 0 !important;
                        width: 125px !important;
                    }

                    .divider-mobile-spacing {
                        padding-top: 16px !important;
                    }
                }
            </style>`
}

const pairLogosHeadersHTML = (props: HeadersProps) => {
    return `<table border="0" cellpadding="0" cellspacing="0" style="width: 100%; ">
                <tbody>
                    <tr>
                    <td style="width: 50%; height:40px;">
                        <img height="auto" src="https://www.copaair.com/webassets/images/copa-logo-white.png"
                        style="border: 0;display: block;outline: none;text-decoration: none;width: 176px;height: auto;line-height: 100%;"
                        alt="Copa Logo" class="copa-logo-width" width="176">
                    </td>
                    <td style="width: 50%;" align="right">
                        <img height="auto" src="${props.secondLogoUrl}"
                        style="border: 0;display: block;outline: none;text-decoration: none;width: 159px;height: auto;line-height: 100%; padding-bottom: 8px;"
                        alt="ConnectMiles Logo" class="connectmiles-logo-width" width="159">
                    </td>
                    </tr>
                    <tr>
                    <td colspan="2" class="divider-mobile-spacing"
                        style="border-bottom: 1px solid #cccccb; padding-top: 22px; width: 100%; max-height: 1px; height: 1px;line-height: 0;">
                        &nbsp;
                    </td>
                    </tr>
                </tbody>
            </table>`
}

export {pairLogosHeadersHTML, pairLogosHeaderCSS}