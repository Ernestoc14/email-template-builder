type Component<Props = object> = {
  variants: string[];
  renderHTML: string;
  previewHTML: string;
  props: Props;
}
type ObjectComponentsType = {
  Components: {
    Headers: Component<{
      copaLogoURL: string;
      connectMilesLogoURL: string;
      reservationCode: string;
    }>;
    TitleBoxs: Component<{
      title: string;
    }>;
    SectionContainers: Component<{
      iconURL: string;
      title: string;
      infoLeft: string;
      infoRight: string;
    }>;
    Buttons: Component<{
      label: string;
      urlLink: string;
    }>;
    Infobars: Component<{
      imageURL: string;
      destination: string;
      date: string;
      reservationCode: string;
    }>;
    Alerts: Component<{
      type: string;
      iconURL: string;
      alertText: string;
    }>;
    Banners: Component<{
      imageURL: string;
    }>;
    ItineraryCards: Component<{
      date: string;
      aircraft: string;
      pillsFlightStatus: string;
      departureCrossedOutTime: string;
      departureTime: string;
      flightDuration: string;
      arrivalTime: string;
      arrivalCrossedOutTime: string;
      origin: string;
      destination: string;
      originTerminal: string;
      originGate: string;
      destinationTerminal: string;
      destinationGate: string;
    }>;
    PaxCards: Component<{
      paxName: string;
      lealtad: string;
      seats: string;
      status: string;
    }>;
    Footers: Component<{
      type: string;
    }>;
    }
  }

export const ObjectComponents: ObjectComponentsType = {
  Components: {
    Headers: {
      variants: ["Copa Logo", "Reservation Code", "Copa y ConnectMiles"],
      renderHTML: "",
      previewHTML: "",
      props: {
        copaLogoURL: "url/to/logo3.png",
        connectMilesLogoURL: "url/to/logo4.png",
        reservationCode: "ABC123",
      },
    },
    TitleBoxs: {
      variants: ["Single Title Box"],
      renderHTML: "",
      previewHTML: "",
      props: {
        title: "Disfruta nuestra experiencia abordo Kath",
      },
    },
    SectionContainers: {
      variants: ["Center Section", "Center Title Section", "Content Section", "Left Section", "Left Title Section", "Section"],
      renderHTML: "",
      previewHTML: "",
      props: {
        iconURL: "https://www.copaair.com/webassets/images/notifications/Equipaje-circle.png",
        title: "Hacia Panama (PTY)",
        infoLeft: "Cabina Economica",
        infoRight: "Boeing 737-800",
    },
  },
  Buttons: {
    variants: ["Light", "Link", "Main", "Outline"],
    renderHTML: "",
    previewHTML: "",
    props: {
      label: "",
      urlLink: "",
    }
  },
  Infobars: {
    variants: ["Single"],
    renderHTML: "",
    previewHTML: "",
    props: {
      imageURL: "https://www.copaair.com/webassets/images/destinos/circulados/JFK.png",
      destination: "",
      date: "",
      reservationCode: "",
    }
  },
  Alerts: {
    variants: ["Content Error", "Content Info", "Content Invert", "Content Warning", "Inline Changes", "Inline Error", "Inline Inverted", "Inline Main", "Inline Success", "Inline Transparent", "Inline Warning"],
    renderHTML: "",
    previewHTML: "",
    props: {
      type: "",
      iconURL: "",
      alertText: "",
    }
  },
  Banners: {
    variants: ["Image"],
    renderHTML: "",
    previewHTML: "",
    props: {
      imageURL: "",
    }
  },
  ItineraryCards: {
    variants: ["Adelantado", "Atiempo", "Cambios", "Cancel", "Demorado"],
    renderHTML: "",
    previewHTML: "",
    props: {
      date: "",
      aircraft: "",
      pillsFlightStatus: "",
      departureCrossedOutTime: "",
      departureTime: "",
      flightDuration: "",
      arrivalTime: "",
      arrivalCrossedOutTime: "",
      origin: "",
      destination: "",
      originTerminal: "",
      originGate: "",
      destinationTerminal: "",
      destinationGate: "",
    }
  },
  PaxCards: {
    variants: ["Simple", "WCI"],
    renderHTML: "",
    previewHTML: "",
    props: {
      paxName: "",
      lealtad: "",
      seats: "",
      status: "",
    }
  },
  Footers: {
    variants: ["Social", "Traditional"],
    renderHTML: "",
    previewHTML: "",
    props: {
      type: "",
    },
  },

}}

