export interface ItineraryCardAdelantadoProps {
  variant: "adelantado";
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
} 

export interface ItineraryCardATiempoProps {
  variant: "atiempo";
  date: string;
  aircraft: string;
  pillsFlightStatus: string;
  departureTime: string;
  flightDuration: string;
  arrivalTime: string;
  origin: string;
  destination: string;
  originTerminal: string;
  originGate: string;
  destinationTerminal: string;
  destinationGate: string;
}

export interface ItineraryCardCambiosProps {
  variant: "cambios";
  date: string;
  aircraft: string;
  pillsFlightStatus: string;
  departureTime: string;
  flightDuration: string;
  arrivalTime: string;
  origin: string;
  destination: string;
  originTerminal: string;
  originGate: string;
  destinationTerminal: string;
  destinationGate: string;
}

export interface ItineraryCardCancelProps {
  variant: "cancel";
  date: string;
  aircraft: string;
  pillsFlightStatus: string;
  departureTime: string;
  flightDuration: string;
  arrivalTime: string;
  origin: string;
  destination: string;
  originTerminal: string;
  originGate: string;
  destinationTerminal: string;
  destinationGate: string;
}

export interface ItineraryCardDemoradoProps {
  variant: "demorado";
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
}


export type ItineraryCardsProps = ItineraryCardAdelantadoProps | ItineraryCardATiempoProps | ItineraryCardCambiosProps | ItineraryCardCancelProps | ItineraryCardDemoradoProps; 