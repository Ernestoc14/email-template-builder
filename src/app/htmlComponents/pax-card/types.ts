export interface PaxCardSimpleProps {
  variant: "simple";
  paxName: string;
  lealtad: string;
  seats: string;
  status: string;
}

export interface PaxCardWCIProps {
  variant: "wci";
  paxName: string;
  lealtad: string;
  seats: string;
  status: string;
}

export type PaxCardsProps = PaxCardSimpleProps | PaxCardWCIProps;