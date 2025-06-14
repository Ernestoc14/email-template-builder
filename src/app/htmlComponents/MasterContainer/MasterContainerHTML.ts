import { MasterContainerHTMLProps } from "./types"

// const markupLanguage = () => {
//     return `<script type="application/ld+json">
//         {
//             "@context": "http://schema.org",
//             "@type": "FlightReservation",
//             "reservationNumber": "{{RXJ34P}}",
//             "reservationStatus": "http://schema.org/Confirmed",
//             "reservationFor": {
//                 "@type": "Flight",
//                 "flightNumber": "{{CM123}}",
//                 "airline": {
//                     "@type": "Airline",
//                     "name": "Copa Airlines",
//                     "iataCode": "CM"
//                 },
//                 "departureAirport": {
//                     "@type": "Airport",
//                     "name": "{{San Francisco Airport}}",
//                     "iataCode": "{{SFO}}"
//                 },
//                 "departureTime": "{{2027-03-04T20:15:00-08:00}}",
//                 "arrivalAirport": {
//                     "@type": "Airport",
//                     "name": "{{John F. Kennedy International Airport}}",
//                     "iataCode": "{{JFK}}"
//                 },
//                 "arrivalTime": "{{2027-03-05T06:30:00-05:00}}"
//             }
//         }
//         </script>
//         <script type="application/adaptivecard+json">
//         {
//             "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
//             "type": "AdaptiveCard",
//             "version": "1.3",
//             "body": [
//                 {
//                     "type": "TextBlock",
//                     "text": "Seat Update for Your Upcoming Flight",
//                     "weight": "bolder",
//                     "size": "medium"
//                 },
//                 {
//                     "type": "TextBlock",
//                     "text": "Flight: {{CM123}}",
//                     "spacing": "none"
//                 },
//                 {
//                     "type": "TextBlock",
//                     "text": "Departure: {{2024-08-02 11:00 AM}}",
//                     "spacing": "none"
//                 },
//                 {
//                     "type": "TextBlock",
//                     "text": "Arrival: {{2024-08-02 03:00 PM}}",
//                     "spacing": "none"
//                 }
//             ]
//         }
//     </script>`
// }

const padding = (isFullWidth: boolean) => {
    return isFullWidth ? "padding: 0 !important;" : "padding: 32px 72px !important;"
}

const mobilePadding = (isFullWidth: boolean) => {
    return isFullWidth ? "padding: 0 !important;" : "padding: 32px 16px !important;"
}

