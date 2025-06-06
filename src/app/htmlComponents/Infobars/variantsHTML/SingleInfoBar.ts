import { InfobarsProps } from "../types"
const singleInfoBarCSS = () => {
    return `<style type="text/css">
                @media all and (max-width:360px) {
                    .xsmall-reorder {
                        display: block !important;
                        width: 241px !important;
                    }
                    .date-mobile-padding {
                        padding-bottom: 24px;
                    }
                }
                @media all and (max-width:500px) {
                    .two-first-fields {
                        display: block;
                        clear: both;
                    }
                    .code-cell {
                        clear: both;
                        text-align: left;
                        padding: 32px 0 0 0 !important;
                        min-width: 100% !important;
                    }
                }
                @media all and (max-width:719px) {
                    .destino-img-remove {
                        display: none;
                    }
                    .infobar-divider-remove {
                        display: none;
                    }
                    .reorder-mobile-table {
                        display: block !important;
                        width: 375px !important;
                    }
                    .reorder-mid {
                        display: block !important;
                    }
                    .destino-mobile-padding {
                        padding-bottom: 24px;
                    }
                    .mid-right-spacing {
                        padding-right: 56px;
                    }
                }
            </style>
            <style type="text/css">
                .title-info-flight {
                    font-weight: 400;
                    font-size: 14px;
                    color: #666666;
                    font-family: SuisseIntl, Helvetica, Arial, sans-serif;
                    margin: 0;
                    margin-bottom: 5px;
                }
                .subtitle-info-flight {
                    font-size: 20px;
                    font-weight: 700;
                    color: #333333;
                    font-family: Gilroy, Helvetica, Arial, sans-serif;
                    margin: 0;
                }
            </style>`
}

const singleInfoBarHTML = (props: InfobarsProps) => {
    return `<table border="0" cellpadding="0" cellspacing="0" style="width: 100%;" width="100%">
                <tr>
                    <td class="reorder-mid">
                        <table border="0" cellpadding="0" cellspacing="0" style="width: 100%;" width="100%">
                            <tr>
                                <td class="reorder-mobile-table xsmall-reorder">
                                    <table border="0" cellpadding="0" cellspacing="0" class="info-mobile-padding" style="width: 100%;" width="100%">
                                        <tr>
                                            <td style="padding-right: 16px; width: 56px" class="destino-img-remove">
                                            <!--[if mso]>
                                                <v:oval xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" style="display:inline-block;text-decoration:none;color:#333333;border-radius:50%;width:56px;height:56px" strokecolor="#ffffff" strokeweight="1pt">
                                                <v:fill color="#0032A0" />
                                                </v:oval>
                                            <![endif]-->
                                            <!--[if mso]>
                                                <v:rect stroked="f" filled="false" style="position:absolute; top:-3.1px; left:-8.3px; width:100%;">
                                            <![endif]-->
                                            <div class="no-border" style="border: 1px solid #ffffff;width: 52px;height: 52px;border-radius: 50%;padding: 1px;margin: 0;">
                                                <!--Change the "JFK" below with the IATA Code of the destination in uppercase-->
                                                <img src="${props.imageURL}" width="52" height="52" border="0" alt="City IMG" style="border:0;">
                                            </div>
                                            <!--[if mso]>
                                                </v:rect>
                                            <![endif]-->
                                            </td>
                                            <td class="destino-mobile-padding">
                                                <p style="margin: 0;font-family: SuisseIntl, Helvetica, Arial, sans-serif;font-size: 14px;font-style: normal;font-weight: 400;line-height: 20px;color: #ffffff;">
                                                    ${props.labelTextDestination}
                                                </p>
                                                <p style="margin: 0;font-family: Gilroy, Helvetica, Arial, sans-serif;font-size: 20px;font-style: normal;font-weight: 700;line-height: 32px;color: #ffffff;">
                                                    ${props.destination}
                                                </p>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                                <td class="infobar-divider-remove" style="padding: 0 32px; width: 1px;">
                                    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="width: 100%;" width="100%">
                                        <tr>
                                            <td style="border-right: 1px solid #CCCCCB;width: 1px;height:24px;">
                                            &nbsp;
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                    <td class="reorder-mobile-table">
                        <table border="0" cellpadding="0" cellspacing="0" style="width: 100%;" width="100%">
                            <tr>
                                <td class="xsmall-reorder mid-right-spacing date-mobile-padding">
                                    <p style="margin: 0;font-family: SuisseIntl, Helvetica, Arial, sans-serif;font-size: 14px;font-style: normal;font-weight: 400;line-height: 20px;color: #ffffff;">
                                        ${props.labelTextDate}
                                    </p>
                                    <p style="margin: 0;font-family: Gilroy, Helvetica, Arial, sans-serif;font-size: 18px;font-style: normal;font-weight: 700;line-height: 24px;color: #ffffff;white-space:nowrap">
                                        ${props.date}
                                    </p>
                                </td>
                                <td style="padding: 0 32px; width: 1px;" class="infobar-divider-remove">
                                    <table border="0" cellpadding="0" cellspacing="0" style="width: 100%;" width="100%">
                                        <tr>
                                            <td style="border-right: 1px solid #CCCCCB;width:1px; height:24px;">
                                                &nbsp;
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                                <td class="xsmall-reorder">
                                    <p style="margin: 0;font-family: SuisseIntl, Helvetica, Arial, sans-serif;font-size: 14px;font-style: normal;font-weight: 400;line-height: 20px;color: #ffffff;">
                                        ${props.labelTextReservationCode}
                                    </p>
                                    <p style="margin: 0;font-family: Gilroy, Helvetica, Arial, sans-serif;font-size: 18px;font-style: normal;font-weight: 700;line-height: 24px;color: #ffffff;">
                                        ${props.reservationCode}
                                    </p>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>`
}

export {singleInfoBarCSS, singleInfoBarHTML}