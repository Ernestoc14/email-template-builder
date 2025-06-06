import { AlertsTranslations } from "../htmlComponents/Alerts/types";
import { BannersTranslations } from "../htmlComponents/Banners/types";
import { ButtonsTranslations } from "../htmlComponents/Buttons/types";
import { FootersTranslations } from "../htmlComponents/Footers/types";
import { HeadersTranslations } from "../htmlComponents/Headers/types";
import { InfobarsTranslations } from "../htmlComponents/Infobars/types";
import { ItineraryCardsTranslations } from "../htmlComponents/ItineraryCards/types";
import { MarkdownTranslations } from "../components/MarkdownInput/types";
import { PaxCardsTranslations } from "../htmlComponents/PaxCards/types";
import { SectionContainersTranslations } from "../htmlComponents/SectionContainer/types";
import { TitleBoxsTranslations } from "../htmlComponents/TitleBoxs/types";
import { InformativeBoxTranslations } from "../htmlComponents/InformativeBox/types";
import { TopicCardsTranslations } from "../htmlComponents/TopicCards/types";

type Component<Props = object> = {
  variants: string[];
  props: Props;
  propModal: boolean
}

export type ComponentsTranslations  = 
HeadersTranslations
| TitleBoxsTranslations
| SectionContainersTranslations
| ButtonsTranslations
| InfobarsTranslations
| AlertsTranslations
| BannersTranslations
| ItineraryCardsTranslations
| PaxCardsTranslations
| FootersTranslations
| MarkdownTranslations
| InformativeBoxTranslations
| TopicCardsTranslations

export interface ObjectComponentsType {
  Components: {
    Headers: Component<ComponentsTranslations>,
    TitleBoxs: Component<ComponentsTranslations>
    SectionContainers: Component<ComponentsTranslations>
    Buttons: Component<ComponentsTranslations>
    Infobars: Component<ComponentsTranslations>
    Alerts: Component<ComponentsTranslations>
    Markdown: Component<ComponentsTranslations>
    Banners: Component<ComponentsTranslations>
    ItineraryCards: Component<ComponentsTranslations>
    PaxCards: Component<ComponentsTranslations>
    Footers: Component<ComponentsTranslations>
    InformativeBox: Component<ComponentsTranslations>
    TopicCards: Component<TopicCardsTranslations>
  }
}

