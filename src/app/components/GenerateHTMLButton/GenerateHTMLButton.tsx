import { Button } from "@mui/material";
import { useLanguage } from "@/app/context/LanguageContext";
import { useState } from "react";

export interface GenerateHTMLButtonProps {
  newTemplateName: string;
}

const GenerateHTMLButton = ({ newTemplateName }: GenerateHTMLButtonProps) => {
  const { language, setLanguage } = useLanguage();
  const [isGenerating, setIsGenerating] = useState(false);
  const allLanguages: ("ES" | "EN" | "PT" | "FR")[] = ["ES", "EN", "PT", "FR"];

  const waitForDOMUpdate = (ms: number = 300) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const generateMultipleHTML = async () => {
    if (isGenerating) return;

    setIsGenerating(true);
    const originalLanguage = language;

    for (const lang of allLanguages) {
      await setLanguage(lang);
      await waitForDOMUpdate(300);

      const HTMLGenerado = document.getElementById("master-container")?.innerHTML;

      const HTMLMasterContainer = `
    <!DOCTYPE html>
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
      xmlns:o="urn:schemas-microsoft-com:office:office">
    <head></head>
    <head>
      <title>${newTemplateName}</title>
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
          // Header Section Mobile Classes
          .header-section-mobile-padding {
            padding: 24px 16px 0 !important;
          }
          // Blue Box Section Mobile Classes
          .blue-box-mobile-padding {
            padding: 32px 16px !important;
          }
          // Body Section Mobile Classes
          .body-section-mobile-padding {
            padding: 32px 16px !important;
          }
          // Footer Section Mobile Classes 
          .footer-section-mobile-padding {
            padding: 32px 16px !important;
          }
  
        }
      </style>
      <!-- CSS General Classes -->
      <style type="text/css">
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
    </head>
    
    <body
      style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;font-family: SuisseIntl,Helvetica, Arial, sans-serif;">
        <!-- Lenguaje de marcado (markup) de Gmail -->
        <!-- <script type="application/ld+json">
        {
          "@context": "http://schema.org",
          "@type": "FlightReservation",
          "reservationNumber": "{{RXJ34P}}",
          "reservationStatus": "http://schema.org/Confirmed",
          "reservationFor": {
            "@type": "Flight",
            "flightNumber": "{{CM123}}",
            "airline": {
              "@type": "Airline",
              "name": "Copa Airlines",
              "iataCode": "CM"
            },
            "departureAirport": {
              "@type": "Airport",
              "name": "{{San Francisco Airport}}",
              "iataCode": "{{SFO}}"
            },
            "departureTime": "{{2027-03-04T20:15:00-08:00}}",
            "arrivalAirport": {
              "@type": "Airport",
              "name": "{{John F. Kennedy International Airport}}",
              "iataCode": "{{JFK}}"
            },
            "arrivalTime": "{{2027-03-05T06:30:00-05:00}}"
          }
        }
        </script> -->
      <!-- Tarjeta adaptable de Outlook -->
      <!-- <script type="application/adaptivecard+json">
        {
          "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
          "type": "AdaptiveCard",
          "version": "1.3",
          "body": [
            {
              "type": "TextBlock",
              "text": "Seat Update for Your Upcoming Flight",
              "weight": "bolder",
              "size": "medium"
            },
            {
              "type": "TextBlock",
              "text": "Flight: {{CM123}}",
              "spacing": "none"
            },
            {
              "type": "TextBlock",
              "text": "Departure: {{2024-08-02 11:00 AM}}",
              "spacing": "none"
            },
            {
              "type": "TextBlock",
              "text": "Arrival: {{2024-08-02 03:00 PM}}",
              "spacing": "none"
            }
          ]
        }
      </script> -->
      ${HTMLGenerado}
    </body>
    </html>
      `
      const parser = new DOMParser();
      const doc = parser.parseFromString(HTMLMasterContainer, 'text/html');

        // Remover divs con class que empieza con "Mui"
      // doc.querySelectorAll('div[class^="Mui"]').forEach(el => el.remove());

// Remover svgs con class que empieza con "MuiSvg"
doc.querySelectorAll('svg[class^="MuiSvg"]').forEach(el => el.remove());

// Obtener HTML final limpio
const cleanedHTML = doc.documentElement.outerHTML;

      const blob = new Blob([cleanedHTML], { type: 'text/html' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${newTemplateName}-${lang}.html`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }

    await setLanguage(originalLanguage);
    setIsGenerating(false);
  };

  return (
    <Button
      variant="contained"
      color="success"
      sx={{ width: "100%" }}
      onClick={generateMultipleHTML}
    >
      Generar HTML
    </Button>
  );
};

export default GenerateHTMLButton;
