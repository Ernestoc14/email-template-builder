export interface Headers {
  componentName: string;
  variant: string;
  renderHTML: string;
  previewHTML: string;
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
}

// const header:Headers = object  
// header.props[lang].labelTextReservationCode
