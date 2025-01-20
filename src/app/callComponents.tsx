const AlertHTML =
Alerts({
  variants: "inline",
  type: "warning",
  iconURL: "https://www.copaair.com/webassets/icons/alerts/alert_incontent_inverted.png",
  alertText: "This is an error alert",
}) || "<div>test</div>";
// Variants: "content" | "inline"
// typeContent: "error" | "info" | "invert" | "warning"
// typeInline: "changes" | "error" | "inverted" | "main" | "success" | "transparent" | "warning"

const ButtonHTML = 
Buttons({
  variant: "light",
  label: "La Va Ca LOLA",
  urlLink: "https://mytrips.copaair.com",
}) || "<div>NO VARIANT</div>";
// Variants: "light" | "link" | "main" | "outline"

const FooterHTML = 
Footers({
  variant: "traditional",
}) || "<div>NO VARIANT</div>";
// Variants: "social" | "traditional"

const HeaderHTML =
Headers({
  variant: "reservationCode",
  copaLogoURL: "https://www.copaair.com/webassets/images/copa-logo-white.png",
  reservationCode: "12319",
  // aditionalLogoURL: "https://www.copaair.com/assets/connectMilesLogo.png",
}) || "<div>NO VARIANT</div>"
// Variants: "copaBothLogo" | "reservationCode" | "copaSingleLogo"

const InfobarHTML = 
Infobars({
  variant: "single",
  imageURL: "https://www.copaair.com/webassets/images/destinos/circulados/JFK.png",
  destination: "New York",
  date: "June 2021",
  reservationCode: "12319",
})

const ItineraryCancelHTML = 
ItineraryCards({
  variant: "cancel",
  date: "06 Feb, 2025",
  aircraft: "CM 3030",
  pillsFlightStatus: "Cancelado",
  departureTime: "8:00pm",
  flightDuration: "9h 52m",
  arrivalTime: "06:00pm",
  origin: "New York City (NYC)",
  destination: "Panama City (PTY)",
  originTerminal: "01",
  originGate: "PM9",
  destinationTerminal: "33",
  destinationGate: "90P",
}) || "<div>NO VARIANT</div>"

const ItineraryAdelantadoHTML = 
ItineraryCards({
  variant: "adelantado",
  date: "06 Feb, 2025",
  aircraft: "CM 3030",
  pillsFlightStatus: "Adelantado",
  departureCrossedOutTime: "9:30pm",
  departureTime: "8:00pm",
  flightDuration: "9h 52m",
  arrivalTime: "06:00pm",
  arrivalCrossedOutTime: "3:00pm",
  origin: "New York City (NYC)",
  destination: "Panama City (PTY)",
  originTerminal: "01",
  originGate: "PM9",
  destinationTerminal: "33",
  destinationGate: "90P",
}) || "<div>NO VARIANT</div>"

const ItineraryChangesHTML = 
ItineraryCards({
  variant: "cambios",
  date: "06 Feb, 2025",
  aircraft: "CM 3030",
  pillsFlightStatus: "Cambios",
  departureTime: "8:00pm",
  flightDuration: "9h 52m",
  arrivalTime: "06:00pm",
  origin: "New York City (NYC)",
  destination: "Panama City (PTY)",
  originTerminal: "01",
  originGate: "PM9",
  destinationTerminal: "33",
  destinationGate: "90P",
}) || "<div>NO VARIANT</div>"

const ItineraryDemoradoHTML = 
ItineraryCards({
  variant: "demorado",
  date: "06 Feb, 2025",
  aircraft: "CM 3030",
  pillsFlightStatus: "Demorado",
  departureCrossedOutTime: "9:30pm",
  departureTime: "8:00pm",
  flightDuration: "9h 52m",
  arrivalTime: "06:00pm",
  arrivalCrossedOutTime: "3:00pm",
  origin: "New York City (NYC)",
  destination: "Panama City (PTY)",
  originTerminal: "01",
  originGate: "PM9",
  destinationTerminal: "33",
  destinationGate: "90P",
}) || "<div>NO VARIANT</div>"

const ItineraryAtiempoHTML = 
ItineraryCards({
  variant: "atiempo",
  date: "06 Feb, 2025",
  aircraft: "CM 3030",
  pillsFlightStatus: "A Tiempo",
  departureTime: "8:00pm",
  flightDuration: "9h 52m",
  arrivalTime: "06:00pm",
  origin: "New York City (NYC)",
  destination: "Panama City (PTY)",
  originTerminal: "01",
  originGate: "PM9",
  destinationTerminal: "33",
  destinationGate: "90P",
}) || "<div>NO VARIANT</div>"

// Variants: "atiempo" | "cambios" | "cancel" | "demorado" | "adelantado"