import { AlertsProps } from "../../types"

const errorContentAlertCSS = () => {
    return `<!--[if mso]>
                <style type="text/css">
                    .remove-styles-mso {
                        padding: 0 !important;
                    }
                    .mso-padding {
                        padding-left: 16px !important;
                    }
                </style>
            <![endif]-->`
}

const errorContentALertHTML = (props: AlertsProps) => {
    return `<table border="0" cellpadding="0" cellspacing="0" style="width:100%; border-collapse: separate;">
                <tr>
                    <td class="remove-styles-mso" style="mso-border-alt: none; padding: 16px; background-color:#FFEFEF; border-radius: 4px; border: 1px solid #D52525;">
                        <table border="0" cellpadding="0" cellspacing="0" style="vertical-align: middle;" width="100%">
                            <tr>
                            <!--[if mso]>
                                <td style="padding: 16px 0px;">
                                    <table border="0" cellpadding="0" cellspacing="0" style="vertical-align: middle;" width="100%">
                                        <tr>
                                            <![endif]-->
                                                <td style="padding-right: 8px;vertical-align:top;width:20px;max-width:20px" class="mso-padding">
                                                    <img src="https://www.copaair.com/webassets/icons/alerts/alert_incontent_high.png"
                                                    style="width: 20px; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; vertical-align: top;"
                                                    width="20" alt="information">
                                                </td>
                                                <td style="font-weight: 400; color: #333333; font-size: 14px; line-height: 20px;text-align: left">
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

export {errorContentAlertCSS, errorContentALertHTML}