const masterContainerHTML = (props: MasterContainerHTMLProps) => {
    return `<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
    xmlns:o="urn:schemas-microsoft-com:office:office">
<head></head>
<head>
    <title></title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="format-detection" content="telephone=no, date=no, address=no, email=no, url=no">
    <meta name="x-apple-disable-message-reformatting">
    <!--[if mso]>
        <xml>
        <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
        </xml>
    <![endif]-->

    <style type="text/css">
        @font-face {
            font-family: SuisseIntl;
            font-style: normal;
            font-display: swap;
            font-weight: 300;
            src: local('SuisseIntlLight'), local('SuisseIntl-Light'), url(https://www.copaair.com/webassets/fonts/suisse/SuisseIntl-Light-WebS.woff) format('woff'), url(https://www.copaair.com/webassets/fonts/suisse/SuisseIntl-Light-WebS.woff2) format('woff2');
        }

        @font-face {
            font-family: SuisseIntl;
            font-style: normal;
            font-display: swap;
            font-weight: 400;
            src: local('SuisseIntlRegular'), local('SuisseIntl-Regular'), url(https://www.copaair.com/webassets/fonts/suisse/SuisseIntl-Regular-WebS.woff) format('woff'), url(https://www.copaair.com/webassets/fonts/suisse/SuisseIntl-Regular-WebS.woff2) format('woff2');
        }

        @font-face {
            font-family: SuisseIntl;
            font-style: normal;
            font-display: swap;
            font-weight: 600;
            src: local('SuisseIntlMedium'), local('SuisseIntl-Medium'), url(https://www.copaair.com/webassets/fonts/suisse/SuisseIntl-Medium-WebS.woff) format('woff'), url(https://www.copaair.com/webassets/fonts/suisse/SuisseIntl-Medium-WebS.woff2) format('woff2');
        }

        @font-face {
            font-family: SuisseIntl;
            font-style: normal;
            font-display: swap;
            font-weight: 700;
            src: local('SuisseIntlSemiBold'), local('SuisseIntl-SemiBold'), url(https://www.copaair.com/webassets/fonts/suisse/SuisseIntl-SemiBold-WebS.woff) format('woff'), url(https://www.copaair.com/webassets/fonts/suisse/SuisseIntl-SemiBold-WebS.woff2) format('woff2');
        }

        @font-face {
            font-family: Gilroy;
            font-style: normal;
            font-display: swap;
            font-weight: 400;
            src: local('GilroyRegular'), local('Gilroy-Regular'), url(https://www.copaair.com/webassets/fonts/gilroy/gilroy-regular-webfont.woff) format('woff'), url(https://www.copaair.com/webassets/fonts/gilroy/gilroy-regular-webfont.woff2) format('woff2');
        }

        @font-face {
            font-family: Gilroy;
            font-style: normal;
            font-display: swap;
            font-weight: 700;
            src: local('GilroyBold'), local('Gilroy-Bold'), url(https://www.copaair.com/webassets/fonts/gilroy/gilroy-bold-webfont.woff) format('woff'), url(https://www.copaair.com/webassets/fonts/gilroy/gilroy-bold-webfont.woff2) format('woff2');
        }

        body {
            background: #F5F5F5;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }

        *[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: none !important;
            font-size: inherit !important;
            font-family: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
        }

        table,
        td {
            border-collapse: collapse;
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }
    </style>

    <!-- Media Queries -->
    <style type="text/css">
        @media all and (max-width:719px) {
            .mobile-block {
                display: block !important;
            }

            .header-logo-padding{
                padding: 32px 16px 0 !important;
            }

            .card-logo {
                margin-right: 0 !important;
            }

            .mobile-padding {
                ${mobilePadding(props.isFullWidth)}
            }
        }
    </style>

    <!--[if mso]>
            <style type="text/css">
                .email-wrapper{
                    width: 800px
            }

            body, table, td, p, div, a, span {
                font-family: Arial, sans-serif !important;
            }
            </style>
        <![endif]-->

        ${props.css}
    </head>

    <body style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;font-family: SuisseIntl,Helvetica, Arial, sans-serif;">
        <div>&nbsp;</div>
        <table class="email-wrapper" align="center" border="0" cellpadding="0" cellspacing="0" style="padding: 5px 0 0 0;max-width: 800px;">
            <tr>
                <td>
                    <!-- Start Header Wrapper Blue BG -->
                    <table border="0" cellpadding="0" cellspacing="0" style="background-color: #0032A0; border-top-left-radius: 8px; border-top-right-radius: 8px;width:100%;min-width:100%;">
                        <tr>
                            <td>
                                <!-- Start Header Logo -->
                                <table align="center" border="0" cellpadding="0" cellspacing="0" style="width:100%;min-width:100%;">
                                    <tr>
                                        <td class="header-logo-padding" style="padding: 32px 32px 0;">
                                            ${props.header}
                                        </td>
                                    </tr>
                                </table>
                                <!-- End Header Logo -->
                                <!-- Start Header Info -->
                                <table align="center" border="0" cellpadding="0" cellspacing="0" style="width:100%;min-width:100%;">
                                    <tr>
                                        <td class="mobile-padding" style="background-color: #0032A0; ${padding(props.isFullWidth)}">
                                            <!-- Start Replace Header Info Component -->
                                            <table align="center" border="0" cellpadding="0" cellspacing="0" style="width:100%;min-width:100%;">
                                                ${props.boxAzul}
                                            </table>
                                            <!-- End Replace Header Info Component -->
                                        </td>
                                    </tr>
                                </table>
                            <!-- End Header Info -->
                            </td>
                        </tr>
                    </table>
            <!-- End Wrapper Header Blue BG -->
            <!-- Start Body White BG -->
            <table align="center" border="0" cellpadding="0" cellspacing="0" style="width:100%;min-width:100%;">
                <tr>
                    <td style="padding: 32px 0px;background-color: #FFFFFF;">
                    <!-- Start Replace Body -->
                        <table align="center" border="0" cellpadding="0" cellspacing="0" style="width:100%;min-width:100%;">
                            ${props.body}
                        </table>
                    <!-- End Replace Body -->
                    </td>
                </tr>
            </table>
            <!-- End Body White BG  -->
            <!-- Start Footer -->
            <table align="center" border="0" cellpadding="0" cellspacing="0" style="width:100%;min-width:100%;">
                <tr>
                <!-- Start Replace Footer -->
                    ${props.footer}
                <!-- End Replace Footer -->
                </tr>
            </table>
            <!-- End Footer -->
        </td>
        </tr>
    </table>
    <div>&nbsp;</div>
    </body>
</html>`
}

export default masterContainerHTML