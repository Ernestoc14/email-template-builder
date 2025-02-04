type Component<Props = object> = {
  variants: string[];
  renderHTML: string;
  previewHTML: string;
  props: Props;
}
type ObjectComponentsType = {
  Components: {
    Headers: Component<{
      reservationCode: string;
    }>;
    TitleBoxs: Component<{
      title: string;
      description: string
    }>;
    SectionContainers: Component<{
      iconURL?: string;
      title: string;
      infoLeft?: string;
      infoRight?: string;
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
      alertText: string;
    }>;
    Banners: Component<{
      imageURL: string;
    }>;
    ItineraryCards: Component<{
      date: string;
      aircraft: string;
      pillsFlightStatus: string;
      departureCrossedOutTime?: string;
      departureTime: string;
      flightDuration: string;
      arrivalTime: string;
      arrivalCrossedOutTime?: string;
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
        reservationCode: "",
      },
    },
    TitleBoxs: {
      variants: ["Single Title Box"],
      renderHTML: "",
      previewHTML: "",
      props: {
        title: "Disfruta nuestra experiencia abordo Kath",
        description: "La Descripcion"
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
    variants: ["Single Infobar"],
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
      alertText: "",
    }
  },
  Banners: {
    variants: ["Banner with Image"],
    renderHTML: "",
    previewHTML: "",
    props: {
      imageURL: "",
    }
  },
  ItineraryCards: {
    variants: ["Adelantado", "A Tiempo", "Cambios", "Cancelado", "Demorado"],
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
    variants: ["Simple Pax", "WCI Pax"],
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
