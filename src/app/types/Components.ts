import { AlertsTranslations } from "../htmlComponents/Alerts/types";
import { BannersTranslations } from "../htmlComponents/Banners/types";
import { ButtonsTranslations } from "../htmlComponents/Buttons/types";
import { FootersTranslations } from "../htmlComponents/Footers/types";
import { HeadersProps, HeadersTranslations } from "../htmlComponents/Headers/types";
import { InfobarsTranslations } from "../htmlComponents/Infobars/types";
import { ItineraryCardsTranslations } from "../htmlComponents/Itinerary-cards/types";
import { PaxCardsTranslations } from "../htmlComponents/Pax-cards/types";
import { SectionContainersTranslations } from "../htmlComponents/Section-container/types";
import { TitleBoxsProps, TitleBoxsTranslations } from "../htmlComponents/Title-boxs/types";

type Component<Props = object> = {
  variants: string[];
  renderHTML: string;
  previewHTML: string;
  props: Props;
}

declare type ComponentsType  = 
HeadersProps
| TitleBoxsProps
| SectionContainersTranslations
| ButtonsTranslations
| InfobarsTranslations
| AlertsTranslations
| BannersTranslations
| ItineraryCardsTranslations
| PaxCardsTranslations
| FootersTranslations

export interface ObjectComponentsType {
  Components: {
    Headers: Component<HeadersTranslations>,
    TitleBoxs: Component<TitleBoxsTranslations>
    SectionContainers: Component<SectionContainersTranslations>
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
      variants: ["Title Description", "Just Title"],
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
  SectionContainers: {
    variants: ["Center Section", "Center Title Section", "Content Section", "Left Section", "Left Title Section"],
    renderHTML: "",
    previewHTML: "",
    props: {
      ES: {
        imageURL: "https://www.copaair.com/webassets/images/notifications/Equipaje-circle.png",
        title: "Hacia Panama(PTY)",
        infoLeft: "Cabina Principal",
        infoRight: "Boeing 737-800",
      },
      EN: {
        imageURL: "https://www.copaair.com/webassets/images/notifications/Equipaje-circle.png",
        title: "To Panama(PTY)",
        infoLeft: "Main Cabin",
        infoRight: "Boeing 737-800",
      },
      PT: {
        imageURL: "https://www.copaair.com/webassets/images/notifications/Equipaje-circle.png",
        title: "Para Panama(PTY)",
        infoLeft: "Cabine Principal",
        infoRight: "Boeing 737-800",
      },
      FR: {
        imageURL: "https://www.copaair.com/webassets/images/notifications/Equipaje-circle.png",
        title: "Vers Panama(PTY)",
        infoLeft: "Cabine principale",
        infoRight: "Boeing 737-800",
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
        urlLink: "https://www.copaair.com/es-gs/",
      },
      EN: {
        label: "View details",
        urlLink: "https://www.copaair.com/es-gs/",
      },
      PT: {
        label: "Ver detalhes",
        urlLink: "https://www.copaair.com/es-gs/",
      },
      FR: {
        label: "Voir les détails",
        urlLink: "https://www.copaair.com/es-gs/",
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
        desktopImageURL: "https://www.copaair.com/assets/banner-app-img.png",
        mobileImageURL: "https://www.copaair.com/assets/banner-app-mobile-img.png",
        title: "Descarga la App de Copa Airlines",
        description: "Recibe notificaciones en tiempo real sobre tu vuelo",
      },
      EN: {
        desktopImageURL: "https://www.copaair.com/assets/banner-app-img.png",
        mobileImageURL: "https://www.copaair.com/assets/banner-app-mobile-img.png",
        title: "Download the Copa Airlines App",
        description: "Receive real-time notifications about your flight",
      },
      PT: {
        desktopImageURL: "https://www.copaair.com/assets/banner-app-img.png",
        mobileImageURL: "https://www.copaair.com/assets/banner-app-mobile-img.png",
        title: "Baixe o aplicativo da Copa Airlines",
        description: "Receba notificações em tempo real sobre seu voo",
      },
      FR: {
        desktopImageURL: "https://www.copaair.com/assets/banner-app-img.png",
        mobileImageURL: "https://www.copaair.com/assets/banner-app-mobile-img.png",
        title: "Téléchargez l'application Copa Airlines",
        description: "Recevez des notifications en temps réel sur votre vol",
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
        text: "Por favor no responder a este mensaje. Para mayor asistencia contacte a nuestro",
        linkText: "Centro de Llamadas.",
        firstLink: "https://www.copaair.com/es-gs/atencion-al-cliente/centro-de-llamadas/",
        secondText: "Vea nuestra",
        secondLinkText: "Política de Privacidad",
        secondLink: "https://www.copaair.com/es-gs/legal/terminos-y-condiciones/politica-de-privacidad/",

      },
      EN: {
        text: "Please do not reply to this email. For assistance, please contact",
        linkText: "The Call Center.",
        firstLink: "https://www.copaair.com/en-gs/customer-service/call-center/",
        secondText: "Please review our",
        secondLinkText: "Privacy Policy.",
        secondLink: "https://www.copaair.com/en-gs/legal/terms-and-conditions/privacy-policy/",
      },
      PT: {
        text: "Não responda a este e-mail. Para obter assistência, entre em contato com a",
        linkText: "Centro de Chamadas.",
        firstLink: "https://www.copaair.com/pt-gs/atendimento-ao-cliente/centro-de-chamadas/",
        secondText: "Consulte nossa",
        secondLinkText: "Política de Privacidade.",
        secondLink: "https://www.copaair.com/pt-gs/legal/termos-e-condicoes/politica-privacidade/",
      },
      FR: {
        text: "Ne répondez pas à cet e-mail. Pour obtenir de l'aide, veuillez contacter une",
        linkText: "Centrale de réservation.",
        firstLink: "https://www.copaair.com/fr-gs/soutien-au-client/centre-dappels/",
        secondText: "Veuillez consulter notre",
        secondLinkText: "Politique de confidentialité.",
        secondLink: "https://www.copaair.com/fr-gs/legal/termes-et-conditions/politique-de-confidentialite/",
      },
    },
  },

}}
