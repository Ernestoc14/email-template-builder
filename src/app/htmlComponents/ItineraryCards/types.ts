export interface ItineraryCards {
  componentName: string;
  variant: string;
  props: ItineraryCardsTranslations;
}

export interface ItineraryCardsTranslations {
  ES: ItineraryCardsProps;
  EN: ItineraryCardsProps;
  PT: ItineraryCardsProps;
  FR: ItineraryCardsProps;
}

export interface ItineraryCardsProps {
  date: string;
  aircraft?: string;
  pillsFlightStatus?: string;
  departureCrossedOutTime?: string;
  departureTime: string;
  flightDuration: string;
  arrivalTime: string;
  arrivalCrossedOutTime?: string;
  origin?: string;
  destination?: string;
  labelTextOriginTerminal?: string;
  originTerminal?: string;
  labelTextOriginGate?: string;
  originGate?: string;
  labelTextDestinationTerminal?: string;
  destinationTerminal?: string;
  labelTextDestinationGate?: string;
  destinationGate?: string;
}