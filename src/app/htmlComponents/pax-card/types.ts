export interface PaxCardSimpleProps {
  variant: "simple";
}

export interface PaxCardWCIProps {
  variant: "wci";
}

export type PaxCardsProps = PaxCardSimpleProps | PaxCardWCIProps;