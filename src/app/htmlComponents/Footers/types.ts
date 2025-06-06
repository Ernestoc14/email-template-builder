export interface Footers {
  componentName: string;
  variant: string;
  props: FootersTranslations;
}

export interface FootersTranslations {
  ES: FootersProps;
  EN: FootersProps;
  PT: FootersProps;
  FR: FootersProps;
}

export interface FootersProps {
  text: string;
  linkText: string;
  firstLink: string;
  secondText: string;
  secondLinkText: string;
  secondLink: string;
  unsubscribeText?: string;
  unsubscribeLinkText?: string;
  unsubscribeLink?: string;
}