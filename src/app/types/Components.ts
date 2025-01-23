import Headers from "../htmlComponents/Headers/Headers";
import Alerts from "../htmlComponents/Alerts/Alerts";
import Footers from "../htmlComponents/Footers/Footers";

export const ComponentsList = [
  "Headers",
  "Title Box",
  "Section Container",
  "Buttons",
  "Infobar",
  "Alerts",
  "Banners",
  "Itinerary Cards",
  "Pax Cards",
  "Footer",
];

const ComponentVariants = {
  Headers: [
    Headers({ variant: "copaSingleLogo", copaLogoURL: "url/to/logo1.png" }),
    Headers({ variant: "reservationCode", copaLogoURL: "url/to/logo2.png", reservationCode: "ABC123" }),
    Headers({ variant: "copaBothLogo", copaLogoURL: "url/to/logo3.png", aditionalLogoURL: "url/to/logo4.png" }),
  ],
  Alerts: [
    Alerts({ variants: "inline", type: "error", iconURL: "url/to/icon.png", alertText: "Error Alert" }),
    Alerts({ variants: "content", type: "error", iconURL: "url/to/icon.png", alertText: "Error Alert" }),
  ],
  Footers: [
    Footers({ variant: "social" }),
    Footers({ variant: "traditional"}),
  ],
} as const;

// components.ts (o el archivo donde tienes ComponentVariants)
// const ComponentVariants = {
//   Headers: [
//     { variant: "copaSingleLogo", copaLogoURL: "url/to/logo1.png" },
//     { variant: "reservationCode", copaLogoURL: "url/to/logo2.png", reservationCode: "ABC123" },
//     { variant: "copaBothLogo", copaLogoURL: "url/to/logo3.png", aditionalLogoURL: "url/to/logo4.png" },
//   ],
//   Alerts: [
//     { variant: "inline", type: "error", iconURL: "url/to/icon.png", alertText: "Error Alert" },
//     { variant: "content", type: "error", iconURL: "url/to/icon.png", alertText: "Error Alert" },
//   ],
//   Footers: [
//     { variant: "social" },
//     { variant: "traditional" },
//   ],
// } as const;

export default ComponentVariants;
