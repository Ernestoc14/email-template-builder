import { TitleBoxsProps } from "../types";

const titleBoxTitleCSS = () => {
    return `<style type="text/css">
                @media all and (max-width:719px) {
                    .title-titlebox-mobile {
                        font-size: 20px !important;
                        line-height: 32px !important;
                    }
                }
            </style>`
}

const titleBoxTitleHTML = (props: TitleBoxsProps) => {
    return `<table border="0" cellpadding="0" cellspacing="0" style="width: 100%; color: #FFFFFF;">
                <tr>
                    <td style="word-break: break-word; height: 60px;">
                        <p class="title-titlebox-mobile" style="font-family: Gilroy, Helvetica, Arial, sans-serif; font-weight: 700; font-size: 32px; line-height: 40px; margin: 0;">
                            ${props.title}
                        </p>
                    </td>
                </tr>
            </table>`
}

export { titleBoxTitleHTML, titleBoxTitleCSS }