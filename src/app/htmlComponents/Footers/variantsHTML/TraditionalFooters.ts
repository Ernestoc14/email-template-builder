import { FootersProps } from "../types"

const TraditionalFootersCSS = () =>{
    return `<style type="text/css">
                @media all and (max-width:719px) {
                    .transaccionalFooter-mobile-padding {
                        padding: 32px 24px !important;
                    }
                }
            </style>`
}

const TraditionalFootersHTML = (props: FootersProps) => {
    return `<td style="padding: 32px 56px; background-color: #EFEFEE; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;" class="transaccionalFooter-mobile-padding">
                <table align="center" border="0" cellpadding="0" cellspacing="0" style="width: 100%;">
                    <tr>
                        <td align="center" style="font-size: 12px;font-style: normal;font-weight: 400;line-height: 16px;color: #666666;padding-bottom: 8px;">
                            ${props.text}
                            <a style="color: #666666;font-weight:600;text-decoration:underline!important;" href="${props.firstLink}" target="_blank">
                                <span style="white-space: nowrap;">${props.linkText}</span>.
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="font-size: 12px;font-style: normal;font-weight: 400;line-height: 16px;color: #666666;padding-bottom: 16px;">
                            ${props.secondText}
                            <a style="color: #666666;font-weight:600;text-decoration:underline!important" href="${props.secondLink}" target="_blank">
                                <span>${props.secondLinkText}</span>.
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td align="center">
                            <a href="https://www.staralliance.com/en/" target="_blank">
                                <img src="https://www.copaair.com/assets/StarAlliance-Footer-Logo-01-01.png" alt="StarAlliance Logo" width="168">
                            </a>
                        </td>
                    </tr>
                </table>
            </td>`
}

export {TraditionalFootersCSS, TraditionalFootersHTML}