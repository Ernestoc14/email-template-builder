export interface HeaderCopaBothLogo {
  variant: "copaBothLogo";
  copaLogoURL: string;
  aditionalLogoURL: string;
}

export interface HeaderReservationCode {
  variant: "reservationCode";
  copaLogoURL: string;
  reservationCode: string;
}

export interface HeaderCopaSingleLogo {
  variant: "copaSingleLogo";
  copaLogoURL: string;
}

export type HeadersProps = HeaderCopaBothLogo | HeaderReservationCode | HeaderCopaSingleLogo;