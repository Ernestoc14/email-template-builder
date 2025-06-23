import { ItineraryCardsProps } from "../types"

const getItineraryCardLayoverCSS = () => {
    return `<style type="text/css">
        @media all and (max-width:719px) {
        .itinerary-mobile-padding {
            padding: 16px !important;
        }
    }
    </style>
    <!--[if mso]>
    <style type="text/css">
        body, table, td, p, div, a, span {
            font-family: Arial, sans-serif !important;
        }
    </style>
    <![endif]-->`
}

const getItineraryCardLayoverHTML = (props: ItineraryCardsProps) => {
    return `<table cellspacing="0" cellpadding="0" width="100%" style="width:100%;min-width:100%;">
                <tr>
                    <td>
                        <table cellpadding="0" cellspacing="0" style="width:100%;min-width:100%;border: 1px solid #DBDAD8; border-radius: 12px;border-collapse:separate; background-color: #FFFFFF;">
                            <tr>
                                <td class="itinerary-mobile-padding" style="padding: 24px; border-collapse: collapse;">
                                    <table cellpadding="0" cellspacing="0" style="width:100%;min-width:100%;">
                                        <tr>
                                            <td style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-size: 12px;line-height: 16px;font-weight:600; color: #333333;">
                                                ${props.date} · ${props.aircraft}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="2" style="padding-top: 16px;">
                                                <table cellpadding="0" cellspacing="0" style="width:100%;min-width:100%;">
                                                    <tr>
                                                        <td style="padding-right: 8px; white-space: nowrap;">
                                                            <p style="margin: 0; color:#333333;font-family:Gilroy, Helvetica, Arial, sans-serif;">
                                                                <span style="font-size: 20px; line-height: 32px; font-weight: 700; color:#333333">
                                                                    ${props.departureTime}
                                                                </span>
                                                            </p>
                                                        </td>
                                                        <td style="width:48%">
                                                            <p style="border-top: solid 1px #999999;line-height: 0;margin: 0px auto;width: 100%;">
                                                                &nbsp;
                                                            </p>
                                                        </td>
                                                        <td style="color: #666666; font-size: 12px; font-weight: 400; line-height: 16px; vertical-align: middle; text-align: center;white-space: nowrap;padding: 0 8px;">
                                                            ${props.flightDuration}
                                                        </td>
                                                        <td style="width:48%">
                                                            <p style="border-top: solid 1px #999999;line-height: 0;margin: 0px auto;width: 100%;">
                                                                &nbsp;
                                                            </p>
                                                        </td>
                                                        <td align="right" style="padding-left: 8px; text-align: right;white-space: nowrap;">
                                                            <p style="margin: 0; color: #333333;font-family:Gilroy, Helvetica, Arial, sans-serif;">
                                                                <span style="font-size: 20px; line-height: 32px; font-weight: 700; color:#333333">
                                                                    ${props.arrivalTime}
                                                                </span>
                                                            </p>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="2" border="1">
                                                <table cellpadding="0" cellspacing="0" style="width:100%;min-width:100%;">
                                                    <tr>
                                                        <td style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-size: 14px;padding-right: 12px;color: #333333;width: 50%;line-height: 20px;vertical-align: top;font-weight: 400;">
                                                            ${props.origin}
                                                        </td>
                                                        <td align="right" style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-size: 14px;padding-left: 12px;text-align: right;color: #333333;width: 50%;line-height: 20px;vertical-align: top;font-weight: 400;">
                                                            ${props.destination}
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="2" border="1" style="padding-top: 16px;">
                                                <table cellpadding="0" cellspacing="0" style="width:100%;min-width:100%;">
                                                    <tr>
                                                        <td align="right" style="white-space:nowrap;font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-size: 12px;padding-left: 12px; text-align: right; color: #666666;width: 50%;line-height: 16px;vertical-align: top;font-weight: 400;">
                                                            ${props.labelTextDestinationTerminal}: ${props.destinationTerminal}
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        <!-- Copiar este TR para mostrar escala cuantas veces sea necesario -->
                            <tr>
                                <td style="color: #666666; font-size: 12px; font-weight: 400; line-height: 16px; vertical-align: middle; text-align: center;white-space: nowrap;padding: 0 8px;">
                                    <table width="100%">
                                        <tr>
                                            <td class="width-mso" style="width:48%">
                                                <p style="border-top: dashed 1px #CCCCCB;line-height: 0;margin: 0px auto;width: 100%;">
                                                    &nbsp;
                                                </p>
                                            </td>
                                            <td style="padding: 0 8px; white-space: nowrap;">
                                                <p style="white-space: nowrap; margin: 0; font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-size: 12px;color: #333333;text-align: center;">
                                                    ${props.layoverText}
                                                </p>
                                            </td>
                                            <td class="width-mso" style="width:48%">
                                                <p style="border-top: dashed 1px #CCCCCB;line-height: 0;margin: 0px auto;width: 100%;">
                                                    &nbsp;
                                                </p>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td class="itinerary-mobile-padding" style="padding: 24px; border-collapse: collapse;">
                                    <table cellpadding="0" cellspacing="0" style="width:100%;min-width:100%;">
                                        <tr>
                                            <td style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-size: 12px;line-height: 16px;font-weight:600; color: #333333;">
                                                ${props.dateSecondFlight} · ${props.aircraftSecondFlight}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="2" style="padding-top: 16px;">
                                                <table cellpadding="0" cellspacing="0" style="width:100%;min-width:100%;">
                                                    <tr>
                                                        <td style="padding-right: 8px; white-space: nowrap;">
                                                            <p style="margin: 0; color:#333333;font-family:Gilroy, Helvetica, Arial, sans-serif;">
                                                                <span style="font-size: 20px; line-height: 32px; font-weight: 700; color:#333333">
                                                                    ${props.departureTimeSecondFlight}
                                                                </span>
                                                            </p>
                                                        </td>
                                                        <td style="width:48%">
                                                            <p style="border-top: solid 1px #999999;line-height: 0;margin: 0px auto;width: 100%;">
                                                                &nbsp;
                                                            </p>
                                                        </td>
                                                        <td style="color: #666666; font-size: 12px; font-weight: 400; line-height: 16px; vertical-align: middle; text-align: center;white-space: nowrap;padding: 0 8px;">
                                                            ${props.flightDurationSecondFlight}
                                                        </td>
                                                        <td style="width:48%">
                                                            <p style="border-top: solid 1px #999999;line-height: 0;margin: 0px auto;width: 100%;">
                                                                &nbsp;
                                                            </p>
                                                        </td>
                                                        <td align="right" style="padding-left: 8px; text-align: right;white-space: nowrap;">
                                                            <p style="margin: 0; color: #333333;font-family:Gilroy, Helvetica, Arial, sans-serif;">
                                                                <span style="font-size: 20px; line-height: 32px; font-weight: 700; color:#333333">
                                                                    ${props.arrivalTimeSecondFlight}
                                                                </span>
                                                            </p>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="2" border="1">
                                                <table cellpadding="0" cellspacing="0" style="width:100%;min-width:100%;">
                                                    <tr>
                                                        <td style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-size: 14px;padding-right: 12px;color: #333333;width: 50%;line-height: 20px;vertical-align: top;font-weight: 400;">
                                                            ${props.originSecondFlight}
                                                        </td>
                                                        <td align="right" style="font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-size: 14px;padding-left: 12px;text-align: right;color: #333333;width: 50%;line-height: 20px;vertical-align: top;font-weight: 400;">
                                                            ${props.destinationSecondFlight}
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="2" border="1" style="padding-top: 16px;">
                                                <table cellpadding="0" cellspacing="0" style="width:100%;min-width:100%;">
                                                    <tr>
                                                        <td align="right" style="white-space:nowrap;font-family: SuisseIntl,Helvetica, Arial, sans-serif; font-size: 12px;padding-left: 12px; text-align: right; color: #666666;width: 50%;line-height: 16px;vertical-align: top;font-weight: 400;">
                                                            ${props.labelTextDestinationGateSecondFlight}: ${props.destinationGateSecondFlight}
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>`
}

export {getItineraryCardLayoverCSS, getItineraryCardLayoverHTML};