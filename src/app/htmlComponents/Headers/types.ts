export interface Headers {
  componentName: string;
  variant: string;
  props: HeadersTranslations;
}

export interface HeadersTranslations {
  ES: HeadersProps;
  EN: HeadersProps;
  PT: HeadersProps;
  FR: HeadersProps;
}

export interface HeadersProps {
  labelTextReservationCode: string;
  reservationCode: string;
  secondLogoUrl:  string;
}