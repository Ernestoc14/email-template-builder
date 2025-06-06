import { AlertsProps } from "../../types"

const errorInlineAlertHTML = (props: AlertsProps) => {
    return `<table border="0" cellpadding="0" cellspacing="0" style=" width:100%; border-collapse: separate;">
                <tr>
                    <td style="mso-border-alt: none; padding: 8px 16px; background-color:#D52525; border-radius: 4px">
                        <table align="center" border="0" cellpadding="0" cellspacing="0" style="vertical-align: middle;" width="100%">
                            <tr>
                                <!--[if mso]>
                                <td>
                                    <table border="0" cellpadding="0" cellspacing="0" style="vertical-align: middle;" width="100%">
                                        <tr>
                                            <![endif]-->
                                            <td style="padding-right: 8px;vertical-align:top;width:20px;max-width:20px">
                                                <img src="https://www.copaair.com/assets/info-circle-white.png" style="width: 20px; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; vertical-align: top;"  width="20" alt="information">
                                            </td>
                                            <td style="font-family: SuisseIntl, Arial, Helvetica, sans-serif; font-weight: 600; color: #ffffff; font-size: 14px; line-height: 20px;text-align: left">
                                                ${props.alertText}
                                            </td>
                                        <!--[if mso]>
                                        </tr>
                                    </table>
                                </td>
                                <![endif]-->
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>`
}

export {errorInlineAlertHTML}