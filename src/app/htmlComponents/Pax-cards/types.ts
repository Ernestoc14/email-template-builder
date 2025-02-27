export interface PaxCards {
  componentName: string;
  variant: string;
  renderHTML: string;
  previewHTML: string;
  props: PaxCardsTranslations;
}

export interface PaxCardsTranslations {
  ES: PaxCardsProps;
  EN: PaxCardsProps;
  PT: PaxCardsProps;
  FR: PaxCardsProps;
}

export interface PaxCardsProps {
  initials: string;
  paxName: string;
  lealtad: string;
  seats: string;
  labelTextDocument?: string;
  documentStatus?: string;
  iconURL?: string;
  status: string;
}