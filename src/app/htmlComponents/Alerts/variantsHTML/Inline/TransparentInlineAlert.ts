import { AlertsProps } from "../../types"

const transparentInlineAlertHTML = (props: AlertsProps) => {
    return `<table border="0" cellpadding="0" cellspacing="0" style=" width:100%;">
                <tr>
                    <td style="padding: 8px 16px 8px 0; background-color: transparent; border-radius: 4px">
                        <table border="0" cellpadding="0" cellspacing="0" style="vertical-align: middle;" width="100%">
                            <tr>
                                <td style="padding-right: 8px;vertical-align:top;width:20px;max-width:20px">
                                    <img src="https://www.copaair.com/assets/inner-alert-blue-icon.png"
                                    style="width: 20px; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; vertical-align: top;"
                                    width="20" alt="information">
                                </td>
                                <td style="font-family: SuisseIntl, Arial, Helvetica, sans-serif; font-weight: 600; color: #333333; font-size: 14px; line-height: 20px;text-align: left">
                                    ${props.alertText}
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>`
}

export {transparentInlineAlertHTML}