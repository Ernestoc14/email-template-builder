export interface PaxCards {
  componentName: string;
  variant: string;
  props: PaxCardsTranslations;
}

export interface PaxCardsTranslations {
  ES: PaxCardsProps;
  EN: PaxCardsProps;
  PT: PaxCardsProps;
  FR: PaxCardsProps;
}

export interface PaxCardsProps {
  paxName: string;
  paxInitials: string;
  status: string;
  seats: string;
  paxName2?: string;
  paxInitials2?: string;
  status2?: string;
  seats2?: string;
  labelTextDocument?: string;
  documentStatus?: string;
  iconURL?: string;
}