type Component<Props = object> = {
  variants: string[];
  renderHTML: string;
  previewHTML: string;
  props: Props;
}
type ObjectComponentsType = {
  Components: {
    Headers: Component<{
      labelTextReservationCode: string;
      reservationCode: string;
    }>;
    TitleBoxs: Component<{
      title: string;
      description: string
    }>;
    SectionContainers: Component<{
      imageURL?: string;
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
      labelTextDestination: string;
      destination: string;
      labelTextDate: string;
      date: string;
      labelTextReservationCode: string;
      reservationCode: string;
    }>;
    Alerts: Component<{
      alertText: string;
    }>;
    Banners: Component<{
      imageURL: string;
      title: string;
      description: string;
      appStoreLink: string;
      playStoreLink: string;
      appGalleryLink: string;
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
        labelTextReservationCode: "Código de reserva",
        reservationCode: "{PNR}",
      },
    },
    TitleBoxs: {
      variants: ["Single Title Box"],
      renderHTML: "",
      previewHTML: "",
      props: {
        title: "Disfruta de tu viaje con Copa Airlines",
        description: "Conoce los detalles de tu vuelo y preparate para tu proxima aventura",
      },
    },
    SectionContainers: {
      variants: ["Center Section", "Center Title Section", "Content Section", "Left Section", "Left Title Section"],
      renderHTML: "",
      previewHTML: "",
      props: {
        imageURL: "https://www.copaair.com/webassets/images/notifications/Equipaje-circle.png",
        title: "Panama City (PTY)",
        infoLeft: "Business Class",
        infoRight: "Boeing 737-800",
    },
  },
  Buttons: {
    variants: ["Light", "Link", "Main", "Outline"],
    renderHTML: "",
    previewHTML: "",
    props: {
      label: "Ver detalles",
      urlLink: "www.copaair.com",
    }
  },
  Infobars: {
    variants: ["Single Infobar"],
    renderHTML: "",
    previewHTML: "",
    props: {
      imageURL: "https://www.copaair.com/webassets/images/destinos/circulados/JFK.png",
      labelTextDestination: "Destino:",
      destination: "Panama",
      labelTextDate: "Fecha:",
      date: "Mar, 3, 2025",
      labelTextReservationCode: "Código de reserva:",
      reservationCode: "EJX932",
    }
  },
  Alerts: {
    variants: ["Content Error", "Content Info", "Content Invert", "Content Warning", "Inline Changes", "Inline Error", "Inline Inverted", "Inline Main", "Inline Success", "Inline Transparent", "Inline Warning"],
    renderHTML: "",
    previewHTML: "",
    props: {
      alertText: "Su vuelo ha sido suspendido por mal tiempo",
    }
  },
  Banners: {
    variants: ["Banner with Image"],
    renderHTML: "",
    previewHTML: "",
    props: {
      imageURL: "",
      title: "Descarga la App de Copa Airlines",
      description: "Recibe notificaciones en tiempo real sobre tu vuelo",
      appStoreLink: "https://apps.apple.com/es/app/copa-airlines/id533700785",
      playStoreLink: "https://play.google.com/store/apps/details?id=com.mttnow.android.copa.production&hl=es",
      appGalleryLink: "https://appgallery.huawei.com/app/C102348393",
    }
  },
  ItineraryCards: {
    variants: ["Adelantado", "A Tiempo", "Cambios", "Cancelado", "Demorado"],
    renderHTML: "",
    previewHTML: "",
    props: {
      date: "Jue, Feb 6",
      aircraft: "CM 900",
      pillsFlightStatus: "Variante",
      departureCrossedOutTime: "3:13pm",
      departureTime: "10:30am",
      flightDuration: "6h 52m",
      arrivalTime: "2:00pm",
      arrivalCrossedOutTime: "3:13pm",
      origin: "Cuidad de Panama (PTY)",
      destination: "Ciudad de Panama (PTY)",
      originTerminal: "1",
      originGate: "100",
      destinationTerminal: "2",
      destinationGate: "200",
    }
  },
  PaxCards: {
    variants: ["Simple Pax", "WCI Pax"],
    renderHTML: "",
    previewHTML: "",
    props: {
      paxName: "Ernesto Cassino",
      lealtad: "Presidential",
      seats: "A4, E9",
      status: "Check-in Done",
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
