import { AlertsTranslations } from "../htmlComponents/Alerts/types";
import { BannersTranslations } from "../htmlComponents/Banners/types";
import { ButtonsTranslations } from "../htmlComponents/Buttons/types";
import { FootersTranslations } from "../htmlComponents/Footers/types";
import { HeadersTranslations } from "../htmlComponents/Headers/types";
import { InfobarsTranslations } from "../htmlComponents/Infobars/types";
import { ItineraryCardsTranslations } from "../htmlComponents/Itinerary-cards/types";
import { PaxCardsTranslations } from "../htmlComponents/Pax-cards/types";
import { TitleBoxsTranslations } from "../htmlComponents/Title-boxs/types";

type Component<Props = object> = {
  variants: string[];
  renderHTML: string;
  previewHTML: string;
  props: Props;
}


// declare type ObjectComponentsType {
// Headers | Footer |

// declare type ObjectComponentsType = 
//   | Headers
//   | TitleBoxs
//   // | SectionContainers
//   | Buttons
//   | Infobars
//   | Alerts
//   | Banners
//   | ItineraryCards
//   | PaxCards
//   | Footers

// const header:Headers = object  
// header.props[lang].labelTextReservationCode

export interface ObjectComponentsType {
  Components: {
    Headers: Component<HeadersTranslations>,
    TitleBoxs: Component<TitleBoxsTranslations>
    Buttons: Component<ButtonsTranslations>
    Infobars: Component<InfobarsTranslations>
    Alerts: Component<AlertsTranslations>
    Banners: Component<BannersTranslations>
    ItineraryCards: Component<ItineraryCardsTranslations>
    PaxCards: Component<PaxCardsTranslations>
    Footers: Component<FootersTranslations>
  }
}


