import { FootersProps } from "../types";

const socialFootersCSS = () =>{
    return `<style type="text/css">
                @media all and (max-width:719px) {
                    .socialsFooter-mobile-padding {
                        padding: 32px 24px !important;
                    }
                }
            </style>`
}
const socialFootersHTML = (props: FootersProps) => {
    return `<td style="padding: 32px 56px; background-color: #EFEFEE; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;" class="socialsFooter-mobile-padding">
                <table align="center" border="0" cellpadding="0" cellspacing="0" style="width: 100%;">
                    <tr>
                        <td style="padding-bottom: 16px;">
                            <table align="center" border="0" cellpadding="0" cellspacing="0" style="margin: 0 auto;">
                                <tr>
                                    <td style="padding-right: 8px;">
                                        <a href="https://twitter.com/copaairlines" style="display: block; height: 32px;">
                                            <img src="https://www.copaair.com/assets/twitter-x.png">
                                        </a>
                                    </td>
                                    <td style="padding-right: 8px;">
                                        <a href="https://www.facebook.com/copaairlines" style="display: block; height: 32px;">
                                            <img src="https://www.copaair.com/assets/facebook.png">
                                        </a>
                                    </td>
                                    <td style="padding-right: 8px;">
                                        <a href="https://www.instagram.com/copaairlines" style="display: block; height: 32px;">
                                            <img src="https://www.copaair.com/assets/instagram.png">
                                        </a>
                                    </td>
                                    <td style="padding-right: 8px;">
                                        <a href="https://www.youtube.com/copaairlines" style="display: block; height: 32px;"> 
                                            <img src="https://www.copaair.com/assets/youtube.png"> 
                                        </a>
                                    </td>
                                    <td style="padding-right: 8px;">
                                        <a href="https://www.tiktok.com/@copaairlines" style="display: block; height: 32px;"> 
                                            <img src="https://www.copaair.com/assets/tiktok.png">
                                        </a>
                                    </td>
                                    <td style="padding-right: 8px;">
                                        <a href="https://linkedin.com/company/copa-airlines" style="display: block; height: 32px;">
                                            <img src="https://www.copaair.com/assets/linkedin.png">
                                        </a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                    <td align="center" style="font-size: 12px; font-style: normal; font-weight: 400; line-height: 16px; color: #666666; padding-bottom: 8px;">
                        ${props.text}
                    </td>
                    </tr>
                    <tr>
                    <td align="center" style="font-size: 12px; font-style: normal; font-weight: 400; line-height: 16px; color: #666666; padding-bottom: 16px;">
                        ${props.secondText}
                        <a style="color: #666666; font-weight: 600; text-decoration: underline !important;" 
                        href="${props.firstLink}" target="_blank">
                            <span style=" white-space: nowrap;">
                                ${props.linkText}
                            </span>
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

export {socialFootersCSS, socialFootersHTML}