// const ComponentVariants = {
//   Alerts: [
//     Alerts({ variant: "content", type: "error", iconURL: "url/to/icon.png", alertText: "Error Alert" }),
//     Alerts({ variant: "content", type: "info", iconURL: "url/to/icon.png", alertText: "Warning Alert" }),
//     Alerts({ variant: "content", type: "invert", iconURL: "url/to/icon.png", alertText: "Error Alert" }),
//     Alerts({ variant: "content", type: "warning", iconURL: "url/to/icon.png", alertText: "Warning Alert" }),
//     Alerts({ variant: "inline", type: "changes", iconURL: "url/to/icon.png", alertText: "Error Alert" }),
//     Alerts({ variant: "inline", type: "error", iconURL: "url/to/icon.png", alertText: "Warning Alert" }),
//     Alerts({ variant: "inline", type: "inverted", iconURL: "url/to/icon.png", alertText: "Error Alert" }),
//     Alerts({ variant: "inline", type: "main", iconURL: "url/to/icon.png", alertText: "Warning Alert" }),
//     Alerts({ variant: "inline", type: "success", iconURL: "url/to/icon.png", alertText: "Error Alert" }),
//     Alerts({ variant: "inline", type: "transparent", iconURL: "url/to/icon.png", alertText: "Warning Alert" }),
//     Alerts({ variant: "inline", type: "warning", iconURL: "url/to/icon.png", alertText: "Warning Alert" }),
//   ],
//   Banners: [
//     Banners({ variant: "image"}),
//   ],
//   Buttons: [
//     Buttons({ variant: "light", label: "Light Button", urlLink: "https://mytrips.copaair.com" }),
//     Buttons({ variant: "link", label: "Link Button", urlLink: "https://mytrips.copaair.com" }),
//     Buttons({ variant: "main", label: "Main Button", urlLink: "https://mytrips.copaair.com" }),
//     Buttons({ variant: "outline", label: "Outline Button", urlLink: "https://mytrips.copaair.com" }),
//   ],
//   Headers: [
//     Headers({ variant: "Copa Logo", copaLogoURL: "url/to/logo1.png" }),
//     Headers({ variant: "Reservation Code", copaLogoURL: "url/to/logo2.png", reservationCode: "ABC123" }),
//     Headers({ variant: "Copa y ConnectMiles", copaLogoURL: "url/to/logo3.png", aditionalLogoURL: "url/to/logo4.png" }),
//   ],
//   Infobars: [
//     Infobars({ variant: "single", imageURL: "https://www.copaair.com/webassets/images/destinos/circulados/JFK.png", destination: "PTY", date: "23 Jan 2025", reservationCode: "ABC123" }),
//   ],
//   ItineraryCards: [
//     ItineraryCards({ variant: "adelantado", date: "25 Jan 2025", aircraft: "Boeing 737-800", pillsFlightStatus: "Adelantado", departureCrossedOutTime: "10:00 am", departureTime: "10:30 am", flightDuration: "2h 30m", arrivalTime: "13:00 pm", arrivalCrossedOutTime: "12:30 pm", origin: "PTY", destination: "JFK", originTerminal: "T1", originGate: "A1", destinationTerminal: "T4", destinationGate: "B2" }),
//     ItineraryCards({ variant: "atiempo", date: "25 Jan 2025", aircraft: "Boeing 737-800", pillsFlightStatus: "A Tiempo", departureTime: "10:30 am", flightDuration: "2h 30m", arrivalTime: "13:00 pm", origin: "PTY", destination: "JFK", originTerminal: "T1", originGate: "A1", destinationTerminal: "T4", destinationGate: "B2" }),
//     ItineraryCards({ variant: "cambios", date: "25 Jan 2025", aircraft: "Boeing 737-800", pillsFlightStatus: "Cambios", departureTime: "10:30 am", flightDuration: "2h 30m", arrivalTime: "13:00 pm", origin: "PTY", destination: "JFK", originTerminal: "T1", originGate: "A1", destinationTerminal: "T4", destinationGate: "B2" }),
//     ItineraryCards({ variant: "cancel", date: "25 Jan 2025", aircraft: "Boeing 737-800", pillsFlightStatus: "Cancelado", departureTime: "10:30 am", flightDuration: "2h 30m", arrivalTime: "13:00 pm", origin: "PTY", destination: "JFK", originTerminal: "T1", originGate: "A1", destinationTerminal: "T4", destinationGate: "B2" }),
//     ItineraryCards({ variant: "demorado", date: "25 Jan 2025", aircraft: "Boeing 737-800", pillsFlightStatus: "Demorado", departureCrossedOutTime: "10:00 am", departureTime: "10:30 am", flightDuration: "2h 30m", arrivalTime: "13:00 pm", arrivalCrossedOutTime: "12:30 pm", origin: "PTY", destination: "JFK", originTerminal: "T1", originGate: "A1", destinationTerminal: "T4", destinationGate: "B2" }),
//   ],
//   PaxCards: [
//     PaxCards({ variant: "simple", paxName: "John Doe", lealtad: "Copa PreferMember", seats: "1A", status: "Check In Completed" }),
//     PaxCards({ variant: "wci" , paxName: "Katia Fernandez", lealtad: "Copa Silver Member", seats: "90C, 1A", status: "Check In Pendiente" }),
//   ],
//   SectionContainers: [
//     SectionContainers({ variant: "centerSection", iconURL:"https://www.copaair.com/webassets/images/notifications/Equipaje-circle.png", title: "Hacia Panama (PTY)", infoLeft: "Cabina Economica", infoRight: "Boeing 737-800" }),
//     SectionContainers({ variant: "centerTitleSection", iconURL:"https://www.copaair.com/webassets/images/notifications/Equipaje-circle.png", title: "Hacia Panama (PTY)", infoLeft: "Cabina Economica", infoRight: "Boeing 737-800" }),
//     SectionContainers({ variant: "contentSection" }),
//     SectionContainers({ variant: "leftSection", iconURL:"https://www.copaair.com/webassets/images/notifications/Equipaje-circle.png", title: "Hacia Panama (PTY)", infoLeft: "Cabina Economica", infoRight: "Boeing 737-800" }),
//     SectionContainers({ variant: "leftTitleSection", iconURL:"https://www.copaair.com/webassets/images/notifications/Equipaje-circle.png", title: "Hacia Panama (PTY)", infoLeft: "Cabina Economica", infoRight: "Boeing 737-800" }),
//     SectionContainers({ variant: "section", iconURL:"https://www.copaair.com/webassets/images/notifications/Equipaje-circle.png", title: "Hacia Panama (PTY)", infoLeft: "Cabina Economica", infoRight: "Boeing 737-800" }),
//   ],
//   TitleBoxs: [
//     TitleBoxs({ variant: "titleBox", title: "Disfruta nuestra experiencia abordo Kath", subtitle: "Conoce la comida y opciones de entretenimiento que te esperan durante tu viaje" }),
//   ],
//   Footers: [
//     Footers({ variant: "social" }),
//     Footers({ variant: "traditional"}),
//   ],
// } as const;

// export default ComponentVariants;