export const ObjectComponents: ObjectComponentsType  = {
  Components: {
    Headers: {
      variants: ["Copa Logo", "Pair Logos", "Reservation Code", "No Line"],
      propModal: true,
      props: {
        ES: {
          labelTextReservationCode: "Código de Reservación",
          reservationCode: "123456",
          secondLogoUrl: "https://www.copaair.com/assets/connectMilesLogo.png"
        },
        EN: {
          labelTextReservationCode: "Reservation Code",
          reservationCode: "123456",
          secondLogoUrl: "https://www.copaair.com/assets/connectMilesLogo.png"
        },
        PT: {
          labelTextReservationCode: "Código de Reservação",
          reservationCode: "123456",
          secondLogoUrl: "https://www.copaair.com/assets/connectMilesLogo.png"
        },
        FR: {
          labelTextReservationCode: "Code de réservation",
          reservationCode: "123456",
          secondLogoUrl: "https://www.copaair.com/assets/connectMilesLogo.png"
        },
      },
    },
    TitleBoxs: {
      variants: ["Title Description", "Just Title"],
      propModal: true,
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
    variants: ["Content Section", "Divider"],
    propModal: false,
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
    propModal: true,
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
    propModal: true,
    props: {
      ES: {
        labelTextDestination: "Destino:",
        destination: "Panama",
        labelTextDate: "Fecha:",
        date: "Mar, 3, 2025",
        labelTextReservationCode: "Código de reserva:",
        reservationCode: "123456",
        imageURL: "https://www.copaair.com/webassets/images/destinos/circulados/JFK.png",
      },
      EN: {
        labelTextDestination: "Destino:",
        destination: "Panama",
        labelTextDate: "Date:",
        date: "Mar, 3, 2025",
        labelTextReservationCode: "Código de reserva:",
        reservationCode: "123456",
        imageURL: "https://www.copaair.com/webassets/images/destinos/circulados/JFK.png",
      },
      PT: {
        labelTextDestination: "Destino:",
        destination: "Panama",
        labelTextDate: "Fecha:",
        date: "Mar, 3, 2025",
        labelTextReservationCode: "Código de reserva:",
        reservationCode: "123456",
        imageURL: "https://www.copaair.com/webassets/images/destinos/circulados/JFK.png",
      },
      FR: {
        labelTextDestination: "Destino:",
        destination: "Panama",
        labelTextDate: "Fecha:",
        date: "Mar, 3, 2025",
        labelTextReservationCode: "Código de reserva:",
        reservationCode: "123456",
        imageURL: "https://www.copaair.com/webassets/images/destinos/circulados/JFK.png",
      },
    }
  },
  Alerts: {
    variants: ["Content Error", "Content Info", "Content Invert", "Content Warning", "Inline Changes", "Inline Error", "Inline Inverted", "Inline Main", "Inline Success", "Inline Transparent", "Inline Warning"],
    propModal: true,
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
    variants: ["Banner del App", "Banner Stopover", "Banner Wide Promotional"],
    propModal: true,
    props: {
      ES: {
        desktopImageURL: "https://www.copaair.com/assets/banner-app-img.png",
        mobileImageURL: "https://www.copaair.com/assets/banner-app-mobile-img.png",
        title: "Descarga la App de Copa Airlines",
        description: "Recibe notificaciones en tiempo real sobre tu vuelo",
        buttonLabel: "Conozca mas",
        buttonLink: "https://www.stopoverinpanama.com/#anchor_itinerary",
      },
      EN: {
        desktopImageURL: "https://www.copaair.com/assets/banner-app-img.png",
        mobileImageURL: "https://www.copaair.com/assets/banner-app-mobile-img.png",
        title: "Download the Copa Airlines App",
        description: "Receive real-time notifications about your flight",
        buttonLabel: "Learn More",
        buttonLink: "https://www.stopoverinpanama.com/#anchor_itinerary",
      },
      PT: {
        desktopImageURL: "https://www.copaair.com/assets/banner-app-img.png",
        mobileImageURL: "https://www.copaair.com/assets/banner-app-mobile-img.png",
        title: "Baixe o aplicativo da Copa Airlines",
        description: "Receba notificações em tempo real sobre seu voo",
        buttonLabel: "Saiba mais",
        buttonLink: "https://www.stopoverinpanama.com/#anchor_itinerary",
      },
      FR: {
        desktopImageURL: "https://www.copaair.com/assets/banner-app-img.png",
        mobileImageURL: "https://www.copaair.com/assets/banner-app-mobile-img.png",
        title: "Téléchargez l'application Copa Airlines",
        description: "Recevez des notifications en temps réel sur votre vol",
        buttonLabel: "En savoir plus",
        buttonLink: "https://www.stopoverinpanama.com/#anchor_itinerary",
      },
    },
  },
  ItineraryCards: {
    variants: ["Early", "On Time", "Changes", "Cancelled", "Delayed", "Programmed", "Layover", "Multi City", "No Pill"],
    propModal: true,
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
        labelTextOriginGate: "Puerta de origen:",
        originGate: "A4",
        labelTextDestinationTerminal: "Terminal de destino",
        destinationTerminal: "Miami",
        labelTextDestinationGate: "Puerta de destino",
        destinationGate: "E9",
        layoverText: "Escala: PTY(1h 07m)",
        dateSecondFlight: "Nov, 4, 2025",
        aircraftSecondFlight: "Boeing 737 MAX",
        departureTimeSecondFlight: "19:00",
        flightDurationSecondFlight: "3h 30m",
        arrivalTimeSecondFlight: "22:30",
        originSecondFlight: "Fort Lauderdale (FLL)",
        destinationSecondFlight: "Panama City (PTY)",
        labelTextDestinationGateSecondFlight: "Operado por",
        destinationGateSecondFlight: "Copa Airlines",
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
        labelTextOriginGate: "Origin Gate:",
        originGate: "A4",
        labelTextDestinationTerminal: "Destination Terminal",
        destinationTerminal: "D",
        labelTextDestinationGate: "Destination Gate",
        destinationGate: "E9",
        layoverText: "Layover: PTY(1h 07m)",
        dateSecondFlight: "Nov, 4, 2025",
        aircraftSecondFlight: "Boeing 737 MAX",
        departureTimeSecondFlight: "19:00",
        flightDurationSecondFlight: "3h 30m",
        arrivalTimeSecondFlight: "22:30",
        originSecondFlight: "Fort Lauderdale (FLL)",
        destinationSecondFlight: "Panama City (PTY)",
        labelTextDestinationGateSecondFlight: "Operated by",
        destinationGateSecondFlight: "Copa Airlines",
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
        labelTextOriginGate: "Portão de origem:",
        originGate: "A4",
        labelTextDestinationTerminal: "Terminal de destino",
        destinationTerminal: "D",
        labelTextDestinationGate: "Portão de destino",
        destinationGate: "E9",
        layoverText: "Escala: PTY(1h 07m)",
        dateSecondFlight: "Nov, 4, 2025",
        aircraftSecondFlight: "Boeing 737 MAX",
        departureTimeSecondFlight: "19:00",
        flightDurationSecondFlight: "3h 30m",
        arrivalTimeSecondFlight: "22:30",
        originSecondFlight: "Fort Lauderdale (FLL)",
        destinationSecondFlight: "Panama City (PTY)",
        labelTextDestinationGateSecondFlight: "Operado por",
        destinationGateSecondFlight: "Copa Airlines",
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
        layoverText: "Escale: PTY(1h 07m)",
        dateSecondFlight: "Nov, 4, 2025",
        aircraftSecondFlight: "Boeing 737 MAX",
        departureTimeSecondFlight: "19:00",
        flightDurationSecondFlight: "3h 30m",
        arrivalTimeSecondFlight: "22:30",
        originSecondFlight: "Fort Lauderdale (FLL)",
        destinationSecondFlight: "Panama City (PTY)",
        labelTextDestinationGateSecondFlight: "Opéré par",
        destinationGateSecondFlight: "Copa Airlines",
      },
    }
  },
  PaxCards: {
    variants: ["Pair Pax Cards", "WCI Status Pax Card"],
    propModal: true,
    props: {
      ES:{
        paxName: "Carlos Solis",
        paxInitials: "CS",
        status: "PreferMember",
        seats: "12A, 34B",
        paxName2: "Ernesto Cassino",
        paxInitials2: "EC",
        status2: "Member",
        seats2: "12B, 34w",
        labelTextDocument: "Documentos",
        documentStatus: "Verificacion completa",
        iconURL: "https://www.copaair.com/webassets/icons/alerts/alert_banner_error.png",
        checkInStatus: "Check-in Realizado",
      },
      EN:{
        paxName: "Carlos Solis",
        paxInitials: "CS",
        status: "PreferMember",
        seats: "12A, 34B",
        paxName2: "Ernesto Cassino",
        paxInitials2: "EC",
        status2: "Member",
        seats2: "12B, 34w",
        labelTextDocument: "Documents",
        documentStatus: "Verification complete",
        iconURL: "https://www.copaair.com/webassets/icons/alerts/alert_banner_error.png",
        checkInStatus: "Check-in Completed",
      },
      PT:{
        paxName: "Carlos Solis",
        paxInitials: "CS",
        status: "PreferMember",
        seats: "12A, 34B",
        paxName2: "Ernesto Cassino",
        paxInitials2: "EC",
        status2: "Member",
        seats2: "12B, 34w",
        labelTextDocument: "Documentos",
        documentStatus: "Verificação completa",
        iconURL: "https://www.copaair.com/webassets/icons/alerts/alert_banner_error.png",
        checkInStatus: "Check-in Realizado",
      },
      FR:{
        paxName: "Carlos Solis",
        paxInitials: "CS",
        status: "PreferMember",
        seats: "12A, 34B",
        paxName2: "Ernesto Cassino",
        paxInitials2: "EC",
        status2: "Member",
        seats2: "12B, 34w",
        labelTextDocument: "Documents",
        documentStatus: "Vérification complète",
        iconURL: "https://www.copaair.com/webassets/icons/alerts/alert_banner_error.png",
        checkInStatus: "Enregistrement effectué",
      },
    }
  },
  Footers: {
    variants: ["Social", "Traditional", "Unsubscribe"],
    propModal: true,
    props: {
      ES: {
        text: "Por favor no responder a este mensaje. Para mayor asistencia contacte a nuestro",
        linkText: "Centro de Llamadas.",
        firstLink: "https://www.copaair.com/es-gs/atencion-al-cliente/centro-de-llamadas/",
        secondText: "Vea nuestra",
        secondLinkText: "Política de Privacidad",
        secondLink: "https://www.copaair.com/es-gs/legal/terminos-y-condiciones/politica-de-privacidad/",
        unsubscribeText: "Si desea eliminar su dirección de correo de nuestra lista de envíos,",
        unsubscribeLinkText: "haga clic aquí.",
        unsubscribeLink: "https://www.copaair.com/es-gs/legal/terminos-y-condiciones/politica-de-privacidad/",
      },
      EN: {
        text: "Please do not reply to this email. For assistance, please contact",
        linkText: "The Call Center.",
        firstLink: "https://www.copaair.com/en-gs/customer-service/call-center/",
        secondText: "Please review our",
        secondLinkText: "Privacy Policy.",
        secondLink: "https://www.copaair.com/en-gs/legal/terms-and-conditions/privacy-policy/",
        unsubscribeText: "If you wish to remove your email address from our mailing list,",
        unsubscribeLinkText: "click here.",
        unsubscribeLink: "https://www.copaair.com/en-gs/legal/terms-and-conditions/privacy-policy/",
      },
      PT: {
        text: "Não responda a este e-mail. Para obter assistência, entre em contato com a",
        linkText: "Centro de Chamadas.",
        firstLink: "https://www.copaair.com/pt-gs/atendimento-ao-cliente/centro-de-chamadas/",
        secondText: "Consulte nossa",
        secondLinkText: "Política de Privacidade.",
        secondLink: "https://www.copaair.com/pt-gs/legal/termos-e-condicoes/politica-privacidade/",
        unsubscribeText: "Se você deseja remover seu endereço de e-mail de nossa lista de envios,",
        unsubscribeLinkText: "clique aqui.",
        unsubscribeLink: "https://www.copaair.com/pt-gs/legal/termos-e-condicoes/politica-privacidade/",
      },
      FR: {
        text: "Ne répondez pas à cet e-mail. Pour obtenir de l'aide, veuillez contacter une",
        linkText: "Centrale de réservation.",
        firstLink: "https://www.copaair.com/fr-gs/soutien-au-client/centre-dappels/",
        secondText: "Veuillez consulter notre",
        secondLinkText: "Politique de confidentialité.",
        secondLink: "https://www.copaair.com/fr-gs/legal/termes-et-conditions/politique-de-confidentialite/",
        unsubscribeText: "Si vous souhaitez supprimer votre adresse e-mail de notre liste de diffusion,",
        unsubscribeLinkText: "cliquez ici.",
        unsubscribeLink: "https://www.copaair.com/fr-gs/legal/termes-et-conditions/politique-de-confidentialite/",
      },
    },
  },
  Markdown:{
    variants: ["Markdown"],
    propModal: true,
    props:{
      ES:{
        markdown: "# Escribir Markdwon aqui!"
      },
      EN:{
        markdown: "# Escribir Markdwon aqui!"
      },
      PT:{
        markdown: "# Escribir Markdwon aqui!"
      },
      FR:{
        markdown: "# Escribir Markdwon aqui!"
      },
    }
  },
  InformativeBox: {
    variants: ["Simple"],
    propModal: true,
    props: {
      ES: {
        imgUrl: "https://www.copaair.com/webassets/pictogramas/viajes/comida_t.png",
        title: "Escoja el comercio afiliado",
        description: "Revise el listado de comercios afiliados y tenga en cuenta los detalles de uso.",
      },
      EN: {
        imgUrl: "https://www.copaair.com/webassets/pictogramas/viajes/comida_t.png",
        title: "Choose the affiliated merchant",
        description: "Review the list of affiliated merchants and take note of the usage details.",
      },
      PT: {
        imgUrl: "https://www.copaair.com/webassets/pictogramas/viajes/comida_t.png",
        title: "Escolha o comércio afiliado",
        description: "Revise a lista de comércios afiliados e fique atento aos detalhes de uso.",
      },
      FR: {
        imgUrl: "https://www.copaair.com/webassets/pictogramas/viajes/comida_t.png",
        title: "Choisissez le commerçant affilié",
        description: "Consultez la liste des commerçants affiliés et tenez compte des détails d'utilisation.",
      },
    }
  },
  TopicCards: {
    variants: ["Pair Topic Cards"],
    propModal: true,
    props: {
      ES: {
        imgUrl1: "https://www.copaair.com/assets/alquiler-auto.png",
        title1: "Alquiler de Autos",
        description1: "Reserve tu auto con descuento",
        labelLink1: "Ver más",
        CTALink1: "https://www.copaair.com/es-gs/informacion-al-viajar/complementa-tu-viaje/",
        imgUrl2: "https://www.copaair.com/assets/Pool.png",
        title2: "Hoteles",
        description2: "Reserva tu hotel con descuento",
        labelLink2: "Conoce más",
        CTALink2: "https://www.copaair.com/es-gs/informacion-al-viajar/complementa-tu-viaje/"
      },
      EN: {
        imgUrl1: "https://www.copaair.com/assets/alquiler-auto.png",
        title1: "Car Rental",
        description1: "Book your car at a discount",
        labelLink1: "See more",
        CTALink1: "https://www.copaair.com/en-gs/travel-information/complement-your-trip/",
        imgUrl2: "https://www.copaair.com/assets/Pool.png",
        title2: "Hotels",
        description2: "Book your hotel at a discount",
        labelLink2: "Learn more",
        CTALink2: "https://www.copaair.com/en-gs/travel-information/complement-your-trip/"
      },
      PT: {
        imgUrl1: "https://www.copaair.com/assets/alquiler-auto.png",
        title1: "Aluguel de Carros",
        description1: "Reserve seu carro com desconto",
        labelLink1: "Ver mais",
        CTALink1: "https://www.copaair.com/pt-gs/informacoes-ao-viajar/complementar-sua-viagem/",
        imgUrl2: "https://www.copaair.com/assets/Pool.png",
        title2: "Hotéis",
        description2: "Reserve seu hotel com desconto",
        labelLink2: "Saiba mais",
        CTALink2: "https://www.copaair.com/pt-gs/informacoes-ao-viajar/complementar-sua-viagem/"
      },
      FR: {
        imgUrl1: "https://www.copaair.com/assets/alquiler-auto.png",
        title1: "Location de voitures",
        description1: "Réservez votre voiture à prix réduit",
        labelLink1: "Voir plus",
        CTALink1: "https://www.copaair.com/fr-gs/information-au-voyage/completez-votre-voyage/",
        imgUrl2: "https://www.copaair.com/assets/Pool.png",
        title2: "Hôtels",
        description2: "Réservez votre hôtel à prix réduit",
        labelLink2: "En savoir plus",
        CTALink2: "https://www.copaair.com/fr-gs/information-au-voyage/completez-votre-voyage/"
      },
    }
  },
}}
