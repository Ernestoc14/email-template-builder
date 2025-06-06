import { ButtonsProps } from "../types"

const linkButtonHTML = (props: ButtonsProps) => {
    return `<table align="center" border="0" cellpadding="0" cellspacing="0" style="width: 100%; color: #ffffff;">
                <tr>
                    <td align="right" style="width: 50%;">
                        <a href="${props.urlLink}" target="_blank" style="border: none; display: inline-block;color: #0032a0;text-decoration: none; margin: 0;text-align: center; font-size: 14px;line-height: 20px;font-family: SuisseIntl, Helvetica, Arial, sans-serif;font-weight: 600;">
                            ${props.label}
                        </a>
                    </td>
                    <td style="width: 50%;">
                        <a href="${props.urlLink}" target="_blank" style="display: block; height: 24px">
                            <img src="https://www.copaair.com/assets/icon-keyboard-arrow.png" alt="arrow"/>
                        </a>
                    </td>
                </tr>
            </table>`
}

export {linkButtonHTML}