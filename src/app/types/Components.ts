import Headers from "../htmlComponents/Headers/Headers";
import Alerts from "../htmlComponents/Alerts/Alerts";
import Footers from "../htmlComponents/Footers/Footers";
import Banners from "../htmlComponents/Banners/Banners";
import Buttons from "../htmlComponents/Buttons/Buttons";

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
  "Footers",
];

const ComponentVariants = {
  Alerts: [
    Alerts({ variant: "content", type: "error", iconURL: "url/to/icon.png", alertText: "Error Alert" }),
    Alerts({ variant: "content", type: "info", iconURL: "url/to/icon.png", alertText: "Warning Alert" }),
    Alerts({ variant: "content", type: "invert", iconURL: "url/to/icon.png", alertText: "Error Alert" }),
    Alerts({ variant: "content", type: "warning", iconURL: "url/to/icon.png", alertText: "Warning Alert" }),
    Alerts({ variant: "inline", type: "changes", iconURL: "url/to/icon.png", alertText: "Error Alert" }),
    Alerts({ variant: "inline", type: "error", iconURL: "url/to/icon.png", alertText: "Warning Alert" }),
    Alerts({ variant: "inline", type: "inverted", iconURL: "url/to/icon.png", alertText: "Error Alert" }),
    Alerts({ variant: "inline", type: "main", iconURL: "url/to/icon.png", alertText: "Warning Alert" }),
    Alerts({ variant: "inline", type: "success", iconURL: "url/to/icon.png", alertText: "Error Alert" }),
    Alerts({ variant: "inline", type: "transparent", iconURL: "url/to/icon.png", alertText: "Warning Alert" }),
    Alerts({ variant: "inline", type: "warning", iconURL: "url/to/icon.png", alertText: "Warning Alert" }),
  ],
  Banners: [
    Banners({ variant: "image"}),
  ],
  Buttons: [
    Buttons({ variant: "light"})
  ],
  Headers: [
    Headers({ variant: "copaSingleLogo", copaLogoURL: "url/to/logo1.png" }),
    Headers({ variant: "reservationCode", copaLogoURL: "url/to/logo2.png", reservationCode: "ABC123" }),
    Headers({ variant: "copaBothLogo", copaLogoURL: "url/to/logo3.png", aditionalLogoURL: "url/to/logo4.png" }),
  ],
  Footers: [
    Footers({ variant: "social" }),
    Footers({ variant: "traditional"}),
  ],
  "":[],
} as const;

export default ComponentVariants;
