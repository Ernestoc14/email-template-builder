import Headers from "../htmlComponents/Headers/Headers";
import Alerts from "../htmlComponents/Alerts/Alerts";
import Footers from "../htmlComponents/Footers/Footers";
import Banners from "../htmlComponents/Banners/Banners";
import Buttons from "../htmlComponents/Buttons/Buttons";
import Infobars from "../htmlComponents/Infobar/Infobars";
import ItineraryCards from "../htmlComponents/Itinerary-card/ItineraryCards";
import TitleBoxs from "../htmlComponents/Title-box/TItleBoxs";
import PaxCards from "../htmlComponents/Pax-card/PaxCards";
import SectionContainers from "../htmlComponents/Section-container/SectionContainers";

export const ComponentsList = [
  "Headers",
  "Title Boxs",
  "Section Containers",
  "Buttons",
  "Infobars",
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
    Buttons({ variant: "light", label: "Light Button", urlLink: "https://mytrips.copaair.com" }),
    Buttons({ variant: "link", label: "Link Button", urlLink: "https://mytrips.copaair.com" }),
    Buttons({ variant: "main", label: "Main Button", urlLink: "https://mytrips.copaair.com" }),
    Buttons({ variant: "outline", label: "Outline Button", urlLink: "https://mytrips.copaair.com" }),
  ],
  Headers: [
    Headers({ variant: "copaSingleLogo", copaLogoURL: "url/to/logo1.png" }),
    Headers({ variant: "reservationCode", copaLogoURL: "url/to/logo2.png", reservationCode: "ABC123" }),
    Headers({ variant: "copaBothLogo", copaLogoURL: "url/to/logo3.png", aditionalLogoURL: "url/to/logo4.png" }),
  ],
  Infobars: [
    Infobars({ variant: "single", imageURL: "https://www.copaair.com/webassets/images/destinos/circulados/JFK.png", destination: "PTY", date: "23 Jan 2025", reservationCode: "ABC123" }),
  ],
  ItineraryCards: [
    ItineraryCards({ variant: "adelantado", date: "25 Jan 2025", aircraft: "Boeing 737-800", pillsFlightStatus: "On Time", departureCrossedOutTime: "10:00", departureTime: "10:30", flightDuration: "2h 30m", arrivalTime: "13:00", arrivalCrossedOutTime: "12:30", origin: "PTY", destination: "JFK", originTerminal: "T1", originGate: "A1", destinationTerminal: "T4", destinationGate: "B2" }),
    ItineraryCards({ variant: "atiempo", date: "25 Jan 2025", aircraft: "Boeing 737-800", pillsFlightStatus: "On Time", departureTime: "10:30", flightDuration: "2h 30m", arrivalTime: "13:00", origin: "PTY", destination: "JFK", originTerminal: "T1", originGate: "A1", destinationTerminal: "T4", destinationGate: "B2" }),
    ItineraryCards({ variant: "cambios", date: "25 Jan 2025", aircraft: "Boeing 737-800", pillsFlightStatus: "On Time", departureTime: "10:30", flightDuration: "2h 30m", arrivalTime: "13:00", origin: "PTY", destination: "JFK", originTerminal: "T1", originGate: "A1", destinationTerminal: "T4", destinationGate: "B2" }),
    ItineraryCards({ variant: "cancel", date: "25 Jan 2025", aircraft: "Boeing 737-800", pillsFlightStatus: "On Time", departureTime: "10:30", flightDuration: "2h 30m", arrivalTime: "13:00", origin: "PTY", destination: "JFK", originTerminal: "T1", originGate: "A1", destinationTerminal: "T4", destinationGate: "B2" }),
    ItineraryCards({ variant: "demorado", date: "25 Jan 2025", aircraft: "Boeing 737-800", pillsFlightStatus: "On Time", departureCrossedOutTime: "10:00", departureTime: "10:30", flightDuration: "2h 30m", arrivalTime: "13:00", arrivalCrossedOutTime: "12:30", origin: "PTY", destination: "JFK", originTerminal: "T1", originGate: "A1", destinationTerminal: "T4", destinationGate: "B2" }),
  ],
  PaxCards: [
    PaxCards({ variant: "simple", paxName: "John Doe", lealtad: "Copa PreferMember", seats: "1A", status: "Check In Completed" }),
    PaxCards({ variant: "wci" , paxName: "Katia Fernandez", lealtad: "Copa Silver Member", seats: "90C, 1A", status: "Check In Pendiente" }),
  ],
  SectionContainers: [
    SectionContainers({ variant: "centerSection", iconURL:"https://www.copaair.com/webassets/images/notifications/Equipaje-circle.png", title: "Hacia Panama (PTY)", infoLeft: "Cabina Economica", infoRight: "Boeing 737-800" }),
    SectionContainers({ variant: "centerTitleSection", iconURL:"https://www.copaair.com/webassets/images/notifications/Equipaje-circle.png", title: "Hacia Panama (PTY)", infoLeft: "Cabina Economica", infoRight: "Boeing 737-800" }),
    SectionContainers({ variant: "contentSection" }),
    SectionContainers({ variant: "leftSection", iconURL:"https://www.copaair.com/webassets/images/notifications/Equipaje-circle.png", title: "Hacia Panama (PTY)", infoLeft: "Cabina Economica", infoRight: "Boeing 737-800" }),
    SectionContainers({ variant: "leftTitleSection", iconURL:"https://www.copaair.com/webassets/images/notifications/Equipaje-circle.png", title: "Hacia Panama (PTY)", infoLeft: "Cabina Economica", infoRight: "Boeing 737-800" }),
    SectionContainers({ variant: "section", iconURL:"https://www.copaair.com/webassets/images/notifications/Equipaje-circle.png", title: "Hacia Panama (PTY)", infoLeft: "Cabina Economica", infoRight: "Boeing 737-800" }),
  ],
  TitleBoxs: [
    TitleBoxs({ variant: "titleBox", title: "Disfruta nuestra experiencia abordo Kath", subtitle: "Conoce la comida y opciones de entretenimiento que te esperan durante tu viaje" }),
  ],
  Footers: [
    Footers({ variant: "social" }),
    Footers({ variant: "traditional"}),
  ],
  "":[],
} as const;

export default ComponentVariants;
