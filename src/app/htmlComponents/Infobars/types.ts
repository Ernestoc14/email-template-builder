export interface Infobars {
  componentName: string;
  variant: string;
  props: InfobarsTranslations;
}

export interface InfobarsTranslations {
  ES: InfobarsProps;
  EN: InfobarsProps;
  PT: InfobarsProps;
  FR: InfobarsProps;
}

export interface InfobarsProps {
  imageURL: string;
  labelTextDestination: string;
  destination: string;
  labelTextDate: string;
  date: string;
  labelTextReservationCode: string;
  reservationCode: string;
}