export const ObjectComponents: ObjectComponentsType  = {
  Components: {
    Headers: {
      variants: ["Copa Logo", "Copa y ConnectMiles", "Reservation Code"],
      renderHTML: "",
      previewHTML: "",
      props: {
        ES: {
          labelTextReservationCode: "Código de Reservación",
          reservationCode: "123456",
        },
        EN: {
          labelTextReservationCode: "Reservation Code",
          reservationCode: "123456",
        },
        PT: {
          labelTextReservationCode: "Código de Reservação",
          reservationCode: "123456",
        },
        FR: {
          labelTextReservationCode: "Code de réservation",
          reservationCode: "123456",
        },
      },
    },
    TitleBoxs: {
      variants: ["Single Title Box"],
      renderHTML: "",
      previewHTML: "",
      props: {
        ES: {
          title: "Disfruta de tu viaje con Copa Airlines",
          description: "Conoce los detalles de tu vuelo y preparate para tu proxima aventura",
        },
        EN: {
          title: "Enjoy your trip with Copa Airlines",
          description: "Know the details of your flight and get ready for your next adventure",
        },
        PT: {
          title: "Aproveite sua viagem com a Copa Airlines",
          description: "Conheça os detalhes do seu voo e prepare-se para sua próxima aventura",
        },
        FR: {
          title: "Profitez de votre voyage avec Copa Airlines",
          description: "Découvrez les détails de votre vol et préparez-vous pour votre prochaine aventure",
        },
      },
    },
  Buttons: {
    variants: ["Light", "Link", "Main", "Outline"],
    renderHTML: "",
    previewHTML: "",
    props: {
      ES: {
        label: "Ver detalles",
        urlLink: "www.copaair.com",
      },
      EN: {
        label: "View details",
        urlLink: "www.copaair.com",
      },
      PT: {
        label: "Ver detalhes",
        urlLink: "www.copaair.com",
      },
      FR: {
        label: "Voir les détails",
        urlLink: "www.copaair.com",
      },  
    }
  },
  Infobars: {
    variants: ["Single Infobar"],
    renderHTML: "",
    previewHTML: "",
    props: {
      ES: {
        labelTextDestination: "Destino:",
        destination: "Panama",
        labelTextDate: "Fecha:",
        date: "Mar, 3, 2025",
        labelTextReservationCode: "Código de reserva:",
        reservationCode: "EJX932",
        imageURL: "https://www.copaair.com/webassets/images/destinos/circulados/JFK.png",
      },
      EN: {
        labelTextDestination: "Destino:",
        destination: "Panama",
        labelTextDate: "Fecha:",
        date: "Mar, 3, 2025",
        labelTextReservationCode: "Código de reserva:",
        reservationCode: "EJX932",
        imageURL: "https://www.copaair.com/webassets/images/destinos/circulados/JFK.png",
      },
      PT: {
        labelTextDestination: "Destino:",
        destination: "Panama",
        labelTextDate: "Fecha:",
        date: "Mar, 3, 2025",
        labelTextReservationCode: "Código de reserva:",
        reservationCode: "EJX932",
        imageURL: "https://www.copaair.com/webassets/images/destinos/circulados/JFK.png",
      },
      FR: {
        labelTextDestination: "Destino:",
        destination: "Panama",
        labelTextDate: "Fecha:",
        date: "Mar, 3, 2025",
        labelTextReservationCode: "Código de reserva:",
        reservationCode: "EJX932",
        imageURL: "https://www.copaair.com/webassets/images/destinos/circulados/JFK.png",
      },
    }
  },
  Alerts: {
    variants: ["Content Error", "Content Info", "Content Invert", "Content Warning", "Inline Changes", "Inline Error", "Inline Inverted", "Inline Main", "Inline Success", "Inline Transparent", "Inline Warning"],
    renderHTML: "",
    previewHTML: "",
    props: {
      ES: {
        alertText: "Su vuelo ha sido suspendido por mal tiempo",
      },
      EN: {
        alertText: "Your flight has been suspended due to bad weather",
      },
      PT: {
        alertText: "Seu voo foi suspenso devido ao mau tempo",
      },
      FR: {
        alertText: "Votre vol a été suspendu en raison du mauvais temps",
      },
    }
  },
  Banners: {
    variants: ["Banner with Image"],
    renderHTML: "",
    previewHTML: "",
    props: {
      ES: {
        imageURL: "",
        title: "Descarga la App de Copa Airlines",
        description: "Recibe notificaciones en tiempo real sobre tu vuelo",
        appStoreLink: "https://apps.apple.com/es/app/copa-airlines/id533700785",
        playStoreLink: "https://play.google.com/store/apps/details?id=com.mttnow.android.copa.production&hl=es",
        appGalleryLink: "https://appgallery.huawei.com/app/C102348393",
      },
      EN: {
        imageURL: "",
        title: "Download the Copa Airlines App",
        description: "Receive real-time notifications about your flight",
        appStoreLink: "https://apps.apple.com/es/app/copa-airlines/id533700785",
        playStoreLink: "https://play.google.com/store/apps/details?id=com.mttnow.android.copa.production&hl=es",
        appGalleryLink: "https://appgallery.huawei.com/app/C102348393",
      },
      PT: {
        imageURL: "",
        title: "Baixe o aplicativo da Copa Airlines",
        description: "Receba notificações em tempo real sobre seu voo",
        appStoreLink: "https://apps.apple.com/es/app/copa-airlines/id533700785",
        playStoreLink: "https://play.google.com/store/apps/details?id=com.mttnow.android.copa.production&hl=es",
        appGalleryLink: "https://appgallery.huawei.com/app/C102348393",
      },
      FR: {
        imageURL: "",
        title: "Téléchargez l'application Copa Airlines",
        description: "Recevez des notifications en temps réel sur votre vol",
        appStoreLink: "https://apps.apple.com/es/app/copa-airlines/id533700785",
        playStoreLink: "https://play.google.com/store/apps/details?id=com.mttnow.android.copa.production&hl=es",
        appGalleryLink: "https://appgallery.huawei.com/app/C102348393",
      },
    },
  },
  ItineraryCards: {
    variants: ["Adelantado", "A Tiempo", "Cambios", "Cancelado", "Demorado"],
    renderHTML: "",
    previewHTML: "",
    props: {
      ES: {
        date: "Mar, 3, 2025",
        aircraft: "Boeing 737-800",
        pillsFlightStatus: "Adelantado",
        departureCrossedOutTime: "10:00",
        departureTime: "10:30",
        flightDuration: "2h 30m",
        arrivalTime: "13:00",
        arrivalCrossedOutTime: "13:30",
        origin: "Panama City (PTY)",
        destination: "Miami (MIA)",
        labelTextOriginTerminal: "Terminal de Origen",
        originTerminal: "Tocumen",
        labelTextOriginGate: "Puerta de origen",
        originGate: "A4",
        labelTextDestinationTerminal: "Terminal de destino",
        destinationTerminal: "Miami",
        labelTextDestinationGate: "Puerta de destino",
        destinationGate: "E9",
      },
      EN: {
        date: "Mar, 3, 2025",
        aircraft: "Boeing 737-800",
        pillsFlightStatus: "Early",
        departureCrossedOutTime: "10:00",
        departureTime: "10:30",
        flightDuration: "2h 30m",
        arrivalTime: "13:00",
        arrivalCrossedOutTime: "13:30",
        origin: "Panama City (PTY)",
        destination: "Miami (MIA)",
        labelTextOriginTerminal: "Origin Terminal",
        originTerminal: "Tocumen",
        labelTextOriginGate: "Origin Gate",
        originGate: "A4",
        labelTextDestinationTerminal: "Destination Terminal",
        destinationTerminal: "D",
        labelTextDestinationGate: "Destination Gate",
        destinationGate: "E9",
      },
      PT: {
        date: "Mar, 3, 2025",
        aircraft: "Boeing 737-800",
        pillsFlightStatus: "Adiantado",
        departureCrossedOutTime: "10:00",
        departureTime: "10:30",
        flightDuration: "2h 30m",
        arrivalTime: "13:00",
        arrivalCrossedOutTime: "13:30",
        origin: "Panama City (PTY)",
        destination: "Miami (MIA)",
        labelTextOriginTerminal: "Terminal de Origem",
        originTerminal: "Tocumen",
        labelTextOriginGate: "Portão de origem",
        originGate: "A4",
        labelTextDestinationTerminal: "Terminal de destino",
        destinationTerminal: "D",
        labelTextDestinationGate: "Portão de destino",
        destinationGate: "E9",
      },
      FR: {
        date: "Mar, 3, 2025",
        aircraft: "Boeing 737-800",
        pillsFlightStatus: "En avance",
        departureCrossedOutTime: "10:00",
        departureTime: "10:30",
        flightDuration: "2h 30m",
        arrivalTime: "13:00",
        arrivalCrossedOutTime: "13:30",
        origin: "Panama City (PTY)",
        destination: "Miami (MIA)",
        labelTextOriginTerminal: "Terminal d'origine",
        originTerminal: "Tocumen",
        labelTextOriginGate: "Porte d'origine",
        originGate: "A4",
        labelTextDestinationTerminal: "Terminal de destino",
        destinationTerminal: "D",
        labelTextDestinationGate: "Porte de destination",
        destinationGate: "E9",
      },
    }
  },
  PaxCards: {
    variants: ["Simple Pax", "WCI Pax"],
    renderHTML: "",
    previewHTML: "",
    props: {
      ES:{
        initials: "EC",
        paxName: "Ernesto Cassino",
        lealtad: " Sin programa de lealtad",
        seats: "A4, E9",
        labelTextDocument: "Documentos",
        documentStatus: "Verificado",
        iconURL: "https://www.copaair.com/webassets/icons/alerts/alert_banner_error.png",
        status: "Check-in Listo",
      },
      EN:{
        initials: "EC",
        paxName: "Ernesto Cassino",
        lealtad: "Silver",
        seats: "A4, E9",
        labelTextDocument: "Documents",
        documentStatus: "Verified",
        iconURL: "https://www.copaair.com/webassets/icons/alerts/alert_banner_error.png",
        status: "Check-in Done",
      },
      PT:{
        initials: "EC",
        paxName: "Ernesto Cassino",
        lealtad: "Sem programa de fidelidade",
        seats: "A4, E9",
        labelTextDocument: "Documentos",
        documentStatus: "Verificado",
        iconURL: "https://www.copaair.com/webassets/icons/alerts/alert_banner_error.png",
        status: "Check-in Realizado",
      },
      FR:{
        initials: "EC",
        paxName: "Ernesto Cassino",
        lealtad: "Sans programme de fidélité",
        seats: "A4, E9",
        labelTextDocument: "Documents",
        documentStatus: "Vérifié",
        iconURL: "https://www.copaair.com/webassets/icons/alerts/alert_banner_error.png",
        status: "Enregistrement effectué",
      },
    }
  },
  Footers: {
    variants: ["Social", "Traditional"],
    renderHTML: "",
    previewHTML: "",
    props: {
      ES: {
        text: "© 2025 Copa Airlines. Todos los derechos reservados.",
      },
      EN: {
        text: "© 2025 Copa Airlines. All rights reserved.",
      },
      PT: {
        text: "© 2025 Copa Airlines. Todos os direitos reservados.",
      },
      FR: {
        text: "© 2025 Copa Airlines. Tous droits réservés.",
      },
    },
  },

